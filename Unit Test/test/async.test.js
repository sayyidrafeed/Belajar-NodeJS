import {sayHelloAsync} from "../src/async.js";

test ("test async function", async () => {
    const result = await sayHelloAsync("Rafee");
    expect(result).toBe("Hello, Rafee!");
    expect(sayHelloAsync("Rafee")).resolves.toBe("Hello, Rafee!");
});

test ("test async function with wrong name", async () => {
    await expect(sayHelloAsync("John")).rejects.toThrow("Name not recognized");
});