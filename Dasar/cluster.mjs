import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if (cluster.isPrimary) {
    console.log(`Cluster is created successfully. Primary: ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker) => {
        console.log(`Worker ${process.pid} died`);
        cluster.fork();
    })
}

if(cluster.isWorker) {
    console.log(`Worker is working! Worker: ${process.pid}`);
    const server = http.createServer((req, res) => {
        res.write(`Response from worker ${process.pid}`);
        res.end();
        res.exit();
    })
    server.listen(8000);
}