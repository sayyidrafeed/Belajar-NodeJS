import {sumAll} from "../src/sum.js";

// Bad practice: each test is independent
// test("sums all sums", () => {
//     const result = sumAll([1, 2, 3, 4, 5]);
//     expect(result).toBe(15);
// })
//
// test("sums all sums 2", () => {
//     const result = sumAll([1, 2, 3, 4, 10]);
//     expect(result).toBe(20);
// })

const table = [
    [[1, 2, 3, 4, 5], 15],
    [[1, 2, 3, 4, 10], 20],
    [[5, 5, 5, 5, 5], 25],
];

test.each(table)("sums all sums %p to be %p", (input, expected) => {
    expect(sumAll(input)).toBe(expected);
})

const table2 = [
    {input: [1, 2, 3, 4, 5], expected: 15},
    {input: [1, 2, 3, 4, 10], expected: 20},
    {input: [5, 5, 5, 5, 5], expected: 25},
];

test.each(table2)("sums all sums $input to be $expected", ({input, expected}) => {
    expect(sumAll(input)).toBe(expected);
})