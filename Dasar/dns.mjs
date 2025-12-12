import dns from "dns/promises";

const ip = await dns.lookup("www.google.com");

console.log(ip);