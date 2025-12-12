import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use((req, res) => {
    res.status(404).send('Not Found Mas');
})

test("Not Found Middleware", async () => {
    const response = await request(app).get('/not-found-route');
    console.log(response.text);
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found Mas');
})



