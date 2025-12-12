function samplePromise() {
    return Promise.resolve("Rafee");
}

const data = await samplePromise();
console.log(data);