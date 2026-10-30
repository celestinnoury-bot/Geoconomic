// Illustrations des actus (demande de l'auteur, 30 oct. 2026) : chaque actu reçoit un petit dessin tiré de ses
// propres lieux et chiffres, et la forme change d'une actu à l'autre pour ne pas lasser :
// hémicycle (sièges), flux (deux lieux reliés), pictogrammes (« A contre B »), chiffre-choc (un %, un record),
// carte de situation (le pays et ses voisins) ou silhouette (le pays seul, un point sur la ville).
// Aucune image : du SVG calculé à partir de data/news.js et des contours de data/countries.js.
// Exposé sur window.GeocoIllus : kinds(n), pick(n, avoid), svg(n, kind).
(function () {
  "use strict";
  const W = 340, H = 190;
  const COL = { eco: "#ff8a3d", geo: "#8e8cff", mix: "#66d4cf", land: "#2b2f3c", sea: "#0f1626", text: "#f5f5f7", mute: "#9a9aa3", red: "#ff453a" };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const accent = (n) => COL[n.theme] || COL.eco;

  // ---------- Lecture des chiffres (« 53 contre 48 », « 3,512 millions », « +11,7 % ») ----------
  const num = (s) => Number(String(s).replace(/\s| | /g, "").replace(",", "."));
  const ints = (s) => (String(s).match(/\d[\d\s  ]*(?:[.,]\d+)?/g) || []).map(num).filter((x) => !isNaN(x));
  const figText = (f) => `${f.value} ${f.label || ""}`;
  const isYear = (x) => x >= 1900 && x <= 2100 && Number.isInteger(x);
  // Les actus sont traduites sur place : les mots repères sont cherchés dans les 6 langues de l'appli.
  const VS = /\s(?:contre|vs\.?|versus|against|contra|gegen|contro)\s/i;
  const SEAT = /si[eè]ge|seat|esca[ñn]o|sitz|seggi|assento|cadeira/i;
  const OUTOF = /(?:sur|out of|of|de|von|su|em|di)\s+(\d{2,3})\b/i;
  const RECORD = /record|rekord|r[ée]cord|plus haut|plus bas|highest|lowest|m[áa]ximo|h[öo]chst/i;
  function versus(n) {
    // Deux nombres entiers reliés par « contre » dans un même chiffre clé (pas des années).
    for (const f of n.figures || []) {
      const t = figText(f);
      if (!VS.test(" " + t + " ")) continue;
      const xs = ints(t).filter((x) => Number.isInteger(x) && !isYear(x));
      if (xs.length >= 2 && xs[0] > 0 && xs[1] > 0 && Math.max(xs[0], xs[1]) <= 400) {
        const [left, right] = (f.label || "").split(VS);
        return { a: xs[0], b: xs[1], f, total: (t.match(OUTOF) || [])[1], la: left, lb: right };
      }
    }
    return null;
  }
  function seats(n) {
    const v = versus(n);
    const txt = (n.figures || []).map(figText).join(" ") + " " + n.title;
    if (!v || !SEAT.test(txt) || !v.total) return null;
    const total = Number(v.total);
    return total >= v.a + v.b && total <= 800 ? Object.assign(v, { total }) : null;
  }
  const shock = (n) => (n.figures || []).find((f) => /%/.test(f.value) || RECORD.test(f.label || "")) || (RECORD.test(n.title) ? (n.figures || [])[0] : null);

  // ---------- Géographie ----------
  const feats = () => (window.GEOCO_COUNTRIES && window.GEOCO_COUNTRIES.features) || [];
  const boxes = new Map();
  function bbox(f) {
    if (boxes.has(f)) return boxes.get(f);
    let a = [180, 90, -180, -90];
    // Le plus grand morceau seulement pour cadrer (îles lointaines, territoires d'outre-mer).
    const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    let best = null, bestN = -1;
    polys.forEach((p) => { if (p[0].length > bestN) { bestN = p[0].length; best = p; } });
    best[0].forEach(([x, y]) => { a = [Math.min(a[0], x), Math.min(a[1], y), Math.max(a[2], x), Math.max(a[3], y)]; });
    boxes.set(f, a); return a;
  }
  const countryAt = (lon, lat) => { const c = window.GeocoGlobe && window.GeocoGlobe.contains; return c ? feats().find((f) => c(f, lon, lat)) : null; };
  const merc = ([lon, lat]) => [lon, -Math.log(Math.tan(Math.PI / 4 + Math.max(-85, Math.min(85, lat)) * Math.PI / 360)) * 180 / Math.PI];

  // Cadre autour d'une étendue [ouest, sud, est, nord], au format de l'illustration, avec un peu de marge.
  function frame(b, minSpan = 9, pad = 0.35) {
    let [x0, y1] = merc([b[0], b[1]]), [x1, y0] = merc([b[2], b[3]]);
    let w = Math.max(minSpan, (x1 - x0) * (1 + pad)), h = Math.max(minSpan * H / W, (y1 - y0) * (1 + pad));
    if (w / h > W / H) h = w * H / W; else w = h * W / H;
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    const k = W / w, ox = cx - w / 2, oy = cy - h / 2;
    const P = (p) => { const [x, y] = merc(p); return [(x - ox) * k, (y - oy) * k]; };
    const lonLat = [cx - w / 2, cx + w / 2]; // pour trier les pays visibles
    return { P, lon0: lonLat[0] - 5, lon1: lonLat[1] + 5, lat0: b[1] - h, lat1: b[3] + h };
  }
  function pathOf(f, P) {
    const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    let d = "";
    polys.forEach((poly) => poly.forEach((ring) => {
      let prev = null;
      ring.forEach((pt, i) => {
        const [x, y] = P(pt);
        const jump = prev && Math.abs(pt[0] - prev[0]) > 180; // ne pas tirer de trait à travers la carte (180°)
        d += (i === 0 || jump ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1);
        prev = pt;
      });
      d += "Z";
    }));
    return d;
  }
  function landLayer(fr, hi, hiColor) {
    return feats().filter((f) => { const b = bbox(f); return b[2] >= fr.lon0 && b[0] <= fr.lon1 && b[3] >= fr.lat0 - 10 && b[1] <= fr.lat1 + 10; })
      .map((f) => `<path d="${pathOf(f, fr.P)}" fill="${f === hi ? hiColor : COL.land}" fill-opacity="${f === hi ? 0.85 : 1}" stroke="#000" stroke-width=".6"/>`).join("");
  }
  const placeName = (g) => (g.label && g.name && g.label !== g.name ? g.name.split(",")[0] : g.label || g.name || "").trim();
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}"${o.anchor ? ` text-anchor="${o.anchor}"` : ""} fill="${o.fill || COL.text}" font-size="${o.size || 11}" font-weight="${o.weight || 600}"${o.serif ? ' font-family="Times New Roman, Times, serif"' : ""}>${esc(s)}</text>`;
  // Deux lignes au plus, coupées entre les mots.
  const wrap2 = (s, n) => { const w = String(s || "").split(/\s+/); let a = "", b = ""; for (const x of w) { if (!b && (a + " " + x).trim().length <= n) a = (a + " " + x).trim(); else b = (b + " " + x).trim(); } return [a, b.length > n ? b.slice(0, n - 1).trim() + "…" : b]; };
  const fit = (s, width, max) => Math.max(12, Math.min(max, width / (0.56 * Math.max(1, String(s).length))));
  const short = (s, n = 34) => (s = String(s || ""), s.length > n ? s.slice(0, n - 1).trim() + "…" : s);

  // ---------- Les formes ----------
  function drawMap(n) {
    const g = (n.geo || [])[0]; if (!g) return drawShock(n, true);
    const c = countryAt(g.coords[0], g.coords[1]);
    const b = c ? bbox(c) : [g.coords[0] - 6, g.coords[1] - 4, g.coords[0] + 6, g.coords[1] + 4];
    // Le pays occupe la gauche ; le chiffre clé se pose à droite.
    const fr = frame([b[0], b[1], b[2] + (b[2] - b[0]) * 0.9 + 4, b[3]], 10, 0.25);
    const [x, y] = fr.P(g.coords), f0 = (n.figures || [])[0];
    return `${landLayer(fr, c, accent(n))}<circle cx="${x}" cy="${y}" r="4" fill="#fff"/>${T(x + 8, y + 4, placeName(g))}
      ${f0 ? (() => { const [l1, l2] = wrap2(f0.label, 24); return `<rect x="${W * 0.6 - 10}" y="40" width="${W * 0.4}" height="74" rx="10" fill="#000" fill-opacity=".55"/>${T(W * 0.6, 74, short(f0.value, 18), { size: fit(short(f0.value, 18), W * 0.4 - 18, 26), weight: 700, serif: true })}${T(W * 0.6, 92, l1, { size: 10, weight: 500, fill: COL.mute })}${T(W * 0.6, 105, l2, { size: 10, weight: 500, fill: COL.mute })}`; })() : ""}`;
  }
  function drawSilhouette(n) {
    const g = (n.geo || [])[0]; if (!g) return drawShock(n, true);
    const c = countryAt(g.coords[0], g.coords[1]); if (!c) return drawMap(n);
    const fr = frame(bbox(c), 3, 0.3), [x, y] = fr.P(g.coords);
    return `<rect width="${W}" height="${H}" fill="#15161b"/><path d="${pathOf(c, fr.P)}" fill="#dcdce2"/><circle cx="${x}" cy="${y}" r="6" fill="${COL.red}"/>${T(x + 10, y + 4, placeName(g).toUpperCase(), { fill: "#000", size: 11, weight: 700 })}`;
  }
  function drawFlow(n) {
    const [g1, g2] = n.geo;
    const b = [Math.min(g1.coords[0], g2.coords[0]), Math.min(g1.coords[1], g2.coords[1]), Math.max(g1.coords[0], g2.coords[0]), Math.max(g1.coords[1], g2.coords[1])];
    const fr = frame(b, 12, 0.9), a = fr.P(g1.coords), z = fr.P(g2.coords);
    const mid = [(a[0] + z[0]) / 2, Math.max(36, Math.min(a[1], z[1]) - 34)], f0 = (n.figures || [])[0];
    const c1 = countryAt(...g1.coords), c2 = countryAt(...g2.coords);
    const land = feats().filter((f) => { const bb = bbox(f); return bb[2] >= fr.lon0 && bb[0] <= fr.lon1 && bb[3] >= fr.lat0 - 10 && bb[1] <= fr.lat1 + 10; })
      .map((f) => `<path d="${pathOf(f, fr.P)}" fill="${f === c1 || f === c2 ? "#3a3550" : COL.land}" stroke="#000" stroke-width=".6"/>`).join("");
    const label = f0 ? short(f0.value + " " + (f0.label || ""), 30) : "";
    return `${land}<path class="il-flow" d="M${a}Q${mid} ${z}" fill="none" stroke="${accent(n)}" stroke-width="3" stroke-linecap="round"/>
      ${[[a, g1], [z, g2]].map(([p, g]) => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#fff"/>${T(p[0], p[1] + 16, short(placeName(g), 18), { anchor: "middle" })}`).join("")}
      ${label ? `<rect x="${mid[0] - label.length * 3.1 - 10}" y="${mid[1] - 24}" width="${label.length * 6.2 + 20}" height="22" rx="11" fill="#000" stroke="${accent(n)}"/>${T(mid[0], mid[1] - 9, label, { anchor: "middle" })}` : ""}`;
  }
  function drawHemicycle(n) {
    const s = seats(n), cx = W / 2, cy = H - 30, pos = [];
    const rows = s.total > 300 ? 8 : 6, r0 = 44, dr = (88 - r0) / (rows - 1);
    const per = s.total / rows;
    for (let r = 0; r < rows; r++) { const rad = r0 + r * dr, k = Math.max(3, Math.round(per * (rad / ((r0 + 88) / 2)))); for (let i = 0; i < k; i++) pos.push({ a: Math.PI - (i / (k - 1)) * Math.PI, rad }); }
    pos.sort((p, q) => q.a - p.a || p.rad - q.rad);
    const pick = pos.length > s.total ? pos.filter((_, i) => i % (pos.length / s.total) < 1).slice(0, s.total) : pos;
    const rr = Math.max(1.6, Math.min(4.4, 300 / s.total));
    const colorOf = (i) => (i < s.a ? COL.geo : i >= pick.length - s.b ? COL.eco : COL.land);
    const maj = Math.floor(s.total / 2) + 1;
    return `${pick.map((p, i) => `<circle cx="${(cx + Math.cos(p.a) * p.rad).toFixed(1)}" cy="${(cy - Math.sin(p.a) * p.rad).toFixed(1)}" r="${rr}" fill="${colorOf(i)}"/>`).join("")}
      ${T(cx, cy - 6, String(maj), { anchor: "middle", size: 24, weight: 700, serif: true })}${T(cx, cy + 10, "pour la majorité", { anchor: "middle", size: 10, weight: 500, fill: COL.mute })}
      ${T(12, 20, short((s.la || "").replace(/^(le |la |les )/i, ""), 22) + " " + s.a, { fill: COL.geo })}${T(W - 12, 20, short((s.lb || "").replace(/,.*$/, ""), 20) + " " + s.b, { anchor: "end", fill: COL.eco })}`;
  }
  function drawPicto(n) {
    const v = versus(n), unit = Math.max(v.a, v.b) > 120 ? 5 : 1;
    const dots = (count, y0, color) => { let out = "", k = Math.round(count / unit); for (let i = 0; i < k; i++) out += `<rect x="${14 + (i % 26) * 12}" y="${y0 + Math.floor(i / 26) * 12}" width="8" height="8" rx="2" fill="${color}"/>`; return [out, Math.ceil(k / 26) * 12]; };
    const [d1, h1] = dots(v.a, 46, accent(n)), [d2] = dots(v.b, 46 + h1 + 26, COL.land);
    const [la, lb] = [(v.la || "").replace(/\(.*$/, "").trim(), (v.lb || "").replace(/\(.*$/, "").trim()];
    return `${T(14, 22, short(v.f.label || v.f.value, 46), { size: 11 })}${T(14, 40, `${v.a}${la ? " · " + short(la, 30) : ""}`, { size: 10, weight: 500, fill: COL.mute })}${d1}
      ${T(14, 46 + h1 + 20, `${v.b}${lb ? " · " + short(lb, 30) : ""}`, { size: 10, weight: 500, fill: COL.mute })}${d2}
      ${unit > 1 ? T(W - 12, H - 10, `1 carré = ${unit}`, { anchor: "end", size: 9, weight: 500, fill: COL.mute }) : ""}`;
  }
  function drawShock(n, compact) {
    const f = shock(n) || (n.figures || [])[0];
    if (!f) return `<rect width="${W}" height="${H}" fill="#15161b"/>`;
    const v = short(f.value, 18);
    if (compact) {
      const sz = fit(v, 170, 64); // l'illustration étroite ne garde que le centre (environ 190 de large)
      return `<rect width="${W}" height="${H}" fill="#121318"/>${T(W / 2, H / 2 + sz * 0.33, v, { anchor: "middle", size: sz, weight: 700, serif: true, fill: accent(n) })}`;
    }
    const others = (n.figures || []).filter((x) => x !== f).slice(0, 2);
    const size = fit(v, 290, 54);
    return `<rect width="${W}" height="${H}" fill="#121318"/><rect x="0" y="0" width="6" height="${H}" fill="${accent(n)}"/>
      ${T(22, 78, v, { size, weight: 700, serif: true, fill: accent(n) })}${wrap2(f.label, 46).map((l, i) => T(24, 100 + i * 14, l, { size: 11, weight: 500, fill: COL.mute })).join("")}
      ${others.map((o, i) => `${T(24 + i * 150, 150, short(o.value, 16), { size: 15, weight: 700 })}${T(24 + i * 150, 166, short(o.label, 24), { size: 9.5, weight: 500, fill: COL.mute })}`).join("")}`;
  }

  // ---------- Choix de la forme ----------
  // Formes possibles pour une actu, de la plus parlante à la plus simple.
  function kinds(n) {
    const out = [];
    if (seats(n)) out.push("hemicycle");
    if ((n.geo || []).length >= 2 && n.geo[0].coords && n.geo[1].coords && (Math.abs(n.geo[0].coords[0] - n.geo[1].coords[0]) + Math.abs(n.geo[0].coords[1] - n.geo[1].coords[1])) > 2) out.push("flow");
    if (versus(n) && !seats(n)) out.push("picto");
    if (shock(n)) out.push("shock");
    out.push("map", "silhouette");
    if (!out.includes("shock") && (n.figures || []).length) out.push("shock");
    return out;
  }
  // La première forme qui n'est pas celle de l'actu d'avant (pour que deux actus voisines ne se ressemblent pas).
  function pick(n, avoid) { const k = kinds(n); return k.find((x) => x !== avoid) || k[0]; }
  const DRAW = { hemicycle: drawHemicycle, flow: drawFlow, picto: drawPicto, shock: drawShock, map: drawMap, silhouette: drawSilhouette };
  // compact : carte étroite (illustration recadrée au centre) : la silhouette du pays, sinon le chiffre seul, centrés.
  function svg(n, kind, compact) {
    let inner = "";
    if (compact) kind = (n.geo || [])[0] && countryAt(n.geo[0].coords[0], n.geo[0].coords[1]) ? "silhouette" : "shock";
    try { inner = compact && kind === "shock" ? drawShock(n, true) : DRAW[kind || pick(n)](n); } catch (e) { inner = drawShock(n); }
    return `<svg class="illus" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(n.title)}" preserveAspectRatio="xMidYMid slice"><rect width="${W}" height="${H}" fill="${COL.sea}"/>${inner}</svg>`;
  }
  window.GeocoIllus = { kinds, pick, svg };
})();
