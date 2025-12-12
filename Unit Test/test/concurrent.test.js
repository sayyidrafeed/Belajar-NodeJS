import {sumAll} from "../src/sum.js";
import {sayHelloAsync} from "../src/async.js";

const table = [
    [[1, 2, 3, 4, 5], 15],
    [[1, 2, 3, 4, 10], 20],
    [[5, 5, 5, 5, 5], 25],
];

test.concurrent.each(table)("sums all sums %p to be %p", (input, expected) => {
    expect(sumAll(input)).toBe(expected);
})

const table2 = [
    {input: [1, 2, 3, 4, 5], expected: 15},
    {input: [1, 2, 3, 4, 10], expected: 20},
    {input: [5, 5, 5, 5, 5], expected: 25},
];

test.concurrent.each(table2)("sums all sums $input to be $expected", ({input, expected}) => {
    expect(sumAll(input)).toBe(expected);
})

test.concurrent("says hello asynchronously", async () => {
    await expect(sayHelloAsync("Rafee")).resolves.toBe("Hello, Rafee!");
})

test.concurrent("says hello asynchronously 2", async () => {
    await expect(sayHelloAsync("Rafee")).resolves.toBe("Hello, Rafee!");
})

test.concurrent("says hello asynchronously 3", async () => {
    await expect(sayHelloAsync("Rafee")).resolves.toBe("Hello, Rafee!");
})