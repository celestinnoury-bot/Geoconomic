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
  function drawSphere(ctx2, img, lon0, cloudLon) {
    if (!table) buildTable();
    const out = img.data, T = table;
    for (let k = 0; k < S * S; k++) {
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
    ctx2.putImageData(img, 0, 0);
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
      const n = noise(3.2), lp = ac.createBiquadFilter(), g = ac.createGain();
      lp.type = "lowpass"; lp.frequency.setValueAtTime(1400, t); lp.frequency.exponentialRampToValueAtTime(70, t + 2.6);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(1.1, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.1);
      n.connect(lp).connect(g).connect(master); n.start(t);
      const o = ac.createOscillator(), og = ac.createGain();
      o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(28, t + 1.5);
      og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.9, t + 0.02); og.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
      o.connect(og).connect(master); o.start(t); o.stop(t + 1.9);
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
    return { ac, hit, crackle, thunder, boom, close: () => { try { master.gain.setTargetAtTime(0, ac.currentTime, 0.15); setTimeout(() => ac.close(), 600); } catch (e) {} } };
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
    const sctx = sph.getContext("2d"), simg = sctx.createImageData(S, S);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0, H = 0;
    const size = () => { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener("resize", size);
    loadTex();
    const audio = reduce ? null : makeAudio();
    // Une seconde de noir complet avant que tout commence.
    const DELAY = reduce ? 0 : 1000, EX = 2350;
    if (audio) { audio.hit(1.25, 95, 48, 0.55, 0.9); audio.hit(1.62, 70, 34, 1.4, 1); audio.boom(1 + EX / 1000); }

    const stars = Array.from({ length: 220 }, () => ({ a: Math.random() * Math.PI * 2, d: Math.random(), s: Math.random() * 1.4 + 0.3 }));
    const rockets = [], sparks = [], bolts = [], storms = [];
    let curR = 0, nextStrike = 0, nextStorm = 0, flash = 0;
    const strikes = [[620, 2], [2550, 3]];
    let nextBurst = 2500, t0 = performance.now(), raf = 0, closing = false, cardShown = false;
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

    // Planète rouille derrière la Terre, en haut à droite : elle se fissure (lave), puis explose
    // (éclair, anneau de feu incliné, débris et braises, nuage qui s'estompe). La Terre passe devant.
    const debris = [];
    let cracks = null;
    function drawPlanet(t, cx, cy, Re) {
      const pr = Re * 0.42, px = cx + Re * 0.86, py = cy - Re * 0.82;
      ctx.globalCompositeOperation = "source-over";
      if (t < EX) {
        const pre = Math.max(0, (t - (EX - 650)) / 650), jx = (Math.random() - 0.5) * pre * 3, jy = (Math.random() - 0.5) * pre * 3;
        const g = ctx.createRadialGradient(px - pr * 0.45 + jx, py - pr * 0.4 + jy, pr * 0.05, px + jx, py + jy, pr);
        g.addColorStop(0, "#e0874f"); g.addColorStop(0.45, "#a3401f"); g.addColorStop(0.85, "#4a160a"); g.addColorStop(1, "#1d0703");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(px + jx, py + jy, pr, 0, Math.PI * 2); ctx.fill();
        ctx.save(); ctx.beginPath(); ctx.arc(px + jx, py + jy, pr, 0, Math.PI * 2); ctx.clip();
        ctx.fillStyle = "rgba(40,10,4,.28)";
        for (let b = -2; b <= 2; b++) { ctx.beginPath(); ctx.ellipse(px + jx, py + jy + b * pr * 0.34, pr * 1.1, pr * 0.07, -0.2, 0, Math.PI * 2); ctx.fill(); }
        if (pre > 0) {
          if (!cracks) cracks = Array.from({ length: 7 }, () => { const a = Math.random() * Math.PI * 2, a2 = a + (Math.random() - 0.5) * 2; return jag(Math.cos(a) * 0.15, Math.sin(a) * 0.15, Math.cos(a2) * 1.1, Math.sin(a2) * 1.1, 0.5, 4); });
          ctx.globalCompositeOperation = "lighter";
          ctx.strokeStyle = `rgba(255,${150 + 80 * pre},60,${pre})`; ctx.lineWidth = 1 + pre * 2.5;
          cracks.forEach((c) => { ctx.beginPath(); c.forEach(([x, y], m) => (m ? ctx.lineTo(px + jx + x * pr, py + jy + y * pr) : ctx.moveTo(px + jx + x * pr, py + jy + y * pr))); ctx.stroke(); });
          const h = ctx.createRadialGradient(px, py, 0, px, py, pr);
          h.addColorStop(0, `rgba(255,200,120,${pre * 0.6})`); h.addColorStop(1, "rgba(255,90,30,0)");
          ctx.fillStyle = h; ctx.fillRect(px - pr, py - pr, pr * 2, pr * 2);
        }
        ctx.restore();
        return;
      }
      if (!debris.length) {
        for (let i = 0; i < 150; i++) {
          const a = Math.random() * Math.PI * 2, v = (0.8 + Math.random() * Math.random() * 4.5) * pr / 60;
          debris.push({ x: px + Math.cos(a) * pr * 0.5 * Math.random(), y: py + Math.sin(a) * pr * 0.5 * Math.random(), vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.2, s: (Math.random() < 0.2 ? 4 : 1.5) + Math.random() * 3, ember: Math.random() < 0.55 });
        }
        flash = Math.max(flash, 0.35);
      }
      const k = (t - EX) / 1000;
      ctx.globalCompositeOperation = "lighter";
      // Nuage brûlant qui s'étale puis s'éteint.
      const cloudR = pr * (1.2 + 3.5 * ease(k / 2.5)), ca = Math.max(0, 1 - k / 4);
      const neb = ctx.createRadialGradient(px, py, 0, px, py, cloudR);
      neb.addColorStop(0, `rgba(255,190,110,${0.55 * ca * ca})`); neb.addColorStop(0.4, `rgba(220,80,40,${0.35 * ca})`); neb.addColorStop(0.75, `rgba(120,40,140,${0.18 * ca})`); neb.addColorStop(1, "rgba(60,20,90,0)");
      ctx.fillStyle = neb; ctx.beginPath(); ctx.arc(px, py, cloudR, 0, Math.PI * 2); ctx.fill();
      // Éclair blanc du cœur.
      if (k < 0.7) {
        const fr = pr * (0.6 + k * 6), fa = 1 - k / 0.7;
        const f = ctx.createRadialGradient(px, py, 0, px, py, fr);
        f.addColorStop(0, `rgba(255,255,240,${fa})`); f.addColorStop(0.3, `rgba(255,210,140,${fa * 0.8})`); f.addColorStop(1, "rgba(255,120,40,0)");
        ctx.fillStyle = f; ctx.beginPath(); ctx.arc(px, py, fr, 0, Math.PI * 2); ctx.fill();
      }
      // Anneau de feu incliné qui s'élargit.
      if (k < 1.8) {
        const rk = ease(k / 1.8), rx = pr * (1.1 + 9 * rk), al = 1 - k / 1.8;
        ctx.lineWidth = 2 + 7 * al; ctx.strokeStyle = `rgba(255,160,80,${al * 0.75})`;
        ctx.beginPath(); ctx.ellipse(px, py, rx, rx * 0.22, -0.42, 0, Math.PI * 2); ctx.stroke();
        ctx.lineWidth = 1.2; ctx.strokeStyle = `rgba(140,190,255,${al * 0.6})`;
        ctx.beginPath(); ctx.ellipse(px, py, rx * 1.08, rx * 0.24, -0.42, 0, Math.PI * 2); ctx.stroke();
      }
      // Débris : rochers sombres au bord rougeoyant, et braises.
      for (const d of debris) {
        d.x += d.vx; d.y += d.vy; d.vx *= 0.995; d.vy *= 0.995; d.r += d.vr;
        const life = Math.max(0, 1 - k / (d.ember ? 2.2 : 3.5));
        if (!life) continue;
        if (d.ember) {
          ctx.globalCompositeOperation = "lighter";
          ctx.fillStyle = `rgba(255,${120 + ((d.s * 20) | 0)},50,${life})`;
          ctx.beginPath(); ctx.arc(d.x, d.y, d.s * 0.45, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.globalCompositeOperation = "source-over";
          ctx.save(); ctx.translate(d.x, d.y); ctx.rotate(d.r);
          ctx.fillStyle = `rgba(60,22,12,${life})`; ctx.strokeStyle = `rgba(255,120,50,${life * Math.max(0.2, 1 - k)})`; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(-d.s, -d.s * 0.6); ctx.lineTo(d.s * 0.9, -d.s * 0.8); ctx.lineTo(d.s * 0.7, d.s * 0.7); ctx.lineTo(-d.s * 0.8, d.s * 0.5); ctx.closePath(); ctx.fill(); ctx.stroke();
          ctx.restore();
        }
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function frame(now) {
      const t = now - t0 - DELAY;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = t < 0 ? "#000" : "#020306"; ctx.fillRect(0, 0, W, H);
      if (t < 0) { raf = requestAnimationFrame(frame); return; }
      // Sur un écran en hauteur, la Terre se place un peu plus haut pour laisser la carte de bienvenue dessous.
      // L'explosion de la planète fait trembler l'image un instant.
      const shake = !reduce && t > EX && t < EX + 700 ? (1 - (t - EX) / 700) * 7 : 0;
      const cx = W / 2 + (Math.random() - 0.5) * shake, cy = H * (H > W * 1.2 ? 0.4 : 0.47) + (Math.random() - 0.5) * shake, Rmax = Math.min(W, H) * 0.36;

      // Étoiles : elles filent vers les bords pendant qu'on fonce vers la Terre.
      const warp = reduce ? 0 : Math.max(0, 1 - Math.abs(t - 1500) / 1100);
      const fadeIn = Math.min(1, t / 400);
      ctx.lineCap = "round";
      for (const s of stars) {
        if (!reduce) s.d += 0.0006 + warp * 0.02;
        if (s.d > 1) s.d -= 1;
        const r = s.d * Math.hypot(W, H) * 0.6, x = cx + Math.cos(s.a) * r, y = cy + Math.sin(s.a) * r, len = warp * 40 * s.d;
        ctx.strokeStyle = `rgba(210,225,255,${(0.25 + s.d * 0.7) * fadeIn})`;
        ctx.lineWidth = s.s;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - Math.cos(s.a) * len, y - Math.sin(s.a) * len); ctx.stroke();
      }

      // Premier coup : un point de lumière ; au second, la Terre arrive et grossit en tournant.
      if (!reduce && t > 250 && t < 900) {
        const k = Math.max(0, 1 - Math.abs(t - 330) / 400);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90 * k + 4);
        g.addColorStop(0, `rgba(255,240,200,${k})`); g.addColorStop(1, "rgba(255,200,120,0)");
        ctx.fillStyle = g; ctx.fillRect(cx - 120, cy - 120, 240, 240);
      }
      const grow = reduce ? 1 : ease((t - 620) / 2000);
      if (!reduce && grow > 0) drawPlanet(t, cx, cy, Rmax * (0.02 + 0.98 * grow));
      if (grow > 0) {
        const R = curR = Math.max(2, Rmax * (0.02 + 0.98 * grow) * (1 + (reduce ? 0 : 0.04 * Math.sin(Math.min(1, Math.max(0, (t - 2620) / 500)) * Math.PI))));
        const glow = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.35);
        glow.addColorStop(0, "rgba(90,169,255,.55)"); glow.addColorStop(1, "rgba(90,169,255,0)");
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2); ctx.fill();
        const lon0 = -1.9 + (reduce ? 0 : 1.6 * ease(t / 2600) + t * 0.00004);
        drawSphere(sctx, simg, lon0, lon0 + 0.4 + t * 0.00002);
        ctx.drawImage(sph, cx - R, cy - R, R * 2, R * 2);
      }

      // Onde de choc quand le zoom se termine.
      if (!reduce && t > 2550 && t < 3500) {
        const k = (t - 2550) / 950;
        ctx.strokeStyle = `rgba(245,200,107,${(1 - k) * 0.8})`; ctx.lineWidth = 3 * (1 - k) + 0.5;
        ctx.beginPath(); ctx.arc(cx, cy, Rmax * (1 + k * 1.2), 0, Math.PI * 2); ctx.stroke();
        if (t < 2750) { ctx.fillStyle = `rgba(255,255,255,${0.35 * (1 - (t - 2550) / 200)})`; ctx.fillRect(0, 0, W, H); }
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
        if (t < 5200 && Math.random() < 0.5) launch(now);
        nextBurst = t + (t < 5200 ? 260 + Math.random() * 260 : 900 + Math.random() * 900);
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

      if (!cardShown && t > (reduce ? 0 : 2800)) { cardShown = true; root.classList.add("show"); root.querySelector(".intro-go").focus({ preventScroll: true }); }
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
    cv.addEventListener("click", () => { if (!cardShown) { t0 = performance.now() - DELAY - 2560; nextBurst = 2500; } });
    return { close };
  }

  window.GeocoBienvenue = { play, preload: loadTex };
})();
