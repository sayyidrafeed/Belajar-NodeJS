import net from 'Dasar/net-server.mjs';

const server = net.createServer(function (client) {
    console.log("Client connected");
    client.on("data", function (data) {
        console.log(`Received: ${data.toString()}`);
        client.write(`Hello, you sent -> ${data}\r\n`);
    })
})

server.listen(3000, "localhost");