import {PrismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to connect", async () => {
        await prisma.$connect();

        await prisma.$disconnect();
    })
})