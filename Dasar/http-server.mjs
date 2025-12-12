import http from 'http';

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.on("data", (data) => {
            req.setHeader("Content-Type", "application/json");
            res.write(data);
            res.end();
        })
    } else {
        res.write("Apaan jir lu ngirim2");
        res.end();
    }
});

server.listen(3000);