// Voiture 3D du Focus « Automobile » : three.js, chargé seulement sur cette page.
// Modèle choisi dans data/focus.js (glTF), allégé et quantifié
// (sans compression meshopt : pas de WebAssembly, pour s'afficher partout).
import * as THREE from "./assets/vendor/three/three.module.min.js";
import { GLTFLoader } from "./assets/vendor/three/GLTFLoader.js";
import { OrbitControls } from "./assets/vendor/three/OrbitControls.js";
import { RoomEnvironment } from "./assets/vendor/three/RoomEnvironment.js";

// Couleurs de carrosserie proposées (teintes des peintures du modèle).
const PAINTS = { rouge: 0x7a0c12, nacre: 0xe9e6df, graphite: 0x2b2e33 };
// Pièces masquées : plaque d'immatriculation et emblème du volant portent des logos.
const HIDDEN = ["License Plate", "InteriorSteeringEmblem"];

export async function mountCar(container, { src, hotspots = [], onHotspot, onProgress } = {}) {
  const width = () => container.clientWidth;
  const height = () => container.clientHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // plus léger sur téléphone
  renderer.setSize(width(), height());
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, width() / height(), 0.1, 100);
  camera.position.set(3.9, 1.35, 4.4);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false; // la molette fait défiler la page
  controls.enablePan = false;
  controls.autoRotate = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  controls.autoRotateSpeed = 0.6;
  controls.minPolarAngle = Math.PI * 0.2;
  controls.maxPolarAngle = Math.PI * 0.49;

  // Ombre douce sous la voiture (dégradé radial dessiné sur un canvas).
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 256;
  const g = shadowCanvas.getContext("2d");
  const grad = g.createRadialGradient(128, 128, 10, 128, 128, 128);
  grad.addColorStop(0, "rgba(0,0,0,0.75)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  scene.add(shadow);

  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(src, (e) => { if (onProgress && e.total) onProgress(e.loaded / e.total); });
  const car = gltf.scene;

  // Centrer la voiture, la poser au sol et la mettre à l'échelle (≈ 4,5 m de long).
  const box = new THREE.Box3().setFromObject(car);
  const size = box.getSize(new THREE.Vector3());
  const scale = 4.5 / Math.max(size.x, size.z);
  car.scale.setScalar(scale);
  box.setFromObject(car);
  const center = box.getCenter(new THREE.Vector3());
  car.position.sub(new THREE.Vector3(center.x, box.min.y, center.z));
  scene.add(car);
  const finalBox = new THREE.Box3().setFromObject(car);
  const finalSize = finalBox.getSize(new THREE.Vector3());
  shadow.scale.set(finalSize.x * 1.35, finalSize.z * 1.35, 1);
  shadow.position.y = 0.005;
  controls.target.set(0, finalSize.y * 0.4, 0);

  // Cadrage : sur un écran étroit (téléphone en portrait), on recule la caméra
  // pour que toute la voiture tienne dans la largeur.
  const baseDist = camera.position.distanceTo(controls.target);
  function fitCamera() {
    const aspect = width() / height();
    const dist = baseDist * Math.max(1, 1.45 / aspect);
    const dir = camera.position.clone().sub(controls.target).normalize();
    camera.position.copy(controls.target).addScaledVector(dir, dist);
  }
  fitCamera();

  const paintMaterials = new Set();
  const meshesByName = new Map();
  car.traverse((o) => {
    if (!o.isMesh) return;
    meshesByName.set(o.name, o);
    if (HIDDEN.some((h) => o.name.startsWith(h))) o.visible = false;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach((m) => { if (m && m.name && m.name.startsWith("Paint")) paintMaterials.add(m); });
  });

  function setPaint(key) {
    const c = PAINTS[key];
    if (c == null) return;
    paintMaterials.forEach((m) => { m.color.setHex(c); m.needsUpdate = true; });
  }
  setPaint("rouge");

  // Vol de caméra : au toucher d'un point, la caméra glisse vers la pièce ; « resetView » revient à la vue d'ensemble.
  const home = { target: controls.target.clone(), dir: camera.position.clone().sub(controls.target).normalize() };
  let flight = null;
  function startFlight(target, position) {
    flight = { t0: performance.now(), dur: 900, fromT: controls.target.clone(), fromP: camera.position.clone(), toT: target, toP: position };
  }
  function flyTo(p) {
    const center = new THREE.Vector3(0, finalSize.y * 0.4, 0);
    const out = p.clone().sub(center).setY(0);
    if (out.lengthSq() < 1e-6) out.copy(home.dir).setY(0);
    out.normalize();
    const dir = out.multiplyScalar(0.9).add(new THREE.Vector3(0, 0.45, 0)).normalize();
    const target = center.clone().lerp(p, 0.6);
    // La fiche s'ouvre en bas : on vise un peu sous la pièce pour qu'elle reste visible au-dessus.
    const look = target.clone().add(new THREE.Vector3(0, -finalSize.y * (width() < 600 ? 0.55 : 0.2), 0));
    startFlight(look, target.clone().addScaledVector(dir, camera.position.distanceTo(controls.target) * 0.85));
  }
  function resetView() {
    const dist = baseDist * Math.max(1, 1.45 / (width() / height()));
    const dir = camera.position.clone().sub(controls.target).setY(0).normalize().multiplyScalar(0.94).add(new THREE.Vector3(0, 0.33, 0)).normalize();
    startFlight(home.target.clone(), home.target.clone().addScaledVector(dir, dist));
    layer.querySelectorAll(".car-spot").forEach((s) => s.classList.remove("active"));
  }
  // Le premier geste fait disparaître l'indication « Glisse pour faire tourner ».
  renderer.domElement.addEventListener("pointerdown", () => { flight = null; container.classList.add("car-touched"); }, { passive: true });

  // Points d'intérêt : on les place au centre de la pièce nommée, avec un décalage éventuel.
  const layer = document.createElement("div");
  layer.className = "car-hotspots";
  container.appendChild(layer);
  const spots = hotspots.map((h) => {
    const mesh = h.part && [...meshesByName.values()].find((m) => m.name === h.part || m.name.startsWith(h.part));
    const pos = new THREE.Vector3();
    if (h.at) pos.set(...h.at).multiply(finalSize).add(finalBox.min);
    else if (mesh) new THREE.Box3().setFromObject(mesh).getCenter(pos);
    if (h.offset) pos.add(new THREE.Vector3(...h.offset).multiplyScalar(finalSize.x / 2));
    const el = document.createElement("button");
    el.className = "car-spot";
    el.type = "button";
    el.setAttribute("aria-label", h.label);
    el.innerHTML = `<span class="car-spot-dot"><span class="car-spot-core"></span><span class="car-spot-ring"></span></span><span class="car-spot-line"></span><span class="car-spot-label">${h.label}</span>`;
    el.addEventListener("click", () => {
      controls.autoRotate = false;
      layer.querySelectorAll(".car-spot").forEach((s) => s.classList.toggle("active", s === el));
      flyTo(pos);
      if (onHotspot) onHotspot(h);
    });
    layer.appendChild(el);
    return { el, pos };
  });

  const tmp = new THREE.Vector3();
  const camDir = new THREE.Vector3();
  function placeSpots() {
    const w = width(), hgt = height();
    camera.getWorldDirection(camDir);
    const camDist = camera.position.distanceTo(controls.target);
    spots.forEach(({ el, pos }) => {
      tmp.copy(pos).project(camera);
      const x = (tmp.x * 0.5 + 0.5) * w;
      const y = (-tmp.y * 0.5 + 0.5) * hgt;
      el.style.transform = `translate(${x}px, ${y}px)`;
      // Un point caché derrière la voiture devient discret.
      const behind = camera.position.distanceTo(pos) > camDist + finalSize.z * 0.15;
      el.classList.toggle("behind", behind);
    });
  }

  let running = true;
  let raf = 0;
  function loop() {
    if (!running) return;
    if (!document.body.contains(container)) return destroy();
    if (flight) {
      const k = Math.min(1, (performance.now() - flight.t0) / flight.dur);
      const e = 1 - Math.pow(1 - k, 3);
      controls.target.lerpVectors(flight.fromT, flight.toT, e);
      camera.position.lerpVectors(flight.fromP, flight.toP, e);
      if (k >= 1) flight = null;
    }
    controls.update();
    renderer.render(scene, camera);
    placeSpots();
    raf = requestAnimationFrame(loop);
  }
  loop();

  function onResize() {
    camera.aspect = width() / height();
    camera.updateProjectionMatrix();
    renderer.setSize(width(), height());
    fitCamera();
  }
  window.addEventListener("resize", onResize);

  function destroy() {
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    controls.dispose();
    renderer.dispose();
    pmrem.dispose();
  }

  return {
    setPaint,
    resetView,
    pause() { running = false; cancelAnimationFrame(raf); },
    resume() { if (!running) { running = true; loop(); } },
    destroy,
    // Compatibilité avec le routeur de l'appli (même interface que les globes).
    world: { pauseAnimation() { running = false; }, resumeAnimation() { if (!running) { running = true; loop(); } } }
  };
}
