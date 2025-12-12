test("array", () => {
    const names = ["Muhammad", "Sayyid", "Rafee"];

    expect(names).toContain("Rafee");

    const person = [{ name: "Muhammad" }, { name: "Sayyid" }, { name: "Rafee" }];
    expect(person).toContainEqual({ name: "Rafee" });
})