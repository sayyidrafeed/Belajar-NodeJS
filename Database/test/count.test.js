import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should can count', async () => {
        const customer = await prismaClient.customer.count({
            where: {
                name: "Rafee"
            }
        });

        expect(customer).toBe(1);
    });
})