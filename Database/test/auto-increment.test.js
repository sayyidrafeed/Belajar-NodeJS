import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client Auto Increment", () => {
    it('should be able to create with auto increment PK', async () => {
        const category = await prismaClient.category.create({
            data: {
                name: "Food"
            }
        })

        console.log(category)
        expect(category).toHaveProperty("id")
    });
})