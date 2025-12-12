import Mustache from "mustache";
import * as fs from "fs/promises";

test("Tags", () => {
    const data = Mustache.render("Hello, {{name}}, my hobby is {{{hobby}}}.", { name: "Alice", hobby: "<b>painting</b>" });
    expect(data).toBe("Hello, Alice, my hobby is <b>painting</b>.");

    console.log(data);
})

test("Nested Object", () => {
    const data = Mustache.render("Hello, {{person.name}}, you are {{person.age}} years old.", { person: { name: "Bob", age: 30 } });
    expect(data).toBe("Hello, Bob, you are 30 years old.");

    console.log(data);
})

test("Mustache File", async () => {
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Rafee"
    });

    console.log(data);
    expect(data).toContain("Rafee");
})

test("Mustache Section", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {person: "Rafee"});

    console.log(data);
    expect(data).toContain("Sayanggg");
})

test("Mustache Section Data", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {person: {
        name: "Rafee",
        age: 20
        }});

    console.log(data);
    expect(data).toContain("Sayanggg");
})

test("Mustache Inverted Section", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {});

    console.log(data);
    expect(data).toContain("Data");
})

test("Comments", async () => {
    const template = await fs.readFile("./templates/comment.mustache")
        .then(data => data.toString());

    const data = Mustache.render(template, {title: "Hello World"});

    console.log(data);
    expect(data).not.toContain("Comment");
})

test("Partial", async () => {
    const headerTemplate = await fs.readFile("./templates/header.mustache").then(data => data.toString());
    const footerTemplate = await fs.readFile("./templates/footer.mustache").then(data => data.toString());
    const contentTemplate = await fs.readFile("./templates/content.mustache").then(data => data.toString());

    const data = Mustache.render(contentTemplate, {
        title: "My Page",
        content: "This is my page content."
    }, {
        header: headerTemplate,
        footer: footerTemplate
    });

    console.log(data);
    expect(data).toContain("My Page");
    expect(data).toContain("This is my page content.");
    expect(data).toContain("Powered");
})