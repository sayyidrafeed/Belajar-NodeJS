import fs from "fs";

const buffer = fs.readFileSync("file-system.js");

console.log(buffer.toString());

fs.writeFileSync("data.txt", "Hello World");