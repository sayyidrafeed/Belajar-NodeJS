import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client executeSQL", () => {
    it("should be able to execute raw SQL", async () => {
        const id = "1";
        const name = "Rafee Djamil";

        const impacted = await prismaClient.$executeRaw`INSERT INTO sample (id, name)
                                                        VALUES (${id}, ${name});`;

        console.log({impacted});
        expect(impacted).toBe(1);
    })
})