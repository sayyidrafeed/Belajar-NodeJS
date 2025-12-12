import Mustache from "mustache";

test("Mustache", () => {
    const data = Mustache.render("Hello, {{name}}!", { name: "World" });
    expect(data).toBe("Hello, World!");
});

test("Mustache Cache", () => {
    Mustache.parse("Hello, {{name}}!");

    const data = Mustache.render("Hello, {{name}}!", { name: "World" });
    expect(data).toBe("Hello, World!");
})

test("Function", async () => {
    const parameter = {
        name: "Rafee",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}!", parameter);
    expect(data).toBe("Hello RAFEE!");
})
