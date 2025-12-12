import express from 'express';
import request from 'supertest';

const app = express();

app.get('/hello/rafee', (req, res) => {
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol
    })
});

test("Test URL", async () => {
    const response = await request(app)
        .get('/hello/rafee')
        . query({name: 'rafee'})

    expect(response.body).toEqual({
        path: '/hello/rafee',
        originalUrl: '/hello/rafee?name=rafee',
        hostname: '127.0.0.1',
        protocol: 'http'
    })
})



