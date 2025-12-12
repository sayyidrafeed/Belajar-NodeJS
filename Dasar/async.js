function samplePromise() {
    return Promise.resolve("Rafee");
}

async function run() {

}

const data = await samplePromise();
console.log(data);