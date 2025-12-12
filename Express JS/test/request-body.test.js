import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({ greeting: `Hello, ${name}!` });
});

app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({ greeting: `Hello, ${name}!` });
});



test("Request Body JSON", async () => {
    const response = await request(app)
        .post('/json')
        .set('Accept', 'application/json')
        .send({ name: 'World' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ greeting: 'Hello, World!' });
})

test("Request Body Form", async () => {
    const response = await request(app)
        .post('/form')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send("name=World");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ greeting: 'Hello, World!' });
})



