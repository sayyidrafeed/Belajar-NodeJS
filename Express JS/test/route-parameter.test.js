import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/:id', (req, res) => {
    res.send(`Product: ${req.params.id}`);
});

test("Test Route Param", async () => {
    let response = await request(app).get('/products/123')
    expect(response.text).toBe(`Product: 123`);
})




