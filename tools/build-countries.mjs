// Régénère data/countries.js. Usage : npm i world-atlas@2 topojson-client@3 && node tools/build-countries.mjs data/countries.js
import fs from 'fs';
import { feature } from 'topojson-client';
const topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-110m.json'));
const fc = feature(topo, topo.objects.countries);
const round = (c) => Array.isArray(c[0]) ? c.map(round) : [Math.round(c[0]*100)/100, Math.round(c[1]*100)/100];
fc.features = fc.features.filter(f => f.properties.name !== 'Antarctica').map(f => ({ type: 'Feature', id: f.id, properties: { name: f.properties.name }, geometry: { type: f.geometry.type, coordinates: round(f.geometry.coordinates) } }));
const js = '// Contours des pays : Natural Earth 1:110m (domaine public), en longitude/latitude.\n// Généré par tools/build-countries.mjs. Les id sont les codes ISO 3166 numériques.\nwindow.GEOCO_COUNTRIES=' + JSON.stringify(fc) + ';\n';
fs.writeFileSync(process.argv[2], js);
console.log('bytes', js.length, 'features', fc.features.length);
const ids = new Set(fc.features.map(f=>f.id));
console.log(['840','250','276','380','724','826','124','484','643','410','360','682','710','036','156','392','356','076','792','032','608','566','300'].filter(i=>!ids.has(i)));
