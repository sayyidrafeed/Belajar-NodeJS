import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to select specific fields", async () => {
        const customers = await prismaClient.customer.create({
            data: {
                id: "6",
                name: "Charlie Davis",
                email: "charlie@gmail.com",
                phone: "08345678901241"
            },
            select: {
                id: true,
                name: true
            }
        })

        console.log(customers)
        expect(customers.email).toBeUndefined();
    })

    it('should can selkect fields', async () => {
        const customers = await prismaClient.customer.findMany({
            select: {
                id: true,
                phone: true
            }
        })

        for (const customer of customers) {
            expect(customer.id).toBeDefined();
            expect(customer.phone).toBeDefined();
            expect(customer.name).toBeUndefined();
            expect(customer.email).toBeUndefined();
        }
    });
})