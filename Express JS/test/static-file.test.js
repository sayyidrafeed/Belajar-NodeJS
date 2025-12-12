import express from 'express';
import request from 'supertest';

const app = express();

app.use("/static", express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/contoh.txt', (req, res) => {
    res.send('Hello Contoh!');
})

test("Request", async () => {
    let response = await request(app).get('/contoh.txt')
    expect(response.status).toBe(200)
    expect(response.text).toContain('Hello Contoh!');

    response = await request(app).get('/static/contoh.txt')
    expect(response.status).toBe(200)
    expect(response.text).toContain('Halo')

    response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
})



