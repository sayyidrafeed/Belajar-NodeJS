import {threadId, Worker} from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.on("message", (message) => {
    console.log(`Worker 1 (ID: ${threadId}) says: ${message}`);
});

worker2.on("message", (message) => {
    console.log(`Worker 2 (ID: ${threadId}) says: ${message}`);
});

worker1.postMessage(100000);
worker2.postMessage(20);