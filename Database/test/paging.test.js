import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client Paging", () => {
    it("should can do paging", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 1
        })
        expect(page1.length).toBe(1)

        const page2 = await prismaClient.customer.findMany({
            skip: 1,
            take: 1
        })
        expect(page2.length).toBe(1)

        const page3 = await prismaClient.customer.findMany({
            skip: 2,
            take: 1
        })
        expect(page3.length).toBe(1)

        const page4 = await prismaClient.customer.findMany({
            skip: 3,
            take: 1
        })
        expect(page4.length).toBe(1)

        const page5 = await prismaClient.customer.findMany({
            skip: 4,
            take: 1
        })
        expect(page5.length).toBe(1)

        console.table(page1);
        console.table(page2);
        console.table(page3);
        console.table(page4);
        console.table(page5);
    })
})