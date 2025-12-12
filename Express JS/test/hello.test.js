import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send("W mah ganteng");
})

test("GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
})



