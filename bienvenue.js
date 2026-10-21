// Cinématique de bienvenue dans Geonomix+ (après le paiement ou un code valide), façon générique de série :
// écran noir, deux coups sourds (« ta-doum », son fabriqué ici, pas celui de Netflix), on fonce vers la Terre
// qui grossit en tournant, onde de choc, feu d'artifice autour du globe, puis la carte « Bienvenue ».
// Usage : GeocoBienvenue.play({ titre, sous, bouton, onClose }). Toucher l'écran ou Échap pour passer.
(function () {
  const TEX = "assets/earth/earth-blue-marble.jpg";
  const COLORS = ["#f5c86b", "#ff7a59", "#5aa9ff", "#3ddc97", "#ffffff", "#c58bff"];
  let tex = null, texLoading = null;

  // Texture de la Terre réduite (1024 × 512) pour lire ses pixels vite.
  function loadTex() {
    if (texLoading) return texLoading;
    texLoading = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          c.width = 1024; c.height = 512;
          const g = c.getContext("2d");
          g.drawImage(img, 0, 0, 1024, 512);
          tex = g.getImageData(0, 0, 1024, 512).data;
        } catch (e) { tex = null; }
        resolve(tex);
      };
      img.onerror = () => resolve(null);
      img.src = TEX;
    });
    return texLoading;
  }

  // Sphère pré-calculée (projection orthographique) : pour chaque pixel, latitude, écart de longitude et lumière.
  const S = 360, TILT = 18 * Math.PI / 180;
  let table = null;
  function buildTable() {
    table = { row: new Int16Array(S * S), dl: new Float32Array(S * S), shade: new Float32Array(S * S), alpha: new Float32Array(S * S) };
    const L = [-0.55, 0.45, 0.7], ln = Math.hypot(...L);
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
      const k = j * S + i, x = (i + 0.5) / S * 2 - 1, y = 1 - (j + 0.5) / S * 2, r2 = x * x + y * y;
      if (r2 > 1) { table.alpha[k] = 0; continue; }
      const z = Math.sqrt(1 - r2);
      const lat = Math.asin(z * Math.sin(TILT) + y * Math.cos(TILT));
      table.dl[k] = Math.atan2(x, z * Math.cos(TILT) - y * Math.sin(TILT));
      table.row[k] = Math.min(511, Math.max(0, Math.round((0.5 - lat / Math.PI) * 511)));
      const d = (x * L[0] + y * L[1] + z * L[2]) / ln;
      table.shade[k] = 0.28 + 0.9 * Math.max(0, d);
      table.alpha[k] = Math.min(1, (1 - Math.sqrt(r2)) * S * 0.5);
    }
  }
  function drawSphere(ctx2, img, lon0) {
    if (!table) buildTable();
    const out = img.data;
    for (let k = 0; k < S * S; k++) {
      const a = table.alpha[k], o = k * 4;
      if (!a) { out[o + 3] = 0; continue; }
      let lon = table.dl[k] + lon0;
      lon = ((lon / (2 * Math.PI) + 0.5) % 1 + 1) % 1;
      const s = table.shade[k];
      if (tex) {
        const t = (table.row[k] * 1024 + Math.min(1023, (lon * 1023) | 0)) * 4;
        out[o] = Math.min(255, tex[t] * s); out[o + 1] = Math.min(255, tex[t + 1] * s); out[o + 2] = Math.min(255, tex[t + 2] * s + 6);
      } else { out[o] = 30 * s; out[o + 1] = 90 * s; out[o + 2] = 190 * s; }
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
    return { ac, hit, crackle, close: () => { try { master.gain.setTargetAtTime(0, ac.currentTime, 0.15); setTimeout(() => ac.close(), 600); } catch (e) {} } };
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
    if (audio) { audio.hit(0.25, 95, 48, 0.55, 0.9); audio.hit(0.62, 70, 34, 1.4, 1); }

    const stars = Array.from({ length: 220 }, () => ({ a: Math.random() * Math.PI * 2, d: Math.random(), s: Math.random() * 1.4 + 0.3 }));
    const rockets = [], sparks = [];
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

    function frame(now) {
      const t = now - t0;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#020306"; ctx.fillRect(0, 0, W, H);
      // Sur un écran en hauteur, la Terre se place un peu plus haut pour laisser la carte de bienvenue dessous.
      const cx = W / 2, cy = H * (H > W * 1.2 ? 0.4 : 0.47), Rmax = Math.min(W, H) * 0.36;

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
      if (grow > 0) {
        const R = Math.max(2, Rmax * (0.02 + 0.98 * grow) * (1 + (reduce ? 0 : 0.04 * Math.sin(Math.min(1, Math.max(0, (t - 2620) / 500)) * Math.PI))));
        const glow = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.35);
        glow.addColorStop(0, "rgba(90,169,255,.55)"); glow.addColorStop(1, "rgba(90,169,255,0)");
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2); ctx.fill();
        drawSphere(sctx, simg, -1.9 + (reduce ? 0 : 1.6 * ease(t / 2600) + t * 0.00004));
        ctx.drawImage(sph, cx - R, cy - R, R * 2, R * 2);
      }

      // Onde de choc quand le zoom se termine.
      if (!reduce && t > 2550 && t < 3500) {
        const k = (t - 2550) / 950;
        ctx.strokeStyle = `rgba(245,200,107,${(1 - k) * 0.8})`; ctx.lineWidth = 3 * (1 - k) + 0.5;
        ctx.beginPath(); ctx.arc(cx, cy, Rmax * (1 + k * 1.2), 0, Math.PI * 2); ctx.stroke();
        if (t < 2750) { ctx.fillStyle = `rgba(255,255,255,${0.35 * (1 - (t - 2550) / 200)})`; ctx.fillRect(0, 0, W, H); }
      }

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
    cv.addEventListener("click", () => { if (!cardShown) { t0 = performance.now() - 2560; nextBurst = 2500; } });
    return { close };
  }

  window.GeocoBienvenue = { play, preload: loadTex };
})();
