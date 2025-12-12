import express from 'express';
import request from 'supertest';

const app = express();

const router = express.Router();
router.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

router.get('/', (req, res) => {
    res.send('Hello, Root!');
})

router.get('/test', (req, res) => {
    res.send('Hello, Test!');
});

test("Test Route Disabled", async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(404);
})

test("Test Route Enabled", async () => {
    app.use(router);
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, Test!');
})