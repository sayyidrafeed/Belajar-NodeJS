test("string.not", () => {
  expect("hello").not.toBe("world");
  expect("foo").not.toMatch(/bar/);
});

test("number.not", () => {
    expect(10).not.toBe(5);
    expect(3.14).not.toBeCloseTo(2.71);
    expect(-1).not.toBeGreaterThan(0);
});

test("array.not", () => {
    expect([1, 2, 3]).not.toContain(4);
    expect(['a', 'b', 'c']).not.toEqual(['a', 'b', 'd']);
});

test("object.not", () => {
    expect({ key: 'value' }).not.toHaveProperty('missingKey');
    expect({ a: 1, b: 2 }).not.toEqual({ a: 1, b: 3 });
});

test("boolean.not", () => {
    expect(true).not.toBe(false);
    expect(false).not.toBe(true);
});

test("null.not", () => {
    expect(null).not.toBeUndefined();
    expect(null).not.toBeTruthy();
});

test("undefined.not", () => {
    expect(undefined).not.toBeDefined();
    expect(undefined).not.toBeTruthy();
});

test("function.not", () => {
    const func = () => 42;
    expect(func).not.toThrow();
    expect(func()).not.toBe(0);
});