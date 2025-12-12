import timers from 'timers/promises';

timers.setTimeout(5000)

console.log(new Date());
const rafee = await timers.setTimeout(5000, '5 detik sudah berlalu');
console.log(new Date());
console.log(rafee);

for await (const startTime of timers.setInterval(2000, new Date())) {
    console.info(`Start time: ${startTime}`);
}