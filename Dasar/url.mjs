import {URL} from 'url';

const rfd = new URL('https://www.youtube.com/@RFDChannel/featured');

console.log(rfd.href);
console.log(rfd.hostname);
console.log(rfd.pathname);
console.log(rfd.protocol);
console.log(rfd.search);
console.log(rfd.searchParams);
console.log(rfd.toString());
console.log(rfd.toJSON());

rfd.searchParams.append("channel", rfd.toString());

console.log(rfd.searchParams);