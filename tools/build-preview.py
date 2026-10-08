# Prépare le dossier .preview/ publié comme page privée sur claude.ai (aperçu de l'appli).
# La page publiée ne doit pas contenir <html>, <head> ni <body> : on garde le titre,
# les polices, la feuille de style et le contenu du <body>.
# Usage : python3 tools/build-preview.py
import re, shutil, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / ".preview"
FILES = [
    "styles.css", "app.js", "viz.js", "globe.js",
    "data/content.js", "data/news.js", "data/culture.js", "data/etudes.js", "data/indicators.js", "data/conflits.js", "data/lettres.js", "data/focus.js",
    "car3d.js", "assets/models/car-concept.json", "assets/models/car-poster.webp",
    "assets/vendor/three/three.module.min.js", "assets/vendor/three/GLTFLoader.js",
    "assets/vendor/three/OrbitControls.js", "assets/vendor/three/RoomEnvironment.js",
    "assets/vendor/three/BufferGeometryUtils.js",
    "data/countries.js", "data/world.js",
    "assets/vendor/globe.gl.min.js", "assets/earth/earth-blue-marble.jpg",
    "assets/earth/earth-topology.png", "assets/earth/clouds-alpha.jpg", "assets/icon.svg",
    "assets/icon-180.png", "assets/icon-192.png", "assets/icon-512.png", "assets/og-image.jpg",
]

# Lettres du matin en PDF.
FILES += [str(a.relative_to(ROOT)) for a in sorted((ROOT / "lettres").glob("*.pdf"))]
# Épisodes du podcast : tous les fichiers audio de assets/podcast/.
FILES += [str(a.relative_to(ROOT)) for a in sorted((ROOT / "assets/podcast").glob("*")) if a.suffix.lower() in (".mp3", ".m4a")]

shutil.rmtree(OUT, ignore_errors=True)
for f in FILES:
    (OUT / f).parent.mkdir(parents=True, exist_ok=True)
    shutil.copy(ROOT / f, OUT / f)

src = (ROOT / "index.html").read_text(encoding="utf-8")
head = re.search(r"<head>(.*)</head>", src, re.S).group(1)
body = re.search(r"<body>(.*)</body>", src, re.S).group(1)
keep = [l for l in head.splitlines() if any(k in l for k in ("<title>", "fonts.g", "styles.css", "theme-color"))]
(OUT / "index.html").write_text("\n".join(keep) + "\n" + body.strip() + "\n", encoding="utf-8")
print("Aperçu prêt dans", OUT, "avec", len(FILES) + 1, "fichiers.")
