import express from 'express';
import request from 'supertest';

const logger = (req, res, next) => {
    console.log(`${req.url} ${req.method} ${req.originalUrl}`);
    next();
}

const apiKeyMiddleware = (req, res, next) => {
    if (req.query.apiKey){
        next();
    } else {
        res.status(401).end();
    }
};

const addPoweredHeader = (req, res, next) => {
    res.setHeader('X-powered-headers', 'rafee');
    next();
}

const requestTimeMiddleware = (req, res, next) => {
   req.requestTime = Date.now();
   next();
}

const app = express();
app.use(logger);
app.use(apiKeyMiddleware)
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get('/', (req, res) => {
    res.send('My NodeJS saya');
})

app.get('/time', (req, res) => {
    res.send(`Sekarang iki ${req.requestTime}`);
})

test("Test Response Body", async () => {
    const response = await request(app).get('/').query({apiKey: 'a'});

    expect(response.status).toBe(200);
    expect(response.get('X-powered-headers')).toBe('rafee');
    expect(response.text).toBe('My NodeJS saya');
})

test("Test Request Manipulated", async () => {
    const response = await request(app).get('/time').query({apiKey: 'a'});

    expect(response.status).toBe(200);
    expect(response.text).toContain(`Sekarang iki`);
})



