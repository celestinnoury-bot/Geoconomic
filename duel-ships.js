// Fond animé du Duel (demande de l'auteur) : un chasseur TIE poursuit un chasseur Jedi dans les étoiles
// et lui tire dessus (lasers verts façon Star Wars). three.js, chargé seulement sur la page du Duel.
// Modèles allégés dans assets/models/vaisseaux/ (json + géométrie « -geo.wasm » + textures webp, comme la Supra).
// Pause quand la page est cachée ou qu'une partie est ouverte ; une seule image fixe si l'animation est réduite.
import * as THREE from "./assets/vendor/three/three.module.min.js";
import { GLTFLoader } from "./assets/vendor/three/GLTFLoader.js";

const box = document.querySelector(".arena");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const play = document.getElementById("play");

function start() {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" }); }
  catch (e) { return; } // pas de WebGL : le fond reste noir
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = "arena-cv";
  box.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 400);
  camera.position.set(0, 0, 14);

  scene.add(new THREE.HemisphereLight(0x9fb4ff, 0x1a1008, 1.1));
  const sun = new THREE.DirectionalLight(0xffffff, 2.6);
  sun.position.set(6, 8, 10);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xff9a5c, 1.4);
  rim.position.set(-8, -2, -6);
  scene.add(rim);

  // Étoiles : un champ qui défile vers la caméra, pour donner la vitesse.
  const N = 1400, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - 0.5) * 160; pos[i * 3 + 1] = (Math.random() - 0.5) * 100; pos[i * 3 + 2] = -Math.random() * 220 + 14; }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.22, sizeAttenuation: true, transparent: true, opacity: 0.8 }));
  scene.add(stars);

  // Un vaisseau = un groupe orienté : son nez pointe vers -Z local (pour lookAt).
  const ship = (gltf, len, fix) => {
    const m = gltf.scene;
    const b = new THREE.Box3().setFromObject(m), s = b.getSize(new THREE.Vector3());
    m.scale.setScalar(len / Math.max(s.x, s.y, s.z));
    b.setFromObject(m); m.position.sub(b.getCenter(new THREE.Vector3()));
    const pivot = new THREE.Group(); pivot.add(m); m.rotation.set(...fix);
    const g = new THREE.Group(); g.add(pivot); scene.add(g);
    return g;
  };

  // Tirs : des traits verts lumineux.
  const boltGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.6, 6).rotateX(Math.PI / 2);
  const boltMat = new THREE.MeshBasicMaterial({ color: 0x6dff6a, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x2bff4a, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false });
  const glowGeo = new THREE.CylinderGeometry(0.16, 0.16, 1.9, 6).rotateX(Math.PI / 2);
  const bolts = [];
  const fire = (from, dir) => {
    for (const side of [-0.45, 0.45]) {
      const b = new THREE.Group();
      b.add(new THREE.Mesh(boltGeo, boltMat), new THREE.Mesh(glowGeo, glowMat));
      b.position.copy(from).add(new THREE.Vector3(side, -0.15, 0).applyQuaternion(dir.q));
      b.quaternion.copy(dir.q);
      b.userData = { v: new THREE.Vector3(0, 0, -1).applyQuaternion(dir.q).multiplyScalar(38), life: 1.1 };
      scene.add(b); bolts.push(b);
    }
  };

  // Trajectoire de la poursuite : une boucle douce (courbe de Lissajous) devant la caméra.
  // Amplitudes ajustées au format de l'écran (plus haute que large sur un téléphone en portrait).
  const amp = { x: 7.5, y: 3.6 };
  const path = (t, out) => out.set(Math.sin(t * 0.55) * amp.x, Math.sin(t * 0.83 + 0.6) * amp.y, Math.sin(t * 0.37) * 5 - 6);

  const loader = new GLTFLoader();
  Promise.all([loader.loadAsync("assets/models/vaisseaux/jedi.json"), loader.loadAsync("assets/models/vaisseaux/tie.json")]).then(([j, t]) => {
    // Corrections d'orientation propres à chaque modèle (nez vers -Z).
    const jedi = ship(j, 3.2, [0, Math.PI, 0]);
    const tie = ship(t, 2.4, [0, Math.PI, 0]);
    // Le TIE est presque noir d'origine : on éclaircit un peu le métal pour qu'il se détache du fond (sauf la lueur rouge des moteurs).
    const steel = new THREE.Color(0x737885);
    tie.traverse((o) => { if (!o.isMesh) return; const m = o.material; m.flatShading = true;
      if (m.color && m.color.r < 0.5) { m.color.lerp(steel, 0.55); m.metalness = 0.35; m.roughness = 0.55; } m.needsUpdate = true; });

    const a = new THREE.Vector3(), b = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), m4 = new THREE.Matrix4();
    const aim = new THREE.Vector3(), miss = new THREE.Vector3(), q = new THREE.Quaternion();
    let last = performance.now(), T = 4, nextShot = 0.8, roll = 0, rollT = -1;
    const place = (g, t, bank) => {
      path(t, a); path(t + 0.05, b);
      g.position.copy(a);
      m4.lookAt(a, b, up); g.quaternion.setFromRotationMatrix(m4);
      g.rotateZ(bank);
    };
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      T += dt;
      // Le Jedi devant, le TIE 1,4 s derrière sur la même trajectoire ; ils s'inclinent dans les virages.
      const bank = (t) => -Math.cos(t * 0.55) * 0.7;
      if (rollT < 0 && Math.random() < dt * 0.08) rollT = 0; // tonneau de temps en temps pour esquiver
      if (rollT >= 0) { rollT += dt; roll = Math.min(1, rollT / 1.1) * Math.PI * 2; if (rollT > 1.1) { rollT = -1; roll = 0; } }
      place(jedi, T, bank(T) + roll);
      place(tie, T - 1.4, bank(T - 1.4));
      nextShot -= dt;
      if (nextShot <= 0) {
        // Le TIE vise le Jedi, avec un peu d'erreur : certains tirs le frôlent.
        aim.copy(jedi.position).add(miss.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(1.6));
        m4.lookAt(tie.position, aim, up); q.setFromRotationMatrix(m4);
        fire(tie.position, { q }); nextShot = 0.35 + Math.random() * 0.6;
      }
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bo = bolts[i]; bo.position.addScaledVector(bo.userData.v, dt); bo.userData.life -= dt;
        if (bo.userData.life <= 0) { scene.remove(bo); bolts.splice(i, 1); }
      }
      const p = starGeo.attributes.position.array;
      for (let i = 2; i < p.length; i += 3) { p[i] += dt * 22; if (p[i] > 14) p[i] -= 234; }
      starGeo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      const portrait = w < h;
      camera.position.z = portrait ? 17 : 14; // téléphone en portrait : on recule un peu
      amp.x = portrait ? 3.4 : 7.5; amp.y = portrait ? 6.5 : 3.6;
      camera.updateProjectionMatrix();
    };
    addEventListener("resize", resize); resize();
    if (still) { frame(performance.now()); return; }
    const loop = (now) => {
      requestAnimationFrame(loop);
      if (document.hidden || (play && !play.hidden)) { last = now; return; }
      frame(now);
    };
    requestAnimationFrame(loop);
  }).catch(() => {});
}

if (box) start();
