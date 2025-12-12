import {sum} from '../src/sum.js';

beforeAll(() => {
    console.log("Setting up before all tests");
});

beforeEach(() => {
    console.log("Setting up before each test");
});

afterEach(() => {
    console.log("Cleaning up after each test");
});

afterAll(() => {
    console.log("All tests completed");
});

test("sample test", () => {
    expect(sum(1, 2)).toBe(3);
});

test("another sample test", () => {
    expect(sum(-1, 1)).toBe(0);
});