// Régénère data/world.js (fond de carte) à partir de Natural Earth.
// Usage : npm i world-atlas@2 d3-geo@3 topojson-client@3 topojson-simplify@3
//         node tools/build-map.mjs 0.3 data/world.js
import fs from 'fs';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
let topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
topo = presimplify(topo);
topo = simplify(topo, quantile(topo, Number(process.argv[2] || 0.25)));
const W = 2000;
// Mercator, monde entier entre ~85°N et ~-85°S, largeur 2000
const proj = geoMercator().scale(W / (2 * Math.PI)).translate([W / 2, W / 2]);
const path = geoPath(proj).digits(1);
const fc = feature(topo, topo.objects.countries);
const out = fc.features.filter(f => f.properties.name !== 'Antarctica').map(f => ({ n: f.properties.name, d: path(f) })).filter(c => c.d);
const js = '// Fond de carte : Natural Earth 1:50m (domaine public), projection Mercator, largeur 2000.\n// Généré par un script à partir du paquet npm world-atlas. Ne pas modifier à la main.\nwindow.GEOCO_WORLD={w:2000,countries:' + JSON.stringify(out) + '};\n';
fs.writeFileSync(process.argv[3] || 'world.js', js);
console.log('countries', out.length, 'bytes', js.length);
