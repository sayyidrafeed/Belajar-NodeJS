test("string", () => {
    const name = "Muhammad Sayyid Rafee";

    expect(name).toBe("Muhammad Sayyid Rafee");
    expect(name).toMatch(/Rafee/);
});