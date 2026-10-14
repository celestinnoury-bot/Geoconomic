// Composants visuels interactifs : cartes et graphiques.
// Exposés sur window.GeocoViz, utilisés par app.js.
(function () {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduceMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Carte ----------
  // Même projection Mercator que le fond de carte (data/world.js).
  function project([lon, lat]) {
    const W = window.GEOCO_WORLD.w;
    const k = W / (2 * Math.PI);
    const x = W / 2 + k * (lon * Math.PI / 180);
    const y = W / 2 - k * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI / 180) / 2));
    return [x, y];
  }

  // Cadre [x, y, largeur, hauteur] centré sur un point, pour une étendue en degrés de longitude.
  function frameFor(center, spanDeg, aspect) {
    const W = window.GEOCO_WORLD.w;
    const [cx, cy] = project(center);
    const w = (spanDeg / 360) * W;
    const h = w / aspect;
    return [cx - w / 2, cy - h / 2, w, h];
  }

  const WORLD_FRAME = (aspect) => {
    const W = window.GEOCO_WORLD.w;
    const top = project([0, 75])[1], bottom = project([0, -58])[1];
    const h = bottom - top, w = Math.max(W, h * aspect);
    return [(W - w) / 2, top - (w / aspect - h) / 2, w, w / aspect];
  };

  // Une carte peut avoir des couches (`layers`) : chacune a ses lieux (`points`), ses flux fléchés
  // (`flows` : { from, to, name, text, color }) et son texte d'introduction. Sans `layers`, la carte
  // n'a qu'une couche : la carte elle-même.
  function mapHTML(spec, uid) {
    const layers = spec.layers || null;
    return `
      <figure class="viz map-viz" id="${uid}">
        ${layers ? `<div class="map-layers" role="tablist">${layers.map((l, i) => `<button type="button" class="map-layer-btn" data-layer="${i}" aria-pressed="${i === 0}" style="--c:${l.color || "var(--gold)"}">${l.icon ? `<span aria-hidden="true">${l.icon}</span> ` : ""}${esc(l.label)}</button>`).join("")}</div>` : ""}
        <div class="map-stage">
          <svg class="map-svg" role="img" aria-label="${esc(spec.title)}"></svg>
          <svg class="pin-layer"></svg>
        </div>
        <div class="map-controls"></div>
        <div class="map-info" aria-live="polite"></div>
        <figcaption class="viz-cap">${esc(spec.title)} · <span>Fond de carte : Natural Earth.</span>${spec.source ? ` Source : ${spec.source}` : ""}</figcaption>
      </figure>`;
  }

  function mountMap(root, spec) {
    const world = window.GEOCO_WORLD;
    if (!world) return;
    const svg = root.querySelector(".map-svg");
    const layer = root.querySelector(".pin-layer");
    const info = root.querySelector(".map-info");
    const stage = root.querySelector(".map-stage");
    const controls = root.querySelector(".map-controls");
    const aspect = spec.aspect || 4 / 3;
    stage.style.aspectRatio = String(aspect);
    const hi = new Set(spec.highlight || []);

    // Pays
    const g = document.createElementNS(NS, "g");
    world.countries.forEach((c) => {
      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", c.d);
      p.setAttribute("class", hi.has(c.n) ? "land hi" : "land");
      g.appendChild(p);
    });
    svg.appendChild(g);

    let cur = spec.layers ? spec.layers[0] : spec;
    let pts = [], flows = [];
    const home = () => (cur.view || spec.view) ? frameFor((cur.view || spec.view).center, (cur.view || spec.view).span, aspect) : WORLD_FRAME(aspect);
    const items = () => [...(cur.points || []).map((p) => ({ kind: "pt", p })), ...(cur.flows || []).map((f) => ({ kind: "flow", p: f }))];

    // Construit les repères et les flux de la couche affichée.
    function build() {
      layer.innerHTML = "";
      const defs = document.createElementNS(NS, "defs");
      layer.appendChild(defs);
      flows = (cur.flows || []).map((f, i) => {
        const color = f.color || cur.color || "#5be7ff";
        const mk = document.createElementNS(NS, "marker");
        const id = `${root.id}-arrow-${i}`;
        mk.setAttribute("id", id); mk.setAttribute("viewBox", "0 0 10 10"); mk.setAttribute("refX", "8"); mk.setAttribute("refY", "5");
        mk.setAttribute("markerWidth", "7"); mk.setAttribute("markerHeight", "7"); mk.setAttribute("orient", "auto-start-reverse");
        mk.innerHTML = `<path d="M0,0 L10,5 L0,10 z" fill="${color}"/>`;
        defs.appendChild(mk);
        const grp = document.createElementNS(NS, "g");
        grp.setAttribute("class", "flow");
        grp.setAttribute("tabindex", "0");
        grp.setAttribute("role", "button");
        grp.setAttribute("aria-label", f.name);
        grp.style.setProperty("--c", color);
        const glow = document.createElementNS(NS, "path"); glow.setAttribute("class", "flow-glow");
        const line = document.createElementNS(NS, "path"); line.setAttribute("class", "flow-line"); line.setAttribute("marker-end", `url(#${id})`);
        const dash = document.createElementNS(NS, "path"); dash.setAttribute("class", "flow-dash");
        const hit = document.createElementNS(NS, "path"); hit.setAttribute("class", "flow-hit");
        [glow, line, dash, hit].forEach((el) => grp.appendChild(el));
        layer.appendChild(grp);
        const k = (cur.points || []).length + i;
        grp.addEventListener("click", () => select(k));
        grp.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(k); } });
        return { f, a: project(f.from), b: project(f.to), grp, paths: [glow, line, dash, hit] };
      });
      pts = (cur.points || []).map((pt, i) => {
        const [x, y] = project(pt.coords);
        const grp = document.createElementNS(NS, "g");
        grp.setAttribute("class", "pin");
        grp.setAttribute("tabindex", "0");
        grp.setAttribute("role", "button");
        grp.setAttribute("aria-label", pt.name);
        if (pt.color || cur.color) grp.style.setProperty("--pin", pt.color || cur.color);
        const halo = document.createElementNS(NS, "circle");
        halo.setAttribute("class", "pin-halo");
        const dot = document.createElementNS(NS, "circle");
        dot.setAttribute("class", "pin-dot");
        const label = document.createElementNS(NS, "text");
        label.setAttribute("class", "pin-label");
        label.textContent = pt.name;
        [halo, dot, label].forEach((el) => grp.appendChild(el));
        layer.appendChild(grp);
        grp.addEventListener("click", () => select(i));
        grp.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(i); } });
        return { x, y, halo, dot, label, grp };
      });
      const list = items();
      controls.innerHTML = list.length ? `<div class="segmented map-chips" role="group" aria-label="Lieux">
          ${spec.world !== false ? `<button data-pt="-1" aria-pressed="true">Vue d'ensemble</button>` : ""}
          ${list.map((it, i) => `<button data-pt="${i}" aria-pressed="${spec.world === false && i === 0}"${it.kind === "flow" ? ` class="chip-flow" style="--c:${it.p.color || cur.color || "#5be7ff"}"` : ""}>${it.kind === "flow" ? "➜ " : ""}${esc(it.p.name)}</button>`).join("")}
        </div>` : "";
      controls.querySelectorAll("[data-pt]").forEach((b) => b.addEventListener("click", () => select(Number(b.dataset.pt))));
    }

    let vb = spec.world === false && spec.points?.length
      ? frameFor(spec.points[0].coords, spec.points[0].zoom || 20, aspect)
      : home();
    let anim = null;

    // Les repères sont dessinés sur un calque en pixels écran, pour garder un texte net à tout niveau de zoom.
    function draw() {
      svg.setAttribute("viewBox", vb.map((v) => v.toFixed(2)).join(" "));
      const W = stage.clientWidth || 360, H = stage.clientHeight || W / aspect;
      layer.setAttribute("viewBox", `0 0 ${W} ${H}`);
      const toScreen = ([x, y]) => [((x - vb[0]) / vb[2]) * W, ((y - vb[1]) / vb[3]) * H];
      // Flux : arc courbé du départ à l'arrivée, flèche au bout.
      flows.forEach((fl) => {
        const [x1, y1] = toScreen(fl.a), [x2, y2] = toScreen(fl.b);
        const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
        const bend = Math.min(0.28 * len, 120);
        const cx = (x1 + x2) / 2 + (dy / len) * bend * (dx >= 0 ? -1 : 1), cy = (y1 + y2) / 2 - Math.abs(dx / len) * bend;
        const d = `M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
        fl.paths.forEach((p) => p.setAttribute("d", d));
      });
      const placed = [];
      // Le lieu sélectionné passe en premier : son étiquette est toujours affichée.
      [...pts].sort((a, b) => b.grp.classList.contains("active") - a.grp.classList.contains("active")).forEach((p) => {
        const [sx, sy] = toScreen([p.x, p.y]);
        p.dot.setAttribute("cx", sx); p.dot.setAttribute("cy", sy); p.dot.setAttribute("r", 5);
        p.halo.setAttribute("cx", sx); p.halo.setAttribute("cy", sy); p.halo.setAttribute("r", 14);
        // Étiquette à gauche du point si elle déborderait à droite.
        const lw = p.label.textContent.length * 6.6;
        const left = sx + 10 + lw > W - 6 && sx - 10 - lw > 6;
        const x0 = left ? sx - 10 - lw : sx + 10;
        p.label.setAttribute("x", left ? sx - 10 : sx + 10); p.label.setAttribute("y", sy + 4);
        p.label.setAttribute("text-anchor", left ? "end" : "start");
        // On masque une étiquette qui en chevaucherait une autre (le point reste visible).
        const box = [x0, sy - 8, x0 + lw, sy + 8];
        const hit = placed.some((q) => box[0] < q[2] && box[2] > q[0] && box[1] < q[3] && box[3] > q[1]);
        p.label.style.display = hit ? "none" : "";
        if (!hit) placed.push(box);
      });
    }

    function goTo(target) {
      if (anim) cancelAnimationFrame(anim);
      if (reduceMotion()) { vb = target; draw(); return; }
      const from = vb.slice(), t0 = performance.now(), dur = 900;
      const ease = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      // Interpolation logarithmique de la largeur : le zoom paraît régulier.
      const step = (now) => {
        const t = Math.min(1, (now - t0) / dur), e = ease(t);
        const w = Math.exp(Math.log(from[2]) + (Math.log(target[2]) - Math.log(from[2])) * e);
        const cx = from[0] + from[2] / 2 + ((target[0] + target[2] / 2) - (from[0] + from[2] / 2)) * e;
        const cy = from[1] + from[3] / 2 + ((target[1] + target[3] / 2) - (from[1] + from[3] / 2)) * e;
        const h = w / aspect;
        vb = [cx - w / 2, cy - h / 2, w, h];
        draw();
        if (t < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    }

    // Cadre qui contient les deux bouts d'un flux.
    function frameForFlow(f) {
      const [x1, y1] = project(f.from), [x2, y2] = project(f.to);
      const pad = 1.5, w0 = Math.abs(x2 - x1), h0 = Math.abs(y2 - y1);
      const w = Math.max(w0 * pad, h0 * pad * aspect, (12 / 360) * world.w);
      return [(x1 + x2) / 2 - w / 2, (y1 + y2) / 2 - w / aspect / 2 - 0.08 * w / aspect, w, w / aspect];
    }

    function select(i) {
      controls.querySelectorAll("[data-pt]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.pt === String(i)));
      const np = (cur.points || []).length;
      pts.forEach((p, j) => p.grp.classList.toggle("active", j === i));
      flows.forEach((fl, j) => { fl.grp.classList.toggle("active", np + j === i); fl.grp.classList.toggle("dim", i >= np && np + j !== i); });
      if (i < 0) {
        info.innerHTML = cur.intro ? `<p class="fade">${cur.intro}</p>` : "";
        goTo(home());
        return;
      }
      const it = items()[i];
      info.innerHTML = `<div class="fade"><h4>${it.kind === "flow" ? "➜ " : ""}${esc(it.p.name)}</h4><p>${it.p.text}</p></div>`;
      goTo(it.kind === "flow" ? frameForFlow(it.p) : frameFor(it.p.coords, it.p.zoom || 20, aspect));
    }

    function setLayer(k) {
      cur = spec.layers[k];
      root.querySelectorAll("[data-layer]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.layer === String(k))));
      build(); draw();
      select(-1);
    }
    root.querySelectorAll("[data-layer]").forEach((b) => b.addEventListener("click", () => setLayer(Number(b.dataset.layer))));

    build();
    draw();
    if (spec.world === false && spec.points?.length) select(0);
    else info.innerHTML = cur.intro ? `<p>${cur.intro}</p>` : "";
    const onResize = () => { if (!root.isConnected) return window.removeEventListener("resize", onResize); draw(); };
    window.addEventListener("resize", onResize);
  }

  // ---------- Graphique (barres ou ligne, une seule série) ----------
  function chartHTML(spec, uid) {
    return `
      <figure class="viz chart-viz" id="${uid}">
        <p class="viz-title">${esc(spec.title)}</p>
        ${spec.subtitle ? `<p class="viz-sub">${esc(spec.subtitle)}</p>` : ""}
        <div class="chart-stage"><svg class="chart-svg" role="img" aria-label="${esc(spec.title)}"></svg><div class="tip" hidden></div></div>
        <details class="viz-table"><summary>Voir les données</summary>
          <table><thead><tr><th>${esc(spec.xLabel || "")}</th><th>${esc(spec.unit || "Valeur")}</th></tr></thead>
          <tbody>${spec.data.map(([x, v]) => `<tr><td>${esc(x)}</td><td>${fmt(v, spec)}</td></tr>`).join("")}</tbody></table>
        </details>
        <figcaption class="viz-cap">Source : ${spec.source}</figcaption>
      </figure>`;
  }

  // `signed: true` affiche le signe (+ / −), utile pour les soldes (créations moins destructions).
  function fmt(v, spec) {
    const txt = Math.abs(v).toLocaleString(window.GeocoI18n ? window.GeocoI18n.locale : "fr-FR", { minimumFractionDigits: spec.decimals ?? 1, maximumFractionDigits: spec.decimals ?? 1 });
    const sign = v < 0 ? "−" : spec.signed && v > 0 ? "+" : "";
    return sign + txt + (spec.suffix || "");
  }

  function niceMax(v) {
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    for (const m of [1, 2, 2.5, 5, 10]) if (m * p >= v) return m * p;
    return 10 * p;
  }

  function mountChart(root, spec) {
    const svg = root.querySelector(".chart-svg");
    const tip = root.querySelector(".tip");
    const stage = root.querySelector(".chart-stage");

    function render() {
      const W = Math.max(280, stage.clientWidth), H = 240;
      const vals = spec.data.map((d) => d[1]);
      const lo = Math.min(...vals), hi = Math.max(...vals);
      let yMin, yMax, ticks;
      if (lo < 0) {
        // Valeurs négatives : axe de part et d'autre de zéro, avec un pas « rond ».
        const step = niceMax((Math.max(hi, 0) - lo) / 4);
        yMin = Math.floor(lo / step) * step;
        yMax = Math.max(step, Math.ceil(hi / step) * step);
        ticks = Math.round((yMax - yMin) / step);
      } else {
        yMin = spec.yMin ?? 0;
        yMax = niceMax(hi);
        ticks = 4;
      }
      const tickText = (v) => (v < 0 ? "−" : "") + Math.abs(v).toLocaleString(window.GeocoI18n ? window.GeocoI18n.locale : "fr-FR") + (spec.suffix || "");
      const longest = Math.max(tickText(yMin).length, tickText(yMax).length);
      const m = { t: 24, r: 16, b: 28, l: Math.max(40, longest * 6.5 + 12) };
      const iw = W - m.l - m.r, ih = H - m.t - m.b;
      const y = (v) => m.t + ih - ((v - yMin) / (yMax - yMin)) * ih;
      const n = spec.data.length;
      const band = iw / n;
      const xc = (i) => m.l + band * i + band / 2;
      const maxI = vals.indexOf(hi);
      const minI = vals.indexOf(lo);
      const lastI = n - 1;

      let out = `<svg xmlns="${NS}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">`;
      for (let k = 0; k <= ticks; k++) {
        const v = yMin + ((yMax - yMin) * k) / ticks;
        out += `<line class="grid" x1="${m.l}" x2="${W - m.r}" y1="${y(v)}" y2="${y(v)}"/>`;
        out += `<text class="axis" x="${m.l - 8}" y="${y(v) + 4}" text-anchor="end">${tickText(v)}</text>`;
      }
      if (lo < 0) out += `<line class="zero" x1="${m.l}" x2="${W - m.r}" y1="${y(0)}" y2="${y(0)}"/>`;
      const every = Math.ceil(n / Math.floor(iw / 44));
      spec.data.forEach(([x], i) => {
        if ((i % every === 0 && lastI - i >= every) || i === lastI) out += `<text class="axis" x="${xc(i)}" y="${H - 8}" text-anchor="middle">${esc(x)}</text>`;
      });

      if (spec.type === "line") {
        const pts = spec.data.map(([, v], i) => [xc(i), y(v)]);
        out += `<path class="area" d="M${pts[0][0]},${y(yMin)} ${pts.map((p) => `L${p[0]},${p[1]}`).join(" ")} L${pts[lastI][0]},${y(yMin)} Z"/>`;
        out += `<path class="line" d="M${pts.map((p) => p.join(",")).join(" L")}"/>`;
        pts.forEach((p, i) => { out += `<circle class="mark" data-i="${i}" cx="${p[0]}" cy="${p[1]}" r="4.5"/>`; });
      } else {
        const bw = Math.min(24, band - 2), r = Math.min(4, bw / 2);
        const base = lo < 0 ? 0 : yMin;
        spec.data.forEach(([, v], i) => {
          const x0 = xc(i) - bw / 2, y0 = y(v), yb = y(base);
          const rr = Math.min(r, Math.abs(yb - y0));
          if (v >= base) {
            out += `<path class="mark" data-i="${i}" d="M${x0},${yb} V${y0 + rr} Q${x0},${y0} ${x0 + rr},${y0} H${x0 + bw - rr} Q${x0 + bw},${y0} ${x0 + bw},${y0 + rr} V${yb} Z"/>`;
          } else {
            // Barre négative : elle descend sous zéro, arrondie en bas.
            out += `<path class="mark neg" data-i="${i}" d="M${x0},${yb} V${y0 - rr} Q${x0},${y0} ${x0 + rr},${y0} H${x0 + bw - rr} Q${x0 + bw},${y0} ${x0 + bw},${y0 - rr} V${yb} Z"/>`;
          }
        });
      }
      // Étiquettes directes : seulement le maximum, le minimum (s'il est négatif) et la dernière valeur.
      [...new Set([maxI, lastI, ...(lo < 0 ? [minI] : []), ...(spec.highlight || [])])].forEach((i) => {
        const below = vals[i] < 0;
        out += `<text class="val" x="${xc(i)}" y="${y(vals[i]) + (below ? 18 : -10)}" text-anchor="middle">${fmt(vals[i], spec)}</text>`;
      });
      // Zones de survol plus larges que les marques.
      spec.data.forEach((_, i) => { out += `<rect class="hit" data-i="${i}" x="${m.l + band * i}" y="${m.t}" width="${band}" height="${ih}"/>`; });
      out += `</svg>`;
      svg.innerHTML = out.replace(/^<svg[^>]*>|<\/svg>$/g, "");
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      const marks = svg.querySelectorAll(".mark");
      const show = (i) => {
        marks.forEach((mk) => mk.classList.toggle("dim", Number(mk.dataset.i) !== i));
        const [x, v] = spec.data[i];
        tip.hidden = false;
        tip.innerHTML = `<span>${esc(x)}</span><strong>${fmt(v, spec)}</strong>`;
        const left = (xc(i) / W) * stage.clientWidth;
        tip.style.left = Math.min(Math.max(left, 50), stage.clientWidth - 50) + "px";
        tip.style.top = Math.max(0, (y(v) / H) * stage.clientHeight - 54) + "px";
      };
      const hide = () => { tip.hidden = true; marks.forEach((mk) => mk.classList.remove("dim")); };
      svg.querySelectorAll(".hit").forEach((h) => {
        h.addEventListener("mouseenter", () => show(Number(h.dataset.i)));
        h.addEventListener("click", () => show(Number(h.dataset.i)));
      });
      svg.addEventListener("mouseleave", hide);
    }

    render();
    let raf;
    const onResize = () => {
      if (!root.isConnected) return window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf); raf = requestAnimationFrame(render);
    };
    window.addEventListener("resize", onResize);
  }

  // ---------- API ----------
  let counter = 0;
  window.GeocoViz = {
    // Renvoie le HTML d'une liste de visuels ; appeler mountAll() après insertion dans la page.
    html(list) {
      return (list || []).map((v) => {
        const uid = "viz-" + ++counter;
        v._uid = uid;
        return v.kind === "map" ? mapHTML(v, uid) : chartHTML(v, uid);
      }).join("");
    },
    mountAll(list) {
      (list || []).forEach((v) => {
        const root = document.getElementById(v._uid);
        if (!root) return;
        v.kind === "map" ? mountMap(root, v) : mountChart(root, v);
      });
    }
  };
})();
