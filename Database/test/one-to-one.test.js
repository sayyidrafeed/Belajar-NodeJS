import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client One to One Relations", () => {
    it('should be able to create one to one', async () => {
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "1",
                customer_id: "1",
                balance: 1000
            },
            include: {
                customer: true
            }
        })
        console.log(wallet);
    });

    it('should be able to create one to one with relation', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "7",
                name: "Budi",
                email: "budi@gmail.com",
                phone: "081234567890123",
                wallet: {
                    create: {
                        id: "7",
                        balance: 5000
                    }
                }
            },
            include: {
                wallet: true
            }
        })
        console.log(customer);
        console.table(customer);
    });

    it('should be able to find one to one', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "1"
            },
            include: {
                wallet: true
            }
        })
        console.log(customer);
    });

    it('should be able to find one to one with relation filter', async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                wallet: {
                    isNot: null
                }
            },
            include: {
                wallet: true
            }
        })
        console.log(customer);
    });
})