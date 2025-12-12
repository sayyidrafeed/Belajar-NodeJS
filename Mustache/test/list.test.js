import Mustache from 'mustache';
import fs from 'fs/promises';

test("List Rendering", async () => {
    const template = await fs.readFile('./templates/hobbies.mustache')
        .then(data => data.toString());

    const data = Mustache.render(template,{
        hobbies: [
            "Reading",
            "Traveling",
            "Cooking"
        ]
    });

    console.log(data);
    expect(data).toContain("Reading");
})

test("List Object Rendering", async () => {
    const template = await fs.readFile('./templates/class.mustache')
        .then(data => data.toString());

    const data = Mustache.render(template,{
        students: [
            { name: "Alice", age: 20 },
            { name: "Bob", age: 22 },
            { name: "Charlie", age: 23 }
        ]
    });

    console.log(data);
    expect(data).toContain("Charlie");
})