import {calculate} from "../src/sum.js";

test("test mock matchers", () => {
    const callback = jest.fn();

    calculate([1, 2, 3], callback);

    // Using mock matchers
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(6);
})