import express from 'express';
import request from 'supertest';

const app = express();

const ErrorHandlingMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`${err.message}`);
}

app.get('/', (req, res) => {
    throw new Error("Aduh")
})
app.use(ErrorHandlingMiddleware);

test("Test Response", async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(500)
    expect(response.text).toBe('Aduh')
})



