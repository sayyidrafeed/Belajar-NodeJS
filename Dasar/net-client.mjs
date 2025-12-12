import net from 'Dasar/net-server.mjs';

const connection = net.createConnection({port: 3000, host: 'localhost'});

    setInterval(() => {
        connection.write("Rafee\r\n");
    }, 1000);

    // connection.on("data", (data) => {
    //     console.log(data.toString());
    // });