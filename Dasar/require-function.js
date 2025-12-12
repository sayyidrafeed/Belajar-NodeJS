const os = require("Dasar/os.js");

console.log(os.platform());
console.table(os.cpus());
console.log(os.freemem());
console.log(os.type());
console.log(os.uptime());
console.log(os.hostname());