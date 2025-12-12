import {sayHello} from "../src/sayHello.js";

test("sayHello success", () => {
    expect(sayHello("Rafee")).toBe("Hello, Rafee!");
});

test.failing("sayHello error", () => {
    sayHello();
});