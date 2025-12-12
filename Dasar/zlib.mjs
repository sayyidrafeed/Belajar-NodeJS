import zlib from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('zlib.mjs');
console.log(source);
console.log(source.toString());

const result = zlib.gzipSync(source);

fs.writeFileSync('zlib.mjs.txt', result);

const zipped = fs.readFileSync('zlib.mjs.txt');
const unzipped = zlib.gunzipSync(zipped);

console.log(unzipped.toString());