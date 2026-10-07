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

  // Regroupe les actus par lieu : un point sur le globe peut porter plusieurs actus.
  function placesFrom(news) {
    const map = new Map();
    news.forEach((n) => (n.geo || []).forEach((g) => {
      const key = g.coords.join(",");
      if (!map.has(key)) map.set(key, { name: g.name, lng: g.coords[0], lat: g.coords[1], items: [] });
      map.get(key).items.push(n);
    }));
    return [...map.values()];
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

  window.GeocoGlobe = {
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
          el.className = "globe-pin";
          el.innerHTML = `<span class="globe-dot"></span><span class="globe-label">${p.name}${p.items.length > 1 ? ` <em>${p.items.length}</em>` : ""}</span>`;
          el.addEventListener("click", (e) => { e.stopPropagation(); focus(p); });
          return el;
        });

      const controls = world.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;
      controls.enableZoom = false; // la molette et le pincement servent à faire défiler la page
      controls.enableDamping = true;

      // Point de vue de départ : le Golfe et l'Europe, là où se concentre l'actu.
      world.pointOfView({ lat: 28, lng: 20, altitude: 2.3 });

      function focus(p) {
        controls.autoRotate = false;
        world.pointOfView({ lat: p.lat - 8, lng: p.lng, altitude: 1.35 }, 1400);
        if (onOpen) onOpen(p);
      }

      addClouds(world);

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
