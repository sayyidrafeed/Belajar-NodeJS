test("test toBe", () => {
    const name = "Rafee";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Rafee");
});

test("test toEqual", () => {
    const user = { name: "Rafee" };
    Object.assign(user, { age: 20 });

    expect(user).toEqual({ name: "Rafee", age: 20 });
})