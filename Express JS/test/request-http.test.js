import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send(`${req.query.name}`);
})

test("Test Query Param", async () => {
    const response = await request(app).get("/").query({name: 'test'});
    expect(response.status).toBe(200);
    expect(response.text).toBe('test');
})



