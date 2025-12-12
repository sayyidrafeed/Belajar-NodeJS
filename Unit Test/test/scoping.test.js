beforeAll(() => console.log("Starting All outer tests"));
afterAll(() => console.log("Finished All outer tests"));

test("Test outer", () => console.log("Executing Test outer"));

describe("Scoping Tests", () => {

    beforeEach(() => console.log("Starting Each inner tests"));
    afterEach(() => console.log("Finished Each inner tests"));

   test("Test inner", () => console.log("Executing Test inner"));

});