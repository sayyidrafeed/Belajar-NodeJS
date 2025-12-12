import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client One to Many Relations", () => {
    it('should can insert and include', async () => {
        const comment = await prismaClient.comment.create({
            data: {
                customer_id: "1",
                title: "Insert Comment 2",
                description: "Description 2"
            },
            include: {
                customer: true
            }
        })

        console.log(comment)
    });

    it('should can insert with relation', async () => {
        const comment = await prismaClient.customer.create({
            data: {
                id: "8",
                name: "Prabowo",
                email: "bijisatu@gmail.com",
                phone: "08765432102239",
                comments: {
                    createMany: {
                        data: [
                            {
                                title: "Insert Comment 3",
                                description: "Description 3"
                            },
                            {
                                title: "Insert Comment 4",
                                description: "Description 4"
                            }
                        ]
                    }
                }
            },
            include: {
                comments: true
            }
        })

        console.log(comment)
    });

    it('should can read many', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true
            }
        })

        console.log(customers)
    });
})