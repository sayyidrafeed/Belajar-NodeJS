import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/*splat.json', (req, res) => {
    res.send(req.originalUrl);
});

// Entah kenapa
// app.get('/categories/:categoryId(\\d+).json', (req, res) => {
//     res.send(req.originalUrl);
// });

test("Test Route Path", async () => {
    let response = await request(app).get('/products/asd.json')
    expect(response.text).toBe(`/products/asd.json`);
})  




