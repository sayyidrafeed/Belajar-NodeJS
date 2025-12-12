import process from 'process';

process.on('exit', (exitCode) => {
    console.log(`Exit with code: ${exitCode}`);
});

console.log(process.version);
console.table(process.argv);
console.log(process.platform);
console.table(process.report);
console.log(process.env);

process.exit(1);

console.log("Not printed because process exited before");