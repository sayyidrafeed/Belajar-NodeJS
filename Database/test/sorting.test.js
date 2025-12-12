import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client Sorting", () => {
    it("should can do sorting", async () => {
        const customer = await prismaClient.customer.findMany({
            skip: 0,
            take: 5,
            orderBy: {
                id: 'desc'
            }
        })

        console.log(customer)
        expect(customer.length).toBe(5);

    })
})