// Globe 3D de l'accueil : la Terre (images satellite NASA) avec les actus du jour.
// Bibliothèque : globe.gl (three.js), chargée seulement quand l'accueil est affiché.
(function () {
  "use strict";

  const LIB = "assets/vendor/globe.gl.min.js";
  const TEX = {
    earth: "assets/earth/earth-blue-marble.jpg",
    bump: "assets/earth/earth-topology.png",
    clouds: "assets/earth/clouds-alpha.jpg"
  };

  let libPromise = null;
  function loadLib() {
    if (window.Globe) return Promise.resolve();
    if (!libPromise) {
      libPromise = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = LIB;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    return libPromise;
  }

  function webglOK() {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch (e) { return false; }
  }

  // Regroupe les actus par lieu, puis les lieux trop proches (moins de ~8°) en un seul point,
  // pour que les étiquettes ne se chevauchent pas. Chaque actu garde le nom de son lieu.
  function placesFrom(news) {
    const spots = [];
    news.forEach((n) => (n.geo || []).forEach((g) => {
      const [lng, lat] = g.coords;
      const near = spots.find((p) => {
        const dx = (lng - p.lng) * Math.cos((lat * Math.PI) / 180), dy = lat - p.lat;
        return Math.hypot(dx, dy) < 8;
      });
      const entry = { news: n, place: g.name };
      const short = g.label || g.name;
      if (near) {
        near.items.push(entry);
        if (!near.names.includes(g.name)) { near.names.push(g.name); near.labels.push(short); }
      } else {
        spots.push({ lng, lat, names: [g.name], labels: [short], items: [entry] });
      }
    }));
    spots.forEach((p) => {
      p.name = p.labels.length > 1 ? `${p.labels[0]} +${p.labels.length - 1}` : p.labels[0];
      p.title = p.names.join(", ");
      // Étiquette à gauche du point si un autre point est juste à sa droite, à la même hauteur.
      p.left = spots.some((q) => q !== p && q.lng > p.lng && q.lng - p.lng < 30 && Math.abs(q.lat - p.lat) < 6);
    });
    return spots;
  }

  // Zoom : pincement à deux doigts sur mobile, Ctrl + molette (ou pincement du pavé tactile) sur
  // ordinateur, et boutons + / −. La molette seule continue de faire défiler la page.
  function addZoom(world, container, controls) {
    controls.enableZoom = true;
    controls.minDistance = 125;
    controls.maxDistance = 480;
    container.addEventListener("wheel", (e) => {
      if (!e.ctrlKey && !e.metaKey) e.stopPropagation();
    }, { capture: true });
    const box = document.createElement("div");
    box.className = "globe-zoom";
    box.innerHTML = '<button type="button" data-z="0.7" aria-label="Zoomer">+</button><button type="button" data-z="1.4" aria-label="Dézoomer">−</button>';
    box.addEventListener("pointerdown", (e) => e.stopPropagation());
    box.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      e.stopPropagation();
      controls.autoRotate = false;
      const pov = world.pointOfView();
      const alt = Math.min(3.8, Math.max(0.25, pov.altitude * Number(b.dataset.z)));
      world.pointOfView({ lat: pov.lat, lng: pov.lng, altitude: alt }, 500);
    });
    container.appendChild(box);
  }

  // Ajoute une couche de nuages qui tourne lentement, en réutilisant les classes three.js du globe.
  function addClouds(world) {
    try {
      let globeMesh = null;
      world.scene().traverse((o) => {
        if (!globeMesh && o.isMesh && o.geometry && o.geometry.type === "SphereGeometry") globeMesh = o;
      });
      if (!globeMesh) return;
      const Material = world.globeMaterial().constructor;
      const img = new Image();
      img.onload = () => {
        const tex = world.globeMaterial().map;
        if (!tex) return;
        const alpha = tex.clone();
        alpha.image = img;
        alpha.needsUpdate = true;
        const mat = new Material({ color: 0xffffff, alphaMap: alpha, transparent: true, depthWrite: false, opacity: 0.85 });
        const clouds = new globeMesh.constructor(globeMesh.geometry, mat);
        clouds.scale.setScalar(1.006);
        globeMesh.parent.add(clouds);
        const spin = () => {
          if (!document.body.contains(world.renderer().domElement)) return;
          clouds.rotation.y += 0.00012;
          requestAnimationFrame(spin);
        };
        spin();
      };
      img.src = TEX.clouds;
    } catch (e) { /* les nuages sont un bonus : on s'en passe si ça échoue */ }
  }

  // Classe de couleur d'une valeur selon les seuils de l'indicateur (0 = plus faible).
  function classOf(v, bins) {
    let i = 0;
    while (i < bins.length && v >= bins[i]) i++;
    return i;
  }

  // Centre approximatif d'un pays (milieu de son plus grand polygone), pour y diriger la caméra.
  function centerOf(feature) {
    const polys = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    let best = polys[0], size = 0;
    polys.forEach((p) => { if (p[0].length > size) { size = p[0].length; best = p; } });
    let minX = 180, maxX = -180, minY = 90, maxY = -90;
    best[0].forEach(([x, y]) => { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); });
    return { lng: (minX + maxX) / 2, lat: (minY + maxY) / 2 };
  }

  async function mountIndicators(container, { features, names, onSelect }) {
    if (!webglOK()) { container.classList.add("no-webgl"); return null; }
    await loadLib();
    if (!document.body.contains(container)) return null;

    let ind = null, hovered = null, selected = null;
    const valueOf = (f) => ind && ind.values[f.id];
    const nameOf = (f) => (names && names[f.id]) || f.properties.name;
    // Les pays sont colorés selon leur classe et « montent » d'autant plus que la valeur est élevée.
    function capColor(f) {
      const d = valueOf(f);
      if (!d) return f === hovered ? "rgba(90,96,110,.9)" : "rgba(52,57,68,.85)";
      return ind.colors[classOf(d.v, ind.bins)];
    }
    function altitude(f) {
      const d = valueOf(f);
      const base = d ? 0.01 + classOf(d.v, ind.bins) * 0.012 : 0.004;
      return base + (f === hovered || f === selected ? 0.025 : 0);
    }

    // Océans sombres : une texture unie de 2 × 1 px, générée sur place (globe.gl a besoin d'une image).
    const ocean = document.createElement("canvas");
    ocean.width = 2; ocean.height = 1;
    const ctx = ocean.getContext("2d");
    ctx.fillStyle = "#0a1628"; ctx.fillRect(0, 0, 2, 1);

    const world = new window.Globe(container, { animateIn: true })
      .globeImageUrl(ocean.toDataURL())
      .backgroundColor("rgba(0,0,0,0)")
      .showAtmosphere(true)
      .atmosphereColor("#3b7fe0")
      .atmosphereAltitude(0.16)
      .width(container.clientWidth)
      .height(container.clientHeight)
      .polygonsData(features)
      .polygonCapColor((f) => capColor(f))
      .polygonSideColor((f) => (valueOf(f) ? capColor(f) + "b3" : "rgba(52,57,68,.6)"))
      .polygonStrokeColor(() => "rgba(255,255,255,0.28)")
      .polygonAltitude((f) => altitude(f))
      .polygonsTransitionDuration(500)
      .polygonLabel((f) => {
        const d = valueOf(f);
        return `<div class="globe-tip"><strong>${nameOf(f)}</strong>${d ? `<span>${String(d.v).replace(".", ",")} ${ind.unit} · ${d.d}</span>` : "<span>Pas de donnée</span>"}</div>`;
      })
      .onPolygonHover((f) => {
        hovered = f;
        container.style.cursor = f ? "pointer" : "grab";
        // Nouvelles fonctions = globe.gl recalcule couleurs et hauteurs.
        world.polygonAltitude((x) => altitude(x)).polygonCapColor((x) => capColor(x));
      })
      .onPolygonClick((f) => select(f));


    const controls = world.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    addZoom(world, container, controls);
    world.pointOfView({ lat: 25, lng: 15, altitude: 2.4 });

    function refresh() { world.polygonsData(features.slice()); }
    function select(f, fly = true) {
      selected = f;
      controls.autoRotate = false;
      if (f && fly) { const c = centerOf(f); world.pointOfView({ lat: c.lat, lng: c.lng, altitude: 1.6 }, 1200); }
      refresh();
      if (onSelect) onSelect(f, f && valueOf(f), f && nameOf(f));
    }

    const onResize = () => {
      if (!document.body.contains(container)) return window.removeEventListener("resize", onResize);
      world.width(container.clientWidth).height(container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return {
      world,
      setIndicator(next) { ind = next; refresh(); },
      selectById(id) { const f = features.find((x) => x.id === id); if (f) select(f); },
      destroy() { try { world.pauseAnimation(); world.renderer().dispose(); } catch (e) {} }
    };
  }

  window.GeocoGlobe = {
    mountIndicators,
    classOf,
    // container : élément qui reçoit le globe ; onOpen(place) : appelé quand on touche un lieu.
    async mount(container, news, { onOpen } = {}) {
      if (!webglOK()) { container.classList.add("no-webgl"); return null; }
      await loadLib();
      if (!document.body.contains(container)) return null;

      const places = placesFrom(news);
      const arcs = [];
      news.forEach((n) => (n.routes || []).forEach((r) => {
        const from = n.geo && n.geo[0];
        if (from) arcs.push({ startLng: from.coords[0], startLat: from.coords[1], endLng: r.to[0], endLat: r.to[1] });
      }));

      const world = new window.Globe(container, { animateIn: true })
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl(TEX.earth)
        .bumpImageUrl(TEX.bump)
        .showAtmosphere(true)
        .atmosphereColor("#5aa9ff")
        .atmosphereAltitude(0.2)
        .width(container.clientWidth)
        .height(container.clientHeight)
        // Ondes lumineuses sur chaque lieu d'actu
        .ringsData(places)
        .ringLat("lat").ringLng("lng")
        .ringColor(() => (t) => `rgba(245,200,107,${(1 - t) * 0.9})`)
        .ringMaxRadius(5)
        .ringPropagationSpeed(2.2)
        .ringRepeatPeriod(1600)
        // Routes (ex. le pétrole qui part d'Ormuz)
        .arcsData(arcs)
        .arcColor(() => ["rgba(245,200,107,0.95)", "rgba(90,169,255,0.5)"])
        .arcStroke(0.45)
        .arcAltitudeAutoScale(0.35)
        .arcDashLength(0.35)
        .arcDashGap(0.15)
        .arcDashAnimateTime(2600)
        // Étiquettes HTML cliquables
        .htmlElementsData(places)
        .htmlLat("lat").htmlLng("lng").htmlAltitude(0.015)
        .htmlElement((p) => {
          const el = document.createElement("button");
          el.className = p.left ? "globe-pin left" : "globe-pin";
          el.dataset.n = p.items.length;
          el.setAttribute("aria-label", `${p.title} : ${p.items.length} actu${p.items.length > 1 ? "s" : ""}`);
          el.innerHTML = `<span class="globe-dot"></span><span class="globe-label">${p.name}${p.items.length > 1 ? ` <em>${p.items.length}</em>` : ""}</span>`;
          el.addEventListener("click", (e) => { e.stopPropagation(); focus(p); });
          return el;
        });

      const controls = world.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;
      addZoom(world, container, controls);
      controls.enableDamping = true;

      // Point de vue de départ : le Golfe et l'Europe, là où se concentre l'actu.
      world.pointOfView({ lat: 28, lng: 20, altitude: 2.3 });

      function focus(p) {
        controls.autoRotate = false;
        world.pointOfView({ lat: p.lat - 8, lng: p.lng, altitude: 1.35 }, 1400);
        if (onOpen) onOpen(p);
      }

      addClouds(world);

      // Anti-chevauchement : plusieurs fois par seconde, on masque les étiquettes qui en recouvrent
      // une autre plus importante (plus d'actus). Les points lumineux restent toujours visibles.
      const declutter = () => {
        if (!document.body.contains(container)) return clearInterval(timer);
        const labels = [...container.querySelectorAll(".globe-pin")]
          .map((pin) => ({ pin, label: pin.querySelector(".globe-label"), n: Number(pin.dataset.n) || 1 }))
          .filter((x) => x.label && x.pin.offsetParent !== null && x.pin.style.opacity !== "0")
          .sort((a, b) => b.n - a.n);
        const placed = [];
        labels.forEach(({ label }) => {
          label.classList.remove("muted-label");
          const r = label.getBoundingClientRect();
          if (!r.width) return;
          const hit = placed.some((q) => r.left < q.right + 4 && r.right + 4 > q.left && r.top < q.bottom + 2 && r.bottom + 2 > q.top);
          if (hit) label.classList.add("muted-label");
          else placed.push(r);
        });
      };
      const timer = setInterval(declutter, 250);

      const onResize = () => {
        if (!document.body.contains(container)) return window.removeEventListener("resize", onResize);
        world.width(container.clientWidth).height(container.clientHeight);
      };
      window.addEventListener("resize", onResize);

      return {
        world,
        places,
        focus,
        reset() {
          world.pointOfView({ lat: 28, lng: 20, altitude: 2.3 }, 1400);
          controls.autoRotate = true;
        },
        destroy() {
          try { world.pauseAnimation(); world.renderer().dispose(); } catch (e) {}
        }
      };
    }
  };
})();
