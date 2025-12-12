import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cookieParser("SECRETKEY"));
app.use(express.json());

app.post('/', (req, res) => {
    const name = req.body.name;
    res.cookie('Login', name, {path: "/", signed: true});
    res.send(`Hello, ${name}!`);
})

app.get('/', (req, res) => {
    const name = req.signedCookies['Login'];
    res.send(`Hello, ${name}!`);
})

test('Signed Cookie Test', async () => {
    const response = await request(app).post('/')
        .send({ name: 'World' });
    console.log(response.get('Set-Cookie').toString());
    expect(response.get('Set-Cookie').toString()).toContain('World');
    expect(response.text).toBe('Hello, World!');
})

test('Signed Cookie 2', async () => {
    const response = await request(app).get('/')
        .set('Cookie', 'Login=s%3AWorld.zYykEo29mSMeRiS8ZNBcOVEsM%2Bn8em7NAqdQF1cTJTM');
    expect(response.text).toBe('Hello, World!');
})




