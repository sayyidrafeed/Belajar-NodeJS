import {sumAll} from "../src/sum.js";

describe("sumAll", () => {
    it("sums all sums", () => {
        const result = sumAll([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
    })
});