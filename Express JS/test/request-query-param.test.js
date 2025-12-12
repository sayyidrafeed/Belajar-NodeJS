import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send(`Halo ${req.query.firstName} ${req.query.lastName}`);
})

test("Request Query Paramm", async () => {
    const response = await request(app)
        .get("/")
        .query({firstName: "John", lastName: "Doe"});
    expect(response.status).toBe(200);
    expect(response.text).toBe("Halo John Doe");
})



