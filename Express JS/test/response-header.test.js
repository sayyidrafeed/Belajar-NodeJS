import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.set({
        'content-type': 'text/plain',
        'X-powered-by': 'Rafee',
    }).end();
})

test("Test Response Header", async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200);
    expect(response.get('content-type')).toBe('text/plain; charset=utf-8');
    expect(response.get('X-powered-by')).toBe('Rafee');
})



