function tagFunction(array, ...args) {
    console.log(array)
    console.log(args)
};

test("tag function test", () => {
    const name = "Rafee";

    tagFunction`Hello, ${name}!`;
})

test("tag function sql", () => {
    const name = "Rafee";
    const age = 30;

    tagFunction`SELECT *
                FROM users
                WHERE name = ${name}
                  AND age = ${age};`;
})