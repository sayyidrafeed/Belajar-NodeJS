import express from 'express';
import request from 'supertest';
import mustacheExpress from 'mustache-express';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', mustacheExpress());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Test Title',
        say: 'Hello, World!'
    })
})

test("Template", async () => {
    const response = await request(app).get('/');

    console.log(response);
    expect(response.status).toBe(200);
    expect(response.text).toContain('<title>Test Title</title>');
    expect(response.text).toContain('<p>Hello, World!</p>');
})



