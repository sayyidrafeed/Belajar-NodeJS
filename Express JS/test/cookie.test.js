import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const name = req.cookies.name || 'Guest';
    res.json({ greeting: `Hello, ${name}!` });
})

app.post('/login', (req, res) => {
    const name = req.body.name || 'Guest';
    res.cookie('name', name, {path: "/"});
    res.send(`Hello, ${name}!`);
})

test("Cookie", async () => {
    const response = await request(app)
        .get('/')
        .set('Cookie', ['name=World']);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ greeting: 'Hello, World!' });
});

test("Cookie Login", async () => {
    const response = await request(app)
        .post('/login')
        .send({ name: 'World' });

    expect(response.text).toBe('Hello, World!');
});




