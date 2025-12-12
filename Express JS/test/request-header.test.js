import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    if (req.query.name) {
        res.status(200).send(`Halo ${req.query.name}`);
    } else {
        res.status(404).end()
    }
})

test("Test Query Param", async () => {
    let response = await request(app)
        .get("/")
        .query({ name: 1 })

    response = await request(app)
        .get("/")
    expect(response.status).toBe(404);
})



