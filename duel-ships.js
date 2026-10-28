// Fond animé du Duel (demande de l'auteur) : un chasseur TIE poursuit un chasseur Jedi dans les étoiles
// et lui tire dessus (lasers verts façon Star Wars). three.js, chargé seulement sur la page du Duel.
// Version « cinéma » (28 oct. 2026, « plus de souplesse, plus de vitesse, plus de finition, des zooms ») :
// trajectoire en boucle lissée (Catmull-Rom) qui passe tout près de l'écran puis repart au loin, vitesse qui varie
// (accélérations), virages inclinés et amortis, traînées et lueurs des moteurs, étoiles étirées par la vitesse,
// tirs qui anticipent la cible, impacts en gerbes d'étincelles, esquives en tonneau, caméra qui suit en souplesse
// (zoom à l'approche, petites secousses quand ça passe près).
// Modèles allégés dans assets/models/vaisseaux/ (json + géométrie « -geo.wasm » + textures webp, comme la Supra).
// Pause quand la page est cachée ou qu'une partie est ouverte ; une seule image fixe si l'animation est réduite.
import * as THREE from "./assets/vendor/three/three.module.min.js";
import { GLTFLoader } from "./assets/vendor/three/GLTFLoader.js";

const box = document.querySelector(".arena");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const play = document.getElementById("play");
const V = () => new THREE.Vector3();
const damp = (k, dt) => 1 - Math.exp(-k * dt); // lissage indépendant du nombre d'images par seconde

// Texture ronde et douce pour toutes les lueurs (moteurs, tirs, impacts).
function glowTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(0.25, "rgba(255,255,255,.6)"); r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function start() {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); }
  catch (e) { return; } // pas de WebGL : le fond reste noir
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = "arena-cv";
  box.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 600);
  const camBase = new THREE.Vector3(0, 0, 16);
  camera.position.copy(camBase);
  const GLOW = glowTexture();
  const sprite = (color, size, opacity = 1) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false }));
    s.scale.setScalar(size); return s;
  };

  scene.add(new THREE.HemisphereLight(0xa9bcff, 0x1a1008, 1.2));
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.position.set(8, 10, 12); scene.add(sun);
  const rim = new THREE.DirectionalLight(0xff9a5c, 2);
  rim.position.set(-10, -3, -8); scene.add(rim);
  const flashLight = new THREE.PointLight(0x9dff8a, 0, 18, 2); scene.add(flashLight); // éclair vert des impacts

  // Étoiles : des traits qui s'étirent avec la vitesse (effet « saut »).
  const N = 1100, S = new Float32Array(N * 6), seed = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { seed[i * 3] = (Math.random() - 0.5) * 220; seed[i * 3 + 1] = (Math.random() - 0.5) * 140; seed[i * 3 + 2] = -Math.random() * 320 + 16; }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(S, 3));
  const stars = new THREE.LineSegments(starGeo, new THREE.LineBasicMaterial({ color: 0xdfe6ff, transparent: true, opacity: 0.75 }));
  scene.add(stars);
  const dust = new THREE.Points(new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(seed, 3)),
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, transparent: true, opacity: 0.6 }));
  scene.add(dust);

  // Un vaisseau : groupe (position + cap) > inclinaison (virages, tonneaux) > modèle recentré, nez vers -Z.
  const ship = (gltf, len, fix) => {
    const m = gltf.scene;
    const b = new THREE.Box3().setFromObject(m), s = b.getSize(V());
    m.scale.setScalar(len / Math.max(s.x, s.y, s.z));
    b.setFromObject(m); m.position.sub(b.getCenter(V()));
    const pivot = new THREE.Group(); pivot.add(m); pivot.rotation.set(...fix);
    const bankG = new THREE.Group(); bankG.add(pivot);
    const g = new THREE.Group(); g.add(bankG); scene.add(g);
    g.userData = { bankG, bank: 0, roll: 0, rollT: -1, len, q: new THREE.Quaternion(), flash: 0 };
    return g;
  };

  // Traînée lumineuse derrière un moteur : les dernières positions, de plus en plus pâles.
  const trail = (color, n = 46) => {
    const p = new Float32Array(n * 3), c = new Float32Array(n * 3), col = new THREE.Color(color);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(p, 3)); geo.setAttribute("color", new THREE.BufferAttribute(c, 3));
    for (let i = 0; i < n; i++) { const k = Math.pow(1 - i / n, 1.6); c[i * 3] = col.r * k; c[i * 3 + 1] = col.g * k; c[i * 3 + 2] = col.b * k; }
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    line.frustumCulled = false; scene.add(line);
    let filled = false;
    return (pt) => {
      if (!filled) { for (let i = 0; i < n; i++) p.set([pt.x, pt.y, pt.z], i * 3); filled = true; }
      p.copyWithin(3, 0, (n - 1) * 3); p[0] = pt.x; p[1] = pt.y; p[2] = pt.z;
      geo.attributes.position.needsUpdate = true;
    };
  };

  // Tirs : trait vert vif + halo, qui file en ligne droite.
  const boltGeo = new THREE.CylinderGeometry(0.045, 0.045, 2.2, 6).rotateX(Math.PI / 2);
  const boltMat = new THREE.MeshBasicMaterial({ color: 0xc8ffb8, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const haloGeo = new THREE.CylinderGeometry(0.17, 0.17, 2.6, 8).rotateX(Math.PI / 2);
  const haloMat = new THREE.MeshBasicMaterial({ color: 0x2bff4a, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false });
  const bolts = [];
  const fire = (from, q, side) => {
    const b = new THREE.Group();
    b.add(new THREE.Mesh(boltGeo, boltMat), new THREE.Mesh(haloGeo, haloMat), sprite(0x5bff6a, 1.4, 0.5));
    b.position.copy(from).add(V().set(side, -0.1, -0.6).applyQuaternion(q));
    b.quaternion.copy(q);
    b.userData = { v: V().set(0, 0, -1).applyQuaternion(q).multiplyScalar(95), life: 1.2 };
    scene.add(b); bolts.push(b);
    muzzle.position.copy(b.position); muzzle.material.opacity = 1;
  };
  const muzzle = sprite(0x7dff7a, 2.2, 0); scene.add(muzzle);

  // Étincelles d'impact.
  const SP = 60, spPos = new Float32Array(SP * 3), spVel = new Float32Array(SP * 3), spLife = new Float32Array(SP);
  const sparkGeo = new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(spPos, 3));
  const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({ map: GLOW, color: 0xffd9a0, size: 0.55, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  sparks.frustumCulled = false; scene.add(sparks);
  const burst = sprite(0xffffff, 4, 0); scene.add(burst);
  let sp = 0;
  const impact = (at) => {
    for (let k = 0; k < 22; k++) {
      const i = sp++ % SP; spPos.set([at.x, at.y, at.z], i * 3);
      const d = V().randomDirection().multiplyScalar(6 + Math.random() * 14);
      spVel.set([d.x, d.y, d.z], i * 3); spLife[i] = 0.5 + Math.random() * 0.5;
    }
    burst.position.copy(at); burst.material.opacity = 0.85; burst.scale.setScalar(2.6);
    flashLight.position.copy(at); flashLight.intensity = 60;
  };

  // Le parcours : une boucle souple qui plonge vers l'écran, frôle la caméra, puis repart très loin.
  // Courbe sans angle (demande de l'auteur : « pas de changement de direction brusque ») : somme de sinusoïdes lentes,
  // échantillonnée en 64 points ; un seul grand passage près de l'écran par tour, puis un long éloignement.
  const KEYS = Array.from({ length: 64 }, (_, i) => {
    const a = (i / 64) * Math.PI * 2;
    return [14 * Math.sin(a) + 2.5 * Math.sin(2 * a + 1), 3.5 * Math.sin(2 * a + 0.5) + 2 * Math.sin(a + 2), -30 + 38 * Math.cos(a - 0.35)];
  });
  let curve = null, curveLen = 1;
  const buildCurve = (portrait) => {
    const sx = portrait ? 0.42 : 1, sy = portrait ? 1.5 : 1;
    curve = new THREE.CatmullRomCurve3(KEYS.map(([x, y, z]) => new THREE.Vector3(x * sx, y * sy, z)), true, "catmullrom", 0.5);
    curve.arcLengthDivisions = 600; curve.updateArcLengths(); curveLen = curve.getLength();
  };

  const loader = new GLTFLoader();
  Promise.all([loader.loadAsync("assets/models/vaisseaux/jedi.json"), loader.loadAsync("assets/models/vaisseaux/tie.json")]).then(([j, t]) => {
    const jedi = ship(j, 3.2, [0, Math.PI, 0]);
    const tie = ship(t, 2.5, [0, Math.PI, 0]);
    // Le TIE est presque noir d'origine : on éclaircit un peu le métal pour qu'il se détache du fond (sauf la lueur rouge des moteurs).
    const steel = new THREE.Color(0x7b808d);
    tie.traverse((o) => { if (!o.isMesh) return; const m = o.material; m.flatShading = true;
      if (m.color && m.color.r < 0.5) { m.color.lerp(steel, 0.55); m.metalness = 0.4; m.roughness = 0.5; } m.needsUpdate = true; });
    jedi.traverse((o) => { if (o.isMesh && o.material) { o.material.metalness = 0.35; o.material.roughness = 0.45; } });

    // Moteurs : lueurs à l'arrière et traînées.
    const jGlow = sprite(0xffa04a, 2.4, 0.95), tGlow = sprite(0xff4a5a, 1.6, 0.8);
    jGlow.position.set(0, 0, 1.55); tGlow.position.set(0, 0, 0.9);
    jedi.userData.bankG.add(jGlow); tie.userData.bankG.add(tGlow);
    const jTrailL = trail(0xffa95a), jTrailR = trail(0xffa95a), tTrail = trail(0xff5a6a, 34);
    const shieldFlash = sprite(0x9dffb0, 3.6, 0); jedi.add(shieldFlash);

    const up = V().set(0, 1, 0), m4 = new THREE.Matrix4(), qT = new THREE.Quaternion();
    const pA = V(), pB = V(), tan = V(), tan2 = V(), aim = V(), tmp = V(), mid = V(), look = V().set(0, 0, -10), camVel = V();
    let last = performance.now(), T = 0, uJ = 0.08, gap = 8, nextShot = 1, shake = 0, fov = 52, speedNow = 18;

    // Place un vaisseau au point u de la boucle : cap amorti, inclinaison selon le virage, tonneau éventuel.
    const place = (g, u, dt, hard) => {
      const D = g.userData;
      curve.getPointAt(((u % 1) + 1) % 1, pA); curve.getTangentAt(((u % 1) + 1) % 1, tan);
      curve.getTangentAt((((u + 0.012) % 1) + 1) % 1, tan2);
      g.position.copy(pA);
      m4.lookAt(pA, tmp.copy(pA).add(tan), up); qT.setFromRotationMatrix(m4);
      g.quaternion.slerp(qT, damp(hard ? 3.2 : 2.6, dt));
      const turn = tmp.copy(tan).cross(tan2).dot(up); // >0 : virage à gauche
      const bankTarget = THREE.MathUtils.clamp(-turn * 18, -0.9, 0.9);
      D.bank += (bankTarget - D.bank) * damp(1.6, dt);
      if (D.rollT >= 0) { D.rollT += dt; const k = Math.min(1, D.rollT / 1.7); D.roll = (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2) * Math.PI * 2 * D.rollDir; if (k >= 1) { D.rollT = -1; D.roll = 0; } }
      D.bankG.rotation.z = D.bank + D.roll;
    };
    const rearOf = (g, x, z, out) => out.set(x, 0, z).applyQuaternion(g.userData.bankG.getWorldQuaternion(qT)).add(g.position);

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now; T += dt;
      // Vitesse : un rythme de croisière, des accélérations franches, un petit ralenti avant les passages près de l'écran.
      const surge = Math.pow(Math.max(0, Math.sin(T * 0.45)), 3);
      const target = 17 + 15 * surge;
      speedNow += (target - speedNow) * damp(0.7, dt);
      uJ += (speedNow * dt) / curveLen;
      // Le TIE colle au Jedi puis décroche : l'écart respire.
      gap += ((6.5 + 4.5 * (0.5 + 0.5 * Math.sin(T * 0.33 + 1))) - gap) * damp(1, dt);
      place(jedi, uJ, dt, false);
      place(tie, uJ - gap / curveLen, dt, true);

      // Traînées et lueurs.
      jTrailL(rearOf(jedi, -0.55, 1.5, tmp)); jTrailR(rearOf(jedi, 0.55, 1.5, tmp)); tTrail(rearOf(tie, 0, 0.8, tmp));
      jGlow.material.opacity = 0.75 + 0.25 * Math.sin(now * 0.04) * surge + 0.2 * surge;
      jGlow.scale.setScalar(2.2 + 1.6 * surge);

      // Tirs : rafales quand le TIE est près, le TIE vise un peu devant le Jedi.
      nextShot -= dt;
      if (nextShot <= 0) {
        const lead = jedi.position.distanceTo(tie.position) / 95;
        curve.getPointAt((((uJ + (speedNow * lead) / curveLen) % 1) + 1) % 1, aim);
        aim.add(tmp.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(gap < 8 ? 1.3 : 2.8));
        m4.lookAt(tie.position, aim, up); qT.setFromRotationMatrix(m4);
        const q = qT.clone();
        fire(tie.position, q, -0.5); setTimeout(() => fire(tie.position, q, 0.5), 70);
        nextShot = gap < 8.5 ? 0.55 + Math.random() * 0.5 : 1.4 + Math.random() * 1.2; // moins de tirs (demande de l'auteur)
      }
      muzzle.material.opacity *= 1 - damp(18, dt);
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bo = bolts[i]; bo.position.addScaledVector(bo.userData.v, dt); bo.userData.life -= dt;
        const dJ = bo.position.distanceTo(jedi.position);
        if (dJ < 1.25) { // touché : gerbe d'étincelles, bouclier qui s'allume, tonneau d'esquive
          impact(bo.position); shieldFlash.material.opacity = 0.9;
          const D = jedi.userData; if (D.rollT < 0 && Math.random() < 0.2) { D.rollT = 0; D.rollDir = Math.random() < 0.5 ? -1 : 1; }
          bo.userData.life = 0;
        }
        if (bo.userData.life <= 0) { scene.remove(bo); bolts.splice(i, 1); }
      }
      shieldFlash.material.opacity *= 1 - damp(6, dt);
      burst.material.opacity *= 1 - damp(7, dt); burst.scale.multiplyScalar(1 + dt * 2);
      flashLight.intensity *= 1 - damp(9, dt);
      for (let i = 0; i < SP; i++) {
        if (spLife[i] <= 0) { spPos[i * 3 + 1] = 9999; continue; }
        spLife[i] -= dt; for (let a = 0; a < 3; a++) { spPos[i * 3 + a] += spVel[i * 3 + a] * dt; spVel[i * 3 + a] *= 1 - damp(3, dt); }
      }
      sparkGeo.attributes.position.needsUpdate = true;

      // Étoiles qui défilent ; plus c'est rapide, plus elles s'étirent.
      const sv = 30 + speedNow * 3.2, streak = 0.6 + speedNow * 0.09 + surge * 2.5;
      for (let i = 0; i < N; i++) {
        let z = seed[i * 3 + 2] + sv * dt; if (z > 16) z -= 336; seed[i * 3 + 2] = z;
        S[i * 6] = S[i * 6 + 3] = seed[i * 3]; S[i * 6 + 1] = S[i * 6 + 4] = seed[i * 3 + 1];
        S[i * 6 + 2] = z; S[i * 6 + 5] = z - streak;
      }
      starGeo.attributes.position.needsUpdate = true; dust.geometry.attributes.position.needsUpdate = true;

      // Caméra : elle suit le duel en souplesse (on regarde entre les deux), recule ou se rapproche,
      // grand-angle pendant les accélérations, petite secousse quand un vaisseau frôle l'écran.
      mid.copy(jedi.position).lerp(tie.position, 0.4);
      look.lerp(tmp.copy(mid).multiplyScalar(0.55).setZ(Math.min(mid.z, -4)), damp(1.1, dt));
      const near = Math.min(jedi.position.distanceTo(camera.position), tie.position.distanceTo(camera.position));
      if (near < 7) shake = Math.max(shake, (7 - near) / 7 * 0.35);
      shake *= 1 - damp(4, dt);
      const camTarget = tmp.copy(camBase).add(V().set(Math.sin(T * 0.21) * 2.5 + mid.x * 0.18, Math.sin(T * 0.17) * 1.6 + mid.y * 0.15, Math.cos(T * 0.13) * 3 + (mid.z < -30 ? -6 : 0)));
      camVel.lerp(camTarget.sub(camera.position), damp(0.8, dt));
      camera.position.addScaledVector(camVel, damp(2.5, dt));
      camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake;
      camera.lookAt(look);
      fov += ((48 + surge * 14 + (mid.z < -35 ? -8 : 0)) - fov) * damp(2, dt);
      camera.fov = fov; camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight, portrait = w < h;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      camBase.set(0, 0, portrait ? 19 : 16);
      buildCurve(portrait); camera.updateProjectionMatrix();
    };
    addEventListener("resize", resize); resize();
    camera.position.copy(camBase);
    if (still) { for (let k = 0; k < 90; k++) frame(last + 16 * (k + 1)); return; }
    const loop = (now) => {
      requestAnimationFrame(loop);
      if (document.hidden || (play && !play.hidden)) { last = now; return; }
      frame(now);
    };
    requestAnimationFrame(loop);
  }).catch(() => {});
}

if (box) start();
