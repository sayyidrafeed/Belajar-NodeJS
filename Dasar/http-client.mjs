import https from 'https';

const url = "https://nodejs-dasar.free.beeceptor.com";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.on("data", (data) => {
        console.log(`Response: ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Rafee",
    lastName: "Djamil"
});

request.write(body);
request.end();