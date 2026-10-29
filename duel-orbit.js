// La Terre de la grande affiche du Duel en 3D (demande de l'auteur, 28 oct. 2026) : le globe aux pays allumés,
// l'anneau orange des 5 questions, et sur l'anneau une baguette qui fait le tour de la Terre en tournant sur
// elle-même, avec des miettes dorées (demande de l'auteur du 29 oct. 2026 : elle remplace les deux vaisseaux).
// Modèle « French baguette » de Rainbow (Sketchfab, CC BY 4.0), allégé dans assets/models/baguette/.
// three.js ; texture de la Terre dessinée avec d3 à partir de la géographie du bloc #quiz-data.
// Le rendu vit dans #hero-orbit (recréé à chaque affichage de l'accueil : on y raccroche le canvas) ;
// pause quand l'affiche n'est pas visible, quand une partie est ouverte ou quand la page est cachée.
import * as THREE from "./assets/vendor/three/three.module.min.js";
import { GLTFLoader } from "./assets/vendor/three/GLTFLoader.js";

const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const play = document.getElementById("play");
const V = () => new THREE.Vector3();
const LIT = new Set(["818", "250", "156", "076", "124", "682", "643"]);

function earthTextures() {
  let geo = [];
  try { geo = JSON.parse(document.getElementById("quiz-data").textContent).geo; } catch (e) {}
  const W = 2048, H = 1024;
  const mk = () => { const c = document.createElement("canvas"); c.width = W; c.height = H; return c; };
  const base = mk(), glow = mk();
  if (!window.d3 || !geo.length) return null;
  const proj = d3.geoEquirectangular().scale(W / (2 * Math.PI)).translate([W / 2, H / 2]);
  const feats = geo.map(([id, c]) => ({ type: "Feature", id, geometry: { type: "MultiPolygon", coordinates: c } }));
  let ctx = base.getContext("2d"), path = d3.geoPath(proj, ctx);
  const sea = ctx.createLinearGradient(0, 0, 0, H); sea.addColorStop(0, "#0b1430"); sea.addColorStop(.5, "#14214a"); sea.addColorStop(1, "#0b1430");
  ctx.fillStyle = sea; ctx.fillRect(0, 0, W, H);
  ctx.beginPath(); path(d3.geoGraticule10()); ctx.strokeStyle = "rgba(160,170,255,.12)"; ctx.lineWidth = 1.2; ctx.stroke();
  feats.forEach((f) => { ctx.beginPath(); path(f); ctx.fillStyle = LIT.has(f.id) ? "#ff8a3d" : "#353b62"; ctx.fill(); ctx.strokeStyle = "rgba(0,0,0,.55)"; ctx.lineWidth = 1; ctx.stroke(); });
  ctx = glow.getContext("2d"); path = d3.geoPath(proj, ctx);
  ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
  feats.forEach((f) => { if (!LIT.has(f.id)) return; ctx.beginPath(); path(f); ctx.fillStyle = "#ff8a3d"; ctx.fill(); });
  const t = (c) => { const x = new THREE.CanvasTexture(c); x.colorSpace = THREE.SRGBColorSpace; x.anisotropy = 4; return x; };
  return { map: t(base), emissive: t(glow) };
}

function glowTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(.3, "rgba(255,255,255,.55)"); r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function start() {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
  const tex = earthTextures(); if (!tex) return;
  document.body.classList.add("orbit-on"); // le globe 2D de secours se cache
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const cv = renderer.domElement; cv.className = "orbit-cv";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  camera.position.set(0, 0.6, 6.4); camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xb8c4ff, 0x140a05, 0.9));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4); sun.position.set(-3, 2, 4); scene.add(sun);
  const rim = new THREE.DirectionalLight(0xff9a5c, 0.7); rim.position.set(4, -1, -3); scene.add(rim);
  const GLOW = glowTexture();
  const sprite = (color, size, opacity = 1) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false })); s.scale.setScalar(size); return s; };

  // La Terre, son halo orange et son reflet.
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), new THREE.MeshStandardMaterial({ map: tex.map, emissiveMap: tex.emissive, emissive: 0xffffff, emissiveIntensity: 0.55, roughness: 0.85, metalness: 0.05 }));
  earth.rotation.set(0.42, -1.95, 0); scene.add(earth);
  const halo = sprite(0xff8a3d, 3.4, 0.35); halo.renderOrder = -1; scene.add(halo);

  // L'anneau des 5 questions, incliné, et ses 5 perles ; la baguette tourne dessus.
  const ring = new THREE.Group(); ring.rotation.set(1.22, 0.18, -0.38); scene.add(ring);
  const R = 1.6;
  ring.add(new THREE.Mesh(new THREE.TorusGeometry(R, 0.007, 8, 200), new THREE.MeshBasicMaterial({ color: 0xff8a3d, transparent: true, opacity: 0.75 })));
  ring.add(new THREE.Mesh(new THREE.TorusGeometry(R, 0.035, 8, 200), new THREE.MeshBasicMaterial({ color: 0xff8a3d, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false })));
  for (let i = 0; i < 5; i++) { const a = 0.4 + i * (Math.PI * 2 / 5); const d = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffcf9e })); d.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); ring.add(d); const s = sprite(0xffa45a, 0.22, 0.7); s.position.copy(d.position); ring.add(s); }

  const loader = new GLTFLoader();
  loader.loadAsync("assets/models/baguette/baguette.json").then((gl) => {
    // La baguette, mise à l'échelle, centrée et couchée le long de l'anneau (son grand axe sur -Z).
    const m = gl.scene, box = new THREE.Box3().setFromObject(m), s = box.getSize(V());
    m.scale.setScalar(0.8 / Math.max(s.x, s.y, s.z)); box.setFromObject(m); m.position.sub(box.getCenter(V()));
    const axis = new THREE.Group(); axis.add(m);
    if (s.x >= s.y && s.x >= s.z) axis.rotation.y = Math.PI / 2; else if (s.y >= s.z) axis.rotation.x = Math.PI / 2;
    const spin = new THREE.Group(); spin.add(axis);
    const bag = new THREE.Group(); bag.add(spin); scene.add(bag);
    m.traverse((o) => { if (o.isMesh) { o.material.roughness = 0.7; o.material.metalness = 0; } });
    const warm = sprite(0xffb066, 1.0, 0.35); bag.add(warm); // halo doré de croûte chaude

    // Quelques miettes dorées qui suivent la baguette sur l'anneau et s'éteignent.
    const crumbs = Array.from({ length: 14 }, () => { const c = sprite(0xffc27a, 0.07, 0); scene.add(c); return c; });
    let ci = 0, nextCrumb = 0;

    const normal = V(), p = V(), q = V(), m4 = new THREE.Matrix4();
    const onRing = (a, out) => out.set(Math.cos(a) * R, Math.sin(a) * R, 0).applyMatrix4(ring.matrixWorld);
    const place = (g, a) => {
      onRing(a, p); onRing(a + 0.02, q);
      normal.set(0, 0, 1).transformDirection(ring.matrixWorld);
      g.position.copy(p); m4.lookAt(p, q, normal); g.quaternion.setFromRotationMatrix(m4);
    };
    let T = 0, last = performance.now();
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now; T += dt;
      earth.rotation.y += dt * 0.08;
      ring.updateMatrixWorld();
      place(bag, T * 0.68);
      spin.rotation.z = T * 2.2; // elle tourne sur elle-même en faisant le tour de la Terre
      spin.rotation.x = Math.sin(T * 1.1) * 0.25;
      nextCrumb -= dt;
      if (nextCrumb <= 0) { const c = crumbs[ci++ % crumbs.length]; c.position.copy(bag.position).add(V().randomDirection().multiplyScalar(0.06)); c.material.opacity = 0.85; nextCrumb = 0.09; }
      crumbs.forEach((c) => { c.material.opacity *= 0.95; });
      renderer.render(scene, camera);
    };
    // Le canvas suit l'affiche : réaccroché quand l'accueil est redessiné, mis en pause quand elle n'est pas visible.
    let host = null, visible = true, io = null;
    const attach = () => {
      const h = document.getElementById("hero-orbit");
      if (!h) { host = null; return false; }
      if (h !== host) {
        host = h; h.appendChild(cv);
        if (io) io.disconnect();
        io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(h);
      }
      const w = h.clientWidth, hh = h.clientHeight;
      if (w && hh && (cv.width !== Math.round(w * renderer.getPixelRatio()) || cv.height !== Math.round(hh * renderer.getPixelRatio()))) { renderer.setSize(w, hh, false); camera.aspect = w / hh; camera.updateProjectionMatrix(); }
      return true;
    };
    if (still) { const draw = () => { if (attach()) frame(last + 16); }; draw(); new MutationObserver(draw).observe(document.getElementById("view") || document.body, { childList: true }); return; }
    const loop = (now) => {
      requestAnimationFrame(loop);
      if (!attach() || !visible || document.hidden || (play && !play.hidden)) { last = now; return; }
      frame(now);
    };
    requestAnimationFrame(loop);
  }).catch(() => document.body.classList.remove("orbit-on"));
}

start();
