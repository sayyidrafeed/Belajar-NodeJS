import {calculate, calculateAndReturn} from "../src/sum.js";

test("test mock function", () => {
    const callback = jest.fn();

    calculate([1, 2, 3], callback);

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.calls[0][0]).toBe(6);

    // Check if the mock function was called
    expect(callback).toHaveBeenCalled();

    // Check how many times the mock function was called
    expect(callback).toHaveBeenCalledTimes(1);

    // Check the arguments with which the mock function was called
    expect(callback).toHaveBeenCalledWith(6);
})

test("test mock function with return value", () => {
    const callback = jest.fn().mockReturnValue(10);

    const result = calculateAndReturn([1, 2, 3], callback);

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.calls[0][0]).toBe(6);
    expect(result).toBe(10);

    // Check if the mock function was called
    expect(callback).toHaveBeenCalled();

    // Check how many times the mock function was called
    expect(callback).toHaveBeenCalledTimes(1);

    // Check the arguments with which the mock function was called
    expect(callback).toHaveBeenCalledWith(6);
});

test("test mock function with implementation", () => {
    const callback = jest.fn().mockImplementation((total) => {
        return total * 2;
    });

    expect(calculateAndReturn([1, 2, 3], callback)).toBe(12);

    expect(callback.mock.calls.length).toBe(1);
})