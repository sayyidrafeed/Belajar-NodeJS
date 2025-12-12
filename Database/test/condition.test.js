import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should be able to query with where', async () => {
        const products = await prismaClient.product.findMany({
            where: {
                OR: [
                    {name: "A"},
                    {name: "B"}
                ]
            },
            orderBy: [
                {name: "desc"}
            ]
        })

        console.table(products);
        expect(products).toHaveLength(2);
    });
})