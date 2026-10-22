// Cinématique de bienvenue dans Geonomix+ (après le paiement ou un code valide), façon générique de série :
// écran noir, deux coups sourds (« ta-doum », son fabriqué ici, pas celui de Netflix), on fonce vers la Terre
// qui grossit en tournant, onde de choc, feu d'artifice autour du globe, puis la carte « Bienvenue ».
// Usage : GeocoBienvenue.play({ titre, sous, bouton, onClose }). Toucher l'écran ou Échap pour passer.
(function () {
  const TEX = { color: "assets/earth/earth-blue-marble.jpg", topo: "assets/earth/earth-topology.png", clouds: "assets/earth/clouds-alpha.jpg" };
  const COLORS = ["#f5c86b", "#ff7a59", "#5aa9ff", "#3ddc97", "#ffffff", "#c58bff"];
  // Textures réduites à TW × TH pour lire leurs pixels vite : couleurs, relief (blanc = haut, noir = océan), nuages.
  const TW = 2048, TH = 1024;
  let tex = null, topo = null, clouds = null, texLoading = null;

  function readImage(src, gray) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          c.width = TW; c.height = TH;
          const g = c.getContext("2d");
          g.drawImage(img, 0, 0, TW, TH);
          const d = g.getImageData(0, 0, TW, TH).data;
          if (!gray) return resolve(d);
          const out = new Uint8Array(TW * TH);
          for (let i = 0; i < out.length; i++) out[i] = d[i * 4];
          resolve(out);
        } catch (e) { resolve(null); }
      };
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }
  function loadTex() {
    if (texLoading) return texLoading;
    texLoading = Promise.all([
      readImage(TEX.color).then((d) => (tex = d)),
      readImage(TEX.topo, true).then((d) => (topo = d)),
      readImage(TEX.clouds, true).then((d) => (clouds = d)),
    ]);
    return texLoading;
  }

  // Sphère pré-calculée (projection orthographique). L'axe des pôles ne bouge pas à l'écran quand la Terre
  // tourne : pour chaque pixel, on garde donc sa latitude, son écart de longitude, la lumière du soleil
  // (dans le repère est / nord, pour le relief), le reflet du soleil sur la mer et le liseré d'atmosphère.
  const S = 420, TILT = 18 * Math.PI / 180;
  const SUN = (() => { const v = [-0.8, 0.34, 0.5], n = Math.hypot(...v); return v.map((x) => x / n); })();
  let table = null;
  function buildTable() {
    const n = S * S;
    table = { row: new Int32Array(n), dl: new Float32Array(n), ndl: new Float32Array(n), le: new Float32Array(n), ln: new Float32Array(n), spec: new Float32Array(n), rim: new Float32Array(n), alpha: new Float32Array(n) };
    const A = [0, Math.cos(TILT), Math.sin(TILT)];
    const H = (() => { const v = [SUN[0], SUN[1], SUN[2] + 1], m = Math.hypot(...v); return v.map((x) => x / m); })();
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
      const k = j * S + i, x = (i + 0.5) / S * 2 - 1, y = 1 - (j + 0.5) / S * 2, r2 = x * x + y * y;
      if (r2 > 1) continue;
      const z = Math.sqrt(1 - r2), P = [x, y, z];
      const lat = Math.asin(z * A[2] + y * A[1]);
      table.dl[k] = Math.atan2(x, z * Math.cos(TILT) - y * Math.sin(TILT));
      table.row[k] = Math.min(TH - 1, Math.max(0, Math.round((0.5 - lat / Math.PI) * (TH - 1)))) * TW;
      // Est = axe × P, nord = P × est (vecteurs unitaires à la surface).
      let e = [A[1] * P[2] - A[2] * P[1], A[2] * P[0] - A[0] * P[2], A[0] * P[1] - A[1] * P[0]];
      const em = Math.hypot(...e) || 1; e = e.map((v) => v / em);
      const nn = [P[1] * e[2] - P[2] * e[1], P[2] * e[0] - P[0] * e[2], P[0] * e[1] - P[1] * e[0]];
      table.ndl[k] = SUN[0] * x + SUN[1] * y + SUN[2] * z;
      table.le[k] = SUN[0] * e[0] + SUN[1] * e[1] + SUN[2] * e[2];
      table.ln[k] = SUN[0] * nn[0] + SUN[1] * nn[1] + SUN[2] * nn[2];
      table.spec[k] = Math.pow(Math.max(0, H[0] * x + H[1] * y + H[2] * z), 140) * 0.55;
      table.rim[k] = Math.pow(1 - z, 2.4);
      table.alpha[k] = Math.min(1, (1 - Math.sqrt(r2)) * S * 0.5);
    }
  }
  const BUMP = 0.034;
  // k0..k1 : partie des pixels à calculer (on peut étaler le calcul sur plusieurs images) ; put : afficher.
  function drawSphere(ctx2, img, lon0, cloudLon, k0 = 0, k1 = S * S, put = true) {
    if (!table) buildTable();
    const out = img.data, T = table;
    for (let k = k0; k < k1; k++) {
      const a = T.alpha[k], o = k * 4;
      if (!a) { out[o + 3] = 0; continue; }
      const u = ((((T.dl[k] + lon0) / (2 * Math.PI) + 0.5) % 1 + 1) % 1 * (TW - 1)) | 0;
      const row = T.row[k], idx = row + u;
      let r, g, b, light, spec = 0;
      if (tex) {
        r = tex[idx * 4]; g = tex[idx * 4 + 1]; b = tex[idx * 4 + 2];
        let ndl = T.ndl[k];
        if (topo) {
          // Relief : la pente (est-ouest, nord-sud) incline la surface vers le soleil ou à l'opposé.
          const hE = topo[row + ((u + 1) & (TW - 1))], hW = topo[row + ((u - 1) & (TW - 1))];
          const hN = topo[Math.max(0, row - TW) + u], hS = topo[Math.min((TH - 1) * TW, row + TW) + u];
          ndl += ((hW - hE) * T.le[k] + (hS - hN) * T.ln[k]) * BUMP;
          if (topo[idx] < 3) spec = T.spec[k];
        }
        // Jour, nuit et un terminateur doux.
        const day = Math.max(0, Math.min(1, (ndl + 0.08) / 0.5));
        light = 0.045 + 1.2 * Math.pow(Math.max(0, ndl), 0.85) + 0.12 * day;
      } else { r = 30; g = 90; b = 190; light = 0.3 + Math.max(0, T.ndl[k]); }
      r = r * light + spec * 255; g = g * light + spec * 240; b = b * light + spec * 215;
      if (clouds) {
        const uc = ((((T.dl[k] + cloudLon) / (2 * Math.PI) + 0.5) % 1 + 1) % 1 * (TW - 1)) | 0;
        const c = clouds[row + uc] / 255 * 0.9, cl = 255 * (0.06 + Math.max(0, T.ndl[k]) * 1.02);
        r += (cl - r) * c; g += (cl - g) * c; b += (cl * 1.02 - b) * c;
      }
      const rim = T.rim[k] * (0.25 + Math.max(0, T.ndl[k] + 0.3));
      out[o] = Math.min(255, r + 70 * rim); out[o + 1] = Math.min(255, g + 140 * rim); out[o + 2] = Math.min(255, b + 255 * rim);
      out[o + 3] = 255 * a;
    }
    if (put) ctx2.putImageData(img, 0, 0);
  }

  // Sons fabriqués avec Web Audio : deux coups graves (« ta-doum ») et des crépitements pour le feu d'artifice.
  function makeAudio() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    let ac;
    try { ac = new AC(); } catch (e) { return null; }
    const master = ac.createGain(); master.gain.value = 0.7; master.connect(ac.destination);
    const noise = (dur) => {
      const b = ac.createBuffer(1, Math.ceil(ac.sampleRate * dur), ac.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const n = ac.createBufferSource(); n.buffer = b; return n;
    };
    function hit(at, f0, f1, len, vol) {
      const t = ac.currentTime + at;
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = "sine"; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + len * 0.6);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      o.connect(g).connect(master); o.start(t); o.stop(t + len + 0.05);
      // Corps du coup : un souffle grave, et une note tenue qui résonne.
      const n = noise(0.25), lp = ac.createBiquadFilter(), ng = ac.createGain();
      lp.type = "lowpass"; lp.frequency.value = 380;
      ng.gain.setValueAtTime(vol * 0.5, t); ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      n.connect(lp).connect(ng).connect(master); n.start(t);
      const h = ac.createOscillator(), hg = ac.createGain();
      h.type = "triangle"; h.frequency.value = f1 * 2;
      hg.gain.setValueAtTime(0.0001, t); hg.gain.exponentialRampToValueAtTime(vol * 0.18, t + 0.05); hg.gain.exponentialRampToValueAtTime(0.0001, t + len * 1.6);
      h.connect(hg).connect(master); h.start(t); h.stop(t + len * 1.7);
    }
    function crackle(at) {
      const t = ac.currentTime + at, n = noise(0.6), bp = ac.createBiquadFilter(), g = ac.createGain();
      bp.type = "bandpass"; bp.frequency.value = 1800 + Math.random() * 2400; bp.Q.value = 0.8;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      n.connect(bp).connect(g).connect(master); n.start(t);
      const b = ac.createOscillator(), bg = ac.createGain();
      b.frequency.setValueAtTime(140, t); b.frequency.exponentialRampToValueAtTime(50, t + 0.25);
      bg.gain.setValueAtTime(0.0001, t); bg.gain.exponentialRampToValueAtTime(0.25, t + 0.008); bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      b.connect(bg).connect(master); b.start(t); b.stop(t + 0.35);
    }
    function boom(at) {
      const t = ac.currentTime + at;
      const n = noise(5.5), lp = ac.createBiquadFilter(), g = ac.createGain();
      lp.type = "lowpass"; lp.frequency.setValueAtTime(1200, t); lp.frequency.exponentialRampToValueAtTime(55, t + 4.5);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(1.1, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 5.3);
      n.connect(lp).connect(g).connect(master); n.start(t);
      const o = ac.createOscillator(), og = ac.createGain();
      o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(28, t + 1.5);
      og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.9, t + 0.02); og.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
      o.connect(og).connect(master); o.start(t); o.stop(t + 1.9);
    }
    // Hyperespace : un souffle qui monte, puis se coupe net à la sortie.
    function hyper(at, dur) {
      const t = ac.currentTime + at;
      const n = noise(dur + 0.3), bp = ac.createBiquadFilter(), g = ac.createGain();
      bp.type = "bandpass"; bp.Q.value = 1.2; bp.frequency.setValueAtTime(200, t); bp.frequency.exponentialRampToValueAtTime(1600, t + dur);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + dur * 0.8); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.12);
      n.connect(bp).connect(g).connect(master); n.start(t);
    }
    function thunder(at, vol = 1) {
      const t = ac.currentTime + at;
      const c = noise(0.3), hp = ac.createBiquadFilter(), cg = ac.createGain();
      hp.type = "highpass"; hp.frequency.value = 1100;
      cg.gain.setValueAtTime(0.0001, t); cg.gain.exponentialRampToValueAtTime(0.32 * vol, t + 0.005); cg.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      c.connect(hp).connect(cg).connect(master); c.start(t);
      const r = noise(1.8), lp = ac.createBiquadFilter(), rg = ac.createGain();
      lp.type = "lowpass"; lp.frequency.value = 140;
      rg.gain.setValueAtTime(0.0001, t + 0.03); rg.gain.exponentialRampToValueAtTime(0.7 * vol, t + 0.12); rg.gain.exponentialRampToValueAtTime(0.0001, t + 1.7);
      r.connect(lp).connect(rg).connect(master); r.start(t + 0.03);
    }
    return { ac, hit, crackle, thunder, boom, hyper, close: () => { try { master.gain.setTargetAtTime(0, ac.currentTime, 0.15); setTimeout(() => ac.close(), 600); } catch (e) {} } };
  }

  function play({ titre = "Bienvenue dans Geonomix+", sous = "", bouton = "C'est parti", passer = "Passer", onClose } = {}) {
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.createElement("div");
    root.className = "intro-plus";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", titre);
    root.innerHTML = `<canvas></canvas>
      <div class="intro-card">
        <img class="intro-logo" src="assets/icon.svg" alt="" width="56" height="56">
        <p class="intro-kicker">Geonomix<span>+</span></p>
        <h2 class="intro-title">${titre}</h2>
        ${sous ? `<p class="intro-sub">${sous}</p>` : ""}
        <button type="button" class="pill-btn blue lg intro-go">${bouton} ›</button>
      </div>
      <button type="button" class="intro-skip">${passer}</button>`;
    document.body.appendChild(root);
    document.documentElement.classList.add("intro-lock");
    const cv = root.querySelector("canvas"), ctx = cv.getContext("2d");
    const sph = document.createElement("canvas"); sph.width = sph.height = S;
    const sctx = sph.getContext("2d"), simg = sctx.createImageData(S, S), wimg = sctx.createImageData(S, S);
    // 1,5 au plus : presque aussi net sur téléphone, et bien moins de pixels à remplir (plus fluide).
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    let W = 0, H = 0;
    const size = () => { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener("resize", size);
    loadTex();
    const audio = reduce ? null : makeAudio();
    // Calendrier : 1 s de noir complet, puis le noir fond depuis le centre (MELT) pendant qu'on file dans
    // l'hyperespace ; à XT on en sort net (façon Star Wars) devant la Terre, qui finit de s'approcher à SETTLE ;
    // la planète derrière se fissure puis explose à EX, lentement.
    const DELAY = reduce ? 0 : 1000, MELT = 1500, XT = 1700, SETTLE = 4300, EX = 5200;
    if (audio) {
      audio.hyper(DELAY / 1000, XT / 1000);
      audio.hit((DELAY + 120) / 1000, 95, 48, 0.55, 0.7);
      audio.hit((DELAY + XT) / 1000, 70, 34, 1.4, 1);
      audio.boom((DELAY + EX) / 1000);
    }

    const stars = Array.from({ length: 220 }, () => ({ a: Math.random() * Math.PI * 2, d: Math.random(), s: Math.random() * 1.4 + 0.3 }));
    const rockets = [], sparks = [], bolts = [], storms = [];
    let prog = null, curR = 0, nextStrike = 0, nextStorm = 0, flash = 0, exitFlash = false;
    const strikes = [[SETTLE - 100, 2], [EX + 150, 3]];
    let nextBurst = EX + 1400, t0 = performance.now(), raf = 0, closing = false, cardShown = false;
    const ease = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);

    function launch(now) {
      const R = Math.min(W, H) * 0.36;
      const ang = Math.random() * Math.PI * 2, dist = R * (1.05 + Math.random() * 0.55);
      const tx = W / 2 + Math.cos(ang) * dist, ty = Math.min(H * 0.62, Math.max(H * 0.1, H * 0.42 + Math.sin(ang) * dist * 0.8));
      rockets.push({ x: W / 2 + (Math.random() - 0.5) * W * 0.6, y: H + 10, tx, ty, t: now, dur: 520 + Math.random() * 240, c: COLORS[(Math.random() * COLORS.length) | 0] });
    }
    function burst(x, y, c) {
      const n = 70 + ((Math.random() * 40) | 0), sp = 3 + Math.random() * 2.6, c2 = COLORS[(Math.random() * COLORS.length) | 0];
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + Math.random() * 0.1, v = sp * (0.55 + Math.random() * 0.45);
        sparks.push({ x, y, px: x, py: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, decay: 0.008 + Math.random() * 0.01, c: Math.random() < 0.25 ? c2 : c });
      }
      if (audio) audio.crackle(0);
    }

    // Éclair : ligne brisée (déplacement du point milieu) de l'espace jusqu'au bord de la Terre, avec des branches.
    function jag(x1, y1, x2, y2, rough, depth) {
      if (depth === 0) return [[x1, y1], [x2, y2]];
      const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * rough, my = (y1 + y2) / 2 + (Math.random() - 0.5) * rough;
      return jag(x1, y1, mx, my, rough / 2, depth - 1).concat(jag(mx, my, x2, y2, rough / 2, depth - 1).slice(1));
    }
    function strike(now, cx, cy) {
      const R = Math.max(curR, 70), ang = Math.random() * Math.PI * 2, far = R * (1.7 + Math.random() * 0.9), spread = (Math.random() - 0.5) * 0.5;
      const x1 = cx + Math.cos(ang) * far, y1 = cy + Math.sin(ang) * far;
      const x2 = cx + Math.cos(ang + spread) * R * 0.97, y2 = cy + Math.sin(ang + spread) * R * 0.97;
      const main = jag(x1, y1, x2, y2, R * 0.35, 6), paths = [main];
      for (let b = 0; b < 3; b++) {
        const p = main[2 + ((Math.random() * (main.length - 6)) | 0)], a2 = Math.atan2(y2 - y1, x2 - x1) + (Math.random() - 0.5) * 1.4, l = R * (0.15 + Math.random() * 0.3);
        paths.push(jag(p[0], p[1], p[0] + Math.cos(a2) * l, p[1] + Math.sin(a2) * l, l * 0.4, 4));
      }
      bolts.push({ paths, t: now, life: 520 + Math.random() * 260, end: [x2, y2] });
      flash = Math.max(flash, 0.16);
      if (audio) audio.thunder(0, 0.6 + Math.random() * 0.4);
    }

    // Planète rocheuse derrière la Terre, en haut à droite, rendue comme la Terre (sphère texturée, éclairée
    // par le même soleil) : texture procédurale (bruit fractal : plaines rouille, plateaux sombres, cratères).
    // Pendant 1,8 s, des fissures de lave tracées SUR sa surface s'allument (elles tournent avec elle), elle
    // tremble et rougeoit. À EX, elle se brise : chaque bloc garde un morceau de sa vraie surface, la boule de
    // feu est faite de nuages de bruit (blanc, orange, puis fumée), un éclair avec une traînée horizontale de
    // cinéma, un anneau de matière, des braises ; la lueur éclaire le bord de la Terre. Tout suit le temps écoulé.
    const PRE = 1800, PS = 220, PW = 384, PH = 192;
    let ptex = null, plava = null, ptable = null, pcv = null, pctx = null, pimg = null, snap = null;
    let chunks = null, motes = null, puffs = null, sprites = null;
    const drift = (v, k, drag) => v * (1 - Math.exp(-drag * k)) / drag; // distance parcourue avec frottement
    // Bruit de valeur 3D (pour une texture qui se raccorde tout autour de la sphère).
    const hash = (x, y, z) => { let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
    function vnoise(x, y, z) {
      const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
      const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
      const L = (a, b, t2) => a + (b - a) * t2;
      const c = (dx, dy, dz) => hash(xi + dx, yi + dy, zi + dz);
      return L(L(L(c(0, 0, 0), c(1, 0, 0), u), L(c(0, 1, 0), c(1, 1, 0), u), v), L(L(c(0, 0, 1), c(1, 0, 1), u), L(c(0, 1, 1), c(1, 1, 1), u), v), w);
    }
    const fbm = (x, y, z, o = 5) => { let a = 0, f = 1, amp = 0.5; for (let i = 0; i < o; i++) { a += amp * vnoise(x * f, y * f, z * f); f *= 2.03; amp *= 0.5; } return a; };
    function buildPlanet() {
      ptex = new Uint8ClampedArray(PW * PH * 3);
      const craters = Array.from({ length: 26 }, () => ({ lon: Math.random() * Math.PI * 2, lat: (Math.random() - 0.5) * 2.6, r: 0.04 + Math.pow(Math.random(), 3) * 0.22 }));
      for (let j = 0; j < PH; j++) for (let i = 0; i < PW; i++) {
        const lon = (i / PW) * Math.PI * 2, lat = (0.5 - j / PH) * Math.PI;
        const X = Math.cos(lat) * Math.cos(lon), Y = Math.sin(lat), Z = Math.cos(lat) * Math.sin(lon);
        let h = fbm(X * 2.2 + 7, Y * 2.2, Z * 2.2, 6);
        const dark = fbm(X * 1.3 + 31, Y * 1.3, Z * 1.3, 3);
        // Cratères : cuvette sombre et rebord clair.
        for (const c of craters) {
          const d = Math.acos(Math.max(-1, Math.min(1, Math.sin(lat) * Math.sin(c.lat) + Math.cos(lat) * Math.cos(c.lat) * Math.cos(lon - c.lon)))) / c.r;
          if (d < 1.25) h += d < 1 ? -0.16 * (1 - d * d) : 0.12 * (1 - Math.abs(d - 1.1) / 0.15);
        }
        const m = Math.max(0, Math.min(1, (dark - 0.42) * 3.5)), e = Math.max(0, Math.min(1, 0.5 + (h - 0.5) * 2.6));
        // Fines stries claires (poussière) et zones sombres (basalte), contraste fort pour voir le relief.
        const st = Math.max(0, fbm(X * 9, Y * 9 + 3, Z * 9, 3) - 0.55) * 1.6;
        const o = (j * PW + i) * 3;
        ptex[o] = (70 + 175 * e + 60 * st) * (1 - 0.55 * m); ptex[o + 1] = (32 + 95 * e + 40 * st) * (1 - 0.55 * m); ptex[o + 2] = (20 + 55 * e + 30 * st) * (1 - 0.45 * m);
      }
      // Fissures de lave dessinées dans la texture même (elles suivent la rotation de la planète).
      const lc = document.createElement("canvas"); lc.width = PW; lc.height = PH;
      const lg = lc.getContext("2d");
      lg.lineCap = "round"; lg.lineJoin = "round";
      for (let n = 0; n < 22; n++) {
        let x = Math.random() * PW, y = PH * (0.15 + Math.random() * 0.7);
        const pts = [[x, y]], dir = Math.random() * Math.PI * 2;
        for (let q = 0; q < 18; q++) { x += Math.cos(dir + (Math.random() - 0.5) * 1.8) * 8; y += Math.sin(dir + (Math.random() - 0.5) * 1.8) * 5; pts.push([x, y]); }
        for (const [w, al] of [[12, 0.22], [6, 0.55], [2.5, 1]]) {
          lg.strokeStyle = `rgba(255,255,255,${al})`; lg.lineWidth = w;
          for (const dx of [-PW, 0, PW]) { lg.beginPath(); pts.forEach(([px2, py2], i) => (i ? lg.lineTo(px2 + dx, py2) : lg.moveTo(px2 + dx, py2))); lg.stroke(); }
        }
      }
      const ld = lg.getImageData(0, 0, PW, PH).data;
      plava = new Uint8Array(PW * PH);
      for (let i = 0; i < plava.length; i++) plava[i] = ld[i * 4 + 3];
      // Sphère pré-calculée (même méthode que la Terre, axe un peu incliné).
      const T2 = 0.35, n2 = PS * PS;
      ptable = { row: new Int32Array(n2), dl: new Float32Array(n2), ndl: new Float32Array(n2), alpha: new Float32Array(n2), rim: new Float32Array(n2) };
      for (let j = 0; j < PS; j++) for (let i = 0; i < PS; i++) {
        const k = j * PS + i, x = (i + 0.5) / PS * 2 - 1, y = 1 - (j + 0.5) / PS * 2, r2 = x * x + y * y;
        if (r2 > 1) continue;
        const z = Math.sqrt(1 - r2), lat = Math.asin(z * Math.sin(T2) + y * Math.cos(T2));
        ptable.dl[k] = Math.atan2(x, z * Math.cos(T2) - y * Math.sin(T2));
        ptable.row[k] = Math.min(PH - 1, Math.max(0, Math.round((0.5 - lat / Math.PI) * (PH - 1)))) * PW;
        ptable.ndl[k] = SUN[0] * x + SUN[1] * y + SUN[2] * z;
        ptable.rim[k] = Math.pow(1 - z, 3);
        ptable.alpha[k] = Math.min(1, (1 - Math.sqrt(r2)) * PS * 0.5);
      }
      pcv = document.createElement("canvas"); pcv.width = pcv.height = PS;
      pctx = pcv.getContext("2d"); pimg = pctx.createImageData(PS, PS);
      // Nuages de feu et de fumée : taches de bruit fractal, tirées une fois, puis agrandies et tournées.
      sprites = [[255, 248, 225], [255, 150, 60], [120, 70, 110]].map(([r, g, b], si) => {
        const S2 = 160, c = document.createElement("canvas"); c.width = c.height = S2;
        const cx2 = c.getContext("2d"), im = cx2.createImageData(S2, S2);
        for (let j = 0; j < S2; j++) for (let i = 0; i < S2; i++) {
          const dx = i / S2 * 2 - 1, dy = j / S2 * 2 - 1, d = Math.hypot(dx, dy);
          const nn = fbm(dx * 2.5 + si * 13, dy * 2.5, si * 3.1, 5);
          const al = Math.pow(Math.max(0, Math.min(1, (1 - d * 1.15) * 1.3 + (nn - 0.5) * 1.4)), 1.6);
          const o = (j * S2 + i) * 4, lit = 0.75 + 0.5 * nn;
          im.data[o] = Math.min(255, r * lit); im.data[o + 1] = Math.min(255, g * lit); im.data[o + 2] = Math.min(255, b * lit); im.data[o + 3] = 255 * al;
        }
        cx2.putImageData(im, 0, 0);
        return c;
      });
    }
    function renderPlanet(lon0, lava) {
      const out = pimg.data, T = ptable;
      for (let k = 0; k < PS * PS; k++) {
        const a = T.alpha[k], o = k * 4;
        if (!a) { out[o + 3] = 0; continue; }
        const u = ((((T.dl[k] + lon0) / (2 * Math.PI) + 0.5) % 1 + 1) % 1 * (PW - 1)) | 0, idx = T.row[k] + u;
        const light = 0.05 + 1.15 * Math.max(0, T.ndl[k]), lv = Math.min(1, plava[idx] / 255 * lava * 1.4), rim = T.rim[k];
        out[o] = Math.min(255, ptex[idx * 3] * light + 255 * lv + 120 * rim * light);
        out[o + 1] = Math.min(255, ptex[idx * 3 + 1] * light + 150 * lv * lv + 60 * rim * light);
        out[o + 2] = Math.min(255, ptex[idx * 3 + 2] * light + 60 * lv * lv * lv + 40 * rim * light);
        out[o + 3] = 255 * a;
      }
      pctx.putImageData(pimg, 0, 0);
    }
    let lastBlast = 0, pframe = 0;
    function drawPlanet(t, cx, cy, Re) {
      if (!ptex) buildPlanet();
      const pr = Re * 0.42, px = cx + Re * 0.86, py = cy - Re * 0.82, lon0 = 1 + t * 0.00012;
      if (t < EX) {
        const pre = Math.max(0, (t - (EX - PRE)) / PRE), sh = pre * pre * 4;
        const jx = (Math.random() - 0.5) * sh, jy = (Math.random() - 0.5) * sh;
        if (!(pframe++ & 1)) renderPlanet(lon0, Math.min(1, pre * 1.3) * (0.85 + Math.random() * 0.15 * pre));
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(pcv, px - pr + jx, py - pr + jy, pr * 2, pr * 2);
        if (pre > 0.25) {
          ctx.globalCompositeOperation = "lighter";
          const rr = pr * (1.25 + pre * 0.5), hg = ctx.createRadialGradient(px, py, pr * 0.92, px, py, rr);
          hg.addColorStop(0, `rgba(255,90,40,${(pre - 0.25) * 0.55})`); hg.addColorStop(1, "rgba(255,60,20,0)");
          ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(px, py, rr, 0, Math.PI * 2); ctx.fill();
          ctx.globalCompositeOperation = "source-over";
        }
        lastBlast = pre * 0.35;
        return;
      }
      const k = (t - EX) / 1000; // secondes depuis l'explosion
      if (!chunks) {
        // Photo de la planète au moment où elle cède (lave à fond) : chaque bloc en garde un morceau.
        renderPlanet(lon0, 1);
        snap = document.createElement("canvas"); snap.width = snap.height = PS; snap.getContext("2d").drawImage(pcv, 0, 0);
        const n = 18, cuts = Array.from({ length: n }, (_, i) => (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.22);
        const core = [(Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15];
        // Fractures rayonnantes (du cœur au bord) et, sur chacune, le point où passe la fracture circulaire.
        const crack = (a) => { const pts = [core]; for (let q = 1; q <= 6; q++) { const r = q / 7, w = (Math.random() - 0.5) * 0.16; pts.push([core[0] * (1 - r) + Math.cos(a + w) * r, core[1] * (1 - r) + Math.sin(a + w) * r]); } pts.push([Math.cos(a), Math.sin(a)]); return pts; };
        const edges = cuts.map(crack), RING = 3; // fracture circulaire à ~3/7 du rayon
        const ringLine = (p, q2) => { const m = [(p[0] + q2[0]) / 2 * (0.93 + Math.random() * 0.14), (p[1] + q2[1]) / 2 * (0.93 + Math.random() * 0.14)]; return [m]; };
        const piece = (shape, glow, mid, inner) => {
          const gx = shape.reduce((t2, p2) => t2 + p2[0], 0) / shape.length, gy = shape.reduce((t2, p2) => t2 + p2[1], 0) / shape.length;
          return { shape, glow, gx, gy, mid, inner,
            v: inner ? 0.1 + Math.random() * 0.22 : 0.3 + Math.random() * 0.45, vr: (Math.random() - 0.5) * (inner ? 0.5 : 0.35),
            tumble: 0.3 + Math.random() * 0.9, ph: Math.random() * 6.3, zoom: (Math.random() - 0.4) * 0.09 };
        };
        chunks = [];
        cuts.forEach((a0, i) => {
          const j = (i + 1) % n, a1 = cuts[j] + (i === n - 1 ? Math.PI * 2 : 0), mid = (a0 + a1) / 2;
          const eA = edges[i], eB = edges[j], ring = ringLine(eA[RING], eB[RING]);
          const arc = []; for (let s2 = 1; s2 < 7; s2++) { const a = a0 + (a1 - a0) * (s2 / 7); arc.push([Math.cos(a), Math.sin(a)]); }
          // Croûte : de la fracture circulaire jusqu'au bord (garde la vraie surface).
          const outer = [...eA.slice(RING), ...arc, ...eB.slice(RING).reverse(), ...ring.slice().reverse()];
          const outerGlow = [eA.slice(RING), eB.slice(RING), [eB[RING], ...ring, eA[RING]]];
          chunks.push(piece(outer, outerGlow, mid, false));
          // Manteau : du cœur à la fracture circulaire (roche en fusion).
          const inner = [...eA.slice(0, RING + 1), ...ring.slice().reverse(), ...eB.slice(0, RING + 1).reverse()];
          chunks.push(piece(inner, [inner.concat([inner[0]])], mid + (Math.random() - 0.5) * 0.4, true));
        });
        motes = Array.from({ length: 240 }, () => { const a = Math.random() * Math.PI * 2; return { a, v: 0.4 + Math.pow(Math.random(), 2) * 3.4, r0: Math.random() * 0.6, s: 0.5 + Math.random() * 1.8, life: 2.5 + Math.random() * 4.5, hot: Math.random() < 0.7, tilt: 0.7 + Math.random() * 0.3 }; });
        puffs = Array.from({ length: 11 }, (_, i) => ({ a: Math.random() * Math.PI * 2, d: Math.random() * 0.7, g: 1.4 + Math.random() * 1.6, s: 0.7 + Math.random() * 0.6, rot: Math.random() * 6.3, vr: (Math.random() - 0.5) * 0.25, kind: i % 3 }));
        flash = Math.max(flash, 0.3);
      }
      const heat = Math.max(0, 1 - k / 2.4), smoke = Math.max(0, 1 - k / 7.5);
      lastBlast = Math.max(0, 1 - k / 2.8);
      // 1) Fumée qui s'étale (couleurs normales), puis 2) flammes en volutes qui s'éteignent (lumière ajoutée).
      for (const pass of [2, 1, 0]) {
        ctx.globalCompositeOperation = pass === 2 ? "source-over" : "lighter";
        for (const p of puffs) {
          const grow2 = 0.5 + p.g * (1 - Math.exp(-0.6 * k)), rr = pr * p.s * grow2 * (pass === 2 ? 1.25 : pass === 0 ? 0.55 : 1);
          const ox = px + Math.cos(p.a) * p.d * pr * (0.5 + k * 0.45), oy = py + Math.sin(p.a) * p.d * pr * (0.5 + k * 0.45);
          const al = pass === 2 ? 0.55 * smoke * Math.min(1, k * 1.5) : pass === 1 ? 0.75 * Math.pow(heat, 0.8) : 0.9 * Math.pow(heat, 2.2);
          if (al < 0.01) continue;
          ctx.save(); ctx.globalAlpha = al; ctx.translate(ox, oy); ctx.rotate(p.rot + p.vr * k);
          ctx.drawImage(sprites[pass], -rr, -rr, rr * 2, rr * 2); ctx.restore();
        }
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = "lighter";
      // 3) Éclair du cœur et traînée horizontale façon objectif de cinéma.
      if (k < 1.4) {
        const fa = 1 - k / 1.4, fr = pr * (0.5 + k * 1.3);
        const f = ctx.createRadialGradient(px, py, 0, px, py, fr);
        f.addColorStop(0, `rgba(255,255,245,${fa})`); f.addColorStop(0.35, `rgba(255,210,140,${fa * 0.65})`); f.addColorStop(1, "rgba(255,110,40,0)");
        ctx.fillStyle = f; ctx.beginPath(); ctx.arc(px, py, fr, 0, Math.PI * 2); ctx.fill();
        const sw = W * (0.5 + k), sg = ctx.createLinearGradient(px - sw, py, px + sw, py);
        sg.addColorStop(0, "rgba(120,170,255,0)"); sg.addColorStop(0.5, `rgba(200,225,255,${fa * 0.7})`); sg.addColorStop(1, "rgba(120,170,255,0)");
        ctx.fillStyle = sg; ctx.fillRect(px - sw, py - 2 - 3 * fa, sw * 2, 4 + 6 * fa);
      }
      // 4) Anneau de matière incliné qui s'étire lentement.
      if (k < 4) {
        const rx = pr * (1 + drift(3.2, k, 0.55)), al = Math.max(0, 1 - k / 4);
        ctx.lineWidth = 1.5 + 5 * al; ctx.strokeStyle = `rgba(255,150,80,${al * 0.5})`;
        ctx.beginPath(); ctx.ellipse(px, py, rx, rx * 0.2, -0.42, 0, Math.PI * 2); ctx.stroke();
        ctx.lineWidth = 1; ctx.strokeStyle = `rgba(150,190,255,${al * 0.4})`;
        ctx.beginPath(); ctx.ellipse(px, py, rx * 1.1, rx * 0.22, -0.42, 0, Math.PI * 2); ctx.stroke();
      }
      // 5) 36 blocs : croûte (vraie surface de la planète) et manteau en fusion. Chacun s'écarte, tourne et
      //    bascule (il s'aplatit quand il se présente de profil, et s'assombrit), certains viennent vers nous.
      const cool = Math.max(0, 1 - k / 3), fade = Math.max(0, 1 - Math.max(0, k - 4.5) / 3);
      for (const c of chunks) {
        if (!fade) break;
        const dist = pr * drift(c.v, k, 0.3), ox = px + c.gx * pr + Math.cos(c.mid) * dist, oy = py + c.gy * pr + Math.sin(c.mid) * dist;
        const sc = Math.max(0.5, 1 + c.zoom * k), flip = Math.cos(c.ph + c.tumble * k), squash = 0.25 + 0.75 * Math.abs(flip);
        ctx.save(); ctx.translate(ox, oy); ctx.rotate(c.vr * k); ctx.scale(sc, sc * squash); ctx.globalAlpha = fade;
        // Contour et cassures tracés une fois pour toutes (Path2D), réutilisés à chaque image.
        if (!c.path) {
          const mk = (pts, close) => { const P = new Path2D(); pts.forEach(([x, y], m) => (m ? P.lineTo((x - c.gx) * pr, (y - c.gy) * pr) : P.moveTo((x - c.gx) * pr, (y - c.gy) * pr))); if (close) P.closePath(); return P; };
          c.path = mk(c.shape, true); c.glowPath = new Path2D(); c.glow.forEach((g) => c.glowPath.addPath(mk(g, false)));
        }
        ctx.save(); ctx.clip(c.path);
        ctx.globalCompositeOperation = "source-over";
        if (!c.inner) {
          ctx.drawImage(snap, -c.gx * pr - pr, -c.gy * pr - pr, pr * 2, pr * 2);
          ctx.fillStyle = `rgba(14,4,3,${0.25 * (1 - cool) + 0.55 * (1 - squash)})`; ctx.fill(c.path);
        } else {
          // Roche en fusion : sombre, veinée d'orange qui s'éteint.
          const mg = ctx.createRadialGradient(-c.gx * pr, -c.gy * pr, 0, -c.gx * pr, -c.gy * pr, pr * 0.6);
          mg.addColorStop(0, `rgb(${60 + 190 * cool},${20 + 110 * cool},${10 + 30 * cool})`); mg.addColorStop(1, `rgb(${40 + 120 * cool},${14 + 40 * cool},8)`);
          ctx.fillStyle = mg; ctx.fill(c.path);
          if (cool > 0.05) {
            ctx.globalCompositeOperation = "lighter"; ctx.globalAlpha = fade * 0.55 * cool;
            ctx.drawImage(sprites[1], -c.gx * pr - pr * 0.6, -c.gy * pr - pr * 0.6, pr * 1.2, pr * 1.2);
            ctx.globalAlpha = fade; ctx.globalCompositeOperation = "source-over";
          }
          ctx.fillStyle = `rgba(10,3,2,${0.5 * (1 - squash)})`; ctx.fill(c.path);
        }
        if (cool > 0.02) {
          const inner = ctx.createLinearGradient(-c.gx * pr, -c.gy * pr, -c.gx * pr + Math.cos(c.mid) * pr, -c.gy * pr + Math.sin(c.mid) * pr);
          inner.addColorStop(0, `rgba(255,170,80,${0.6 * cool})`); inner.addColorStop(0.5, `rgba(255,90,30,${0.18 * cool})`); inner.addColorStop(1, "rgba(0,0,0,0)");
          ctx.globalCompositeOperation = "lighter"; ctx.fillStyle = inner; ctx.fill(c.path);
        }
        ctx.restore();
        // Seules les cassures rougeoient.
        ctx.lineJoin = "round"; ctx.lineCap = "round"; ctx.globalCompositeOperation = "lighter";
        for (const [w, a2] of cool > 0.3 ? [[(3.5 + 4 * cool) / sc, 0.22], [(0.9 + 1.4 * cool) / sc, 1]] : [[(0.9 + 1.4 * cool) / sc, 1]]) {
          ctx.lineWidth = w; ctx.strokeStyle = `rgba(255,${110 + 110 * cool},50,${(0.03 + 0.85 * cool) * a2})`;
          ctx.stroke(c.glowPath);
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      // 6) Braises et poussière qui dérivent longtemps, dans le plan de l'anneau.
      ctx.globalCompositeOperation = "lighter";
      for (const m of motes) {
        const life = Math.max(0, 1 - k / m.life);
        if (!life) continue;
        const d = pr * (m.r0 + drift(m.v, k, 0.4)), x = px + Math.cos(m.a) * d, y = py + Math.sin(m.a) * d * m.tilt;
        ctx.fillStyle = m.hot ? `rgba(255,${130 + 90 * life},${60 + 60 * life},${life})` : `rgba(170,140,190,${life * 0.45})`;
        const ms = m.s * (m.hot ? 0.6 + 0.4 * life : 1) * 1.6; ctx.fillRect(x - ms / 2, y - ms / 2, ms, ms);
      }
      ctx.globalCompositeOperation = "source-over";
    }
    // Lueur de l'explosion sur le bord de la Terre tourné vers la planète.
    function blastRim(cx, cy, R) {
      if (lastBlast < 0.02) return;
      const ang = Math.atan2(-0.82, 0.86), lx = cx + Math.cos(ang) * R * 0.75, ly = cy + Math.sin(ang) * R * 0.75;
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
      ctx.globalCompositeOperation = "lighter";
      const g = ctx.createRadialGradient(lx + Math.cos(ang) * R * 0.6, ly + Math.sin(ang) * R * 0.6, R * 0.2, lx, ly, R * 1.1);
      g.addColorStop(0, `rgba(255,170,90,${0.55 * lastBlast})`); g.addColorStop(0.5, `rgba(255,110,50,${0.18 * lastBlast})`); g.addColorStop(1, "rgba(255,90,40,0)");
      ctx.fillStyle = g; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      ctx.restore();
    }

    // La planète et ses nuages de feu se calculent pendant la seconde de noir, pour ne pas saccader ensuite.
    if (!reduce) setTimeout(() => { if (!ptex) buildPlanet(); }, 40);

    function frame(now) {
      const t = now - t0 - DELAY;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = t < 0 ? "#000" : "#020306"; ctx.fillRect(0, 0, W, H);
      if (t < 0) { raf = requestAnimationFrame(frame); return; }
      // Sur un écran en hauteur, la Terre se place un peu plus haut pour laisser la carte de bienvenue dessous.
      // L'explosion de la planète fait trembler l'image un instant.
      const shake = !reduce && t > EX && t < EX + 1400 ? (1 - (t - EX) / 1400) * 8 : 0;
      const cx = W / 2 + (Math.random() - 0.5) * shake, cy = H * (H > W * 1.2 ? 0.4 : 0.47) + (Math.random() - 0.5) * shake, Rmax = Math.min(W, H) * 0.36;

      // Étoiles : dans l'hyperespace, de longues traînées bleutées qui filent depuis le centre ;
      // à la sortie (XT), elles se rétractent d'un coup en points, et le ciel redevient calme.
      const inHyper = !reduce && t < XT;
      const snap = reduce ? 1 : Math.min(1, Math.max(0, (t - XT) / 220));
      const hyperK = Math.min(1, t / 500);
      ctx.lineCap = "round";
      const diag = Math.hypot(W, H);
      for (const s of stars) {
        // Pendant le zoom vers la Terre, les étoiles s'écartent un peu (on avance), avec de courtes traînées.
        const zs = reduce || t < XT ? 0 : (() => { const uu = Math.min(1, (t - XT) / (SETTLE - XT)); return uu >= 1 ? 0 : (uu < 0.5 ? 12 * uu * uu : 3 * Math.pow(-2 * uu + 2, 2)) / 3; })();
        s.d += inHyper ? 0.006 + 0.03 * hyperK * s.d : 0.00025 + zs * 0.006 * s.d;
        if (s.d > 1) s.d -= 1;
        const r = s.d * diag * 0.6, x = cx + Math.cos(s.a) * r, y = cy + Math.sin(s.a) * r;
        const len = inHyper ? r * (0.15 + 0.75 * hyperK) : r * 0.9 * (1 - snap) * (1 - snap) + r * 0.12 * zs;
        ctx.strokeStyle = inHyper || snap < 1 ? `rgba(${190 + 60 * s.d},${215 + 35 * s.d},255,${0.35 + s.d * 0.65})` : `rgba(210,225,255,${0.25 + s.d * 0.7})`;
        ctx.lineWidth = s.s * (inHyper ? 1.2 : 1);
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - Math.cos(s.a) * len, y - Math.sin(s.a) * len); ctx.stroke();
      }
      if (inHyper) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, diag * 0.25);
        g.addColorStop(0, `rgba(200,225,255,${0.35 * hyperK})`); g.addColorStop(1, "rgba(120,160,255,0)");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      if (!reduce && t >= XT && !exitFlash) { exitFlash = true; flash = Math.max(flash, 0.3); }

      // Sortie d'hyperespace : la Terre apparaît d'abord au loin (petite bille bleue), on s'en approche
      // doucement, puis le zoom accélère et ralentit en arrivant (courbe en S) jusqu'à sa place à SETTLE.
      const u = reduce ? 1 : t < XT ? 0 : Math.min(1, (t - XT) / (SETTLE - XT));
      const grow = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      const scale = 0.05 + 0.95 * grow;
      if (!reduce && grow > 0) drawPlanet(t, cx, cy, Rmax * scale);
      if (grow > 0) {
        const R = curR = Math.max(2, Rmax * scale);
        const glow = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.35);
        glow.addColorStop(0, "rgba(90,169,255,.55)"); glow.addColorStop(1, "rgba(90,169,255,0)");
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2); ctx.fill();
        const lon0 = -1.9 + (reduce ? 0 : 1.1 * grow + t * 0.00004);
        // Économie de calcul (plus d'images par seconde) : pendant le zoom, la Terre est recalculée à chaque
        // image ; une fois arrivée, elle tourne lentement et son calcul est étalé sur 4 images (dans une image
        // de travail, affichée quand elle est complète), pour laisser du temps à l'explosion.
        if (u < 1 || reduce) { drawSphere(sctx, simg, lon0, lon0 + 0.4 + t * 0.00002); prog = null; }
        else {
          if (!prog) prog = { k: 0, lon: lon0, cl: lon0 + 0.4 + t * 0.00002 };
          const step = Math.ceil((S * S) / 4), k1 = Math.min(S * S, prog.k + step);
          drawSphere(sctx, wimg, prog.lon, prog.cl, prog.k, k1, false);
          prog.k = k1;
          if (k1 >= S * S) { sctx.putImageData(wimg, 0, 0); prog = null; }
        }
        ctx.drawImage(sph, cx - R, cy - R, R * 2, R * 2);
        if (!reduce) blastRim(cx, cy, R);
      }

      // Onde de choc quand le zoom se termine.
      if (!reduce && t > SETTLE - 200 && t < SETTLE + 750) {
        const k = (t - SETTLE + 200) / 950;
        ctx.strokeStyle = `rgba(245,200,107,${(1 - k) * 0.8})`; ctx.lineWidth = 3 * (1 - k) + 0.5;
        ctx.beginPath(); ctx.arc(cx, cy, Rmax * (1 + k * 1.2), 0, Math.PI * 2); ctx.stroke();

      }

      // Éclairs : sur les deux coups, sur l'onde de choc, puis de temps en temps ; orages qui scintillent sur la Terre.
      if (!reduce && !closing) {
        while (strikes.length && t > strikes[0][0]) { const [, n] = strikes.shift(); for (let i = 0; i < n; i++) strike(now, cx, cy); nextStrike = t + 1400; }
        if (!strikes.length && t > nextStrike) { strike(now, cx, cy); nextStrike = t + 1100 + Math.random() * 1700; }
        if (grow > 0.4 && t > nextStorm) {
          const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * 0.8 * curR;
          storms.push({ x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d, t: now, life: 120 + Math.random() * 160, r: curR * (0.05 + Math.random() * 0.07) });
          nextStorm = t + 180 + Math.random() * 520;
        }
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = storms.length - 1; i >= 0; i--) {
        const st = storms[i], k = (now - st.t) / st.life;
        if (k >= 1) { storms.splice(i, 1); continue; }
        const al = (1 - k) * (Math.random() < 0.3 ? 0.35 : 0.9);
        const g = ctx.createRadialGradient(st.x, st.y, 0, st.x, st.y, st.r);
        g.addColorStop(0, `rgba(235,240,255,${al})`); g.addColorStop(0.35, `rgba(150,180,255,${al * 0.45})`); g.addColorStop(1, "rgba(120,150,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bo = bolts[i], k = (now - bo.t) / bo.life;
        if (k >= 1) { bolts.splice(i, 1); continue; }
        // Un vrai éclair clignote : flash, presque noir, second flash, puis il s'éteint.
        const al = (k < 0.18 ? 1 : k < 0.3 ? 0.15 : k < 0.48 ? 0.95 : k < 0.56 ? 0.1 : (1 - k) * 1.6) * (Math.random() < 0.15 ? 0.5 : 1);
        for (const [w, c] of [[14, `rgba(110,150,255,${al * 0.18})`], [6, `rgba(170,200,255,${al * 0.45})`], [2.2, `rgba(255,255,255,${al})`]]) {
          ctx.lineWidth = w; ctx.strokeStyle = c; ctx.lineJoin = "round";
          bo.paths.forEach((pts, n) => {
            ctx.lineWidth = n ? w * 0.55 : w;
            ctx.beginPath(); pts.forEach(([x, y], m) => (m ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke();
          });
        }
        const g = ctx.createRadialGradient(bo.end[0], bo.end[1], 0, bo.end[0], bo.end[1], 40);
        g.addColorStop(0, `rgba(220,230,255,${al * 0.8})`); g.addColorStop(1, "rgba(120,150,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(bo.end[0], bo.end[1], 40, 0, Math.PI * 2); ctx.fill();
      }
      if (flash > 0.01) { ctx.fillStyle = `rgba(190,210,255,${flash})`; ctx.fillRect(0, 0, W, H); flash *= 0.8; }

      // Feu d'artifice : fusées qui montent, puis gerbes d'étincelles avec traînée.
      if (!reduce && t > nextBurst && !closing) {
        launch(now);
        if (t < EX + 4200 && Math.random() < 0.5) launch(now);
        nextBurst = t + (t < EX + 4200 ? 260 + Math.random() * 260 : 900 + Math.random() * 900);
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i], k = (now - r.t) / r.dur;
        if (k >= 1) { burst(r.tx, r.ty, r.c); rockets.splice(i, 1); continue; }
        const e = ease(k), x = r.x + (r.tx - r.x) * e, y = r.y + (r.ty - r.y) * e;
        ctx.fillStyle = r.c; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.lineWidth = 2;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.px = p.x; p.py = p.y;
        p.vx *= 0.975; p.vy = p.vy * 0.975 + 0.035;
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        if (p.life <= 0) { sparks.splice(i, 1); continue; }
        ctx.globalAlpha = Math.min(1, p.life * 1.4) * (Math.random() < 0.08 ? 0.3 : 1);
        ctx.strokeStyle = p.c;
        ctx.beginPath(); ctx.moveTo(p.px - p.vx * 3, p.py - p.vy * 3); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (!reduce && t < MELT) {
        const m = ease(t / MELT), rr = m * diag * 0.75;
        const g = ctx.createRadialGradient(cx, cy, rr * 0.35, cx, cy, rr + 1);
        g.addColorStop(0, `rgba(0,0,0,${1 - m})`); g.addColorStop(1, "#000");
        ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      if (!cardShown && t > (reduce ? 0 : EX + 1300)) { cardShown = true; root.classList.add("show"); root.querySelector(".intro-go").focus({ preventScroll: true }); }
      if (closing && !sparks.length && !rockets.length) return;
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    function close() {
      if (closing) return;
      closing = true;
      root.classList.add("out");
      if (audio) audio.close();
      setTimeout(() => {
        cancelAnimationFrame(raf);
        removeEventListener("resize", size);
        removeEventListener("keydown", onKey);
        root.remove();
        document.documentElement.classList.remove("intro-lock");
        if (onClose) onClose();
      }, 500);
    }
    const onKey = (e) => { if (e.key === "Escape") close(); };
    addEventListener("keydown", onKey);
    root.querySelector(".intro-go").addEventListener("click", close);
    root.querySelector(".intro-skip").addEventListener("click", close);
    // Toucher l'écran avant la carte : on saute directement à la fin (carte + feu d'artifice).
    cv.addEventListener("click", () => { if (!cardShown) { t0 = performance.now() - DELAY - EX - 1200; nextBurst = EX + 1300; exitFlash = true; } });
    return { close };
  }

  window.GeocoBienvenue = { play, preload: loadTex };
})();
