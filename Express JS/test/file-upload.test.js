import express from 'express';
import request from 'supertest';
import expressFileUpload from 'express-fileupload';

const app = express();
app.use(expressFileUpload());

app.post('/file', async (req, res) => {
    const textFile = req.files?.article;
    await textFile.mv(__dirname + '/upload/' + textFile.name);
    res.send(`Hello ${req.body.name}, ${textFile.name} File uploaded!`)
})

test("File Upload", async () => {
    const response = await request(app).post('/file')
        .set('Content-Type', 'multipart/form-data')
        .field('name', 'John Doe')
        .attach('article', __dirname + '/contoh.txt');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello John Doe, contoh.txt File uploaded!');
})



