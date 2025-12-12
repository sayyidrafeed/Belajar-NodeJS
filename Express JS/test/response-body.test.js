import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send('<html><body><h1>My NodeJS saya</h1></body></html>');
})

test("Test Response Body", async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200);
    expect(response.text).toBe('<html><body><h1>My NodeJS saya</h1></body></html>');
})



