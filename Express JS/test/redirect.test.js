import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.redirect('/anjay')
})

test("Test Redirect", async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(302);
    expect(response.get('location')).toBe('/anjay');
})



