import {prismaClient} from "../src/prisma-client.js";
import * as constants from "node:constants";

describe('Prisma Client', () => {
    it('should can find many to many relation', async () => {
        const like = await prismaClient.like.find({
            data: {
                customer_id: "1",
                product_id: "P0001"
            },
            include: {
                customer: true,
                product: true
            }
        })

        console.log(like)
    });

    it('should be able to select many', async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                id: "1"
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.log(JSON.stringify(customer))
    });

    it('should can find many with many to many relation', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        product: {
                            name: {
                                contains: "A"
                            }
                        }
                    }
                }
            },
            include: {
                likes: {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.log(JSON.stringify(customers))
    });

    it('should be able find implicit many to many', async () => {
        const customer = await prismaClient.customer.update({
            where: {
                id: "1"
            },
            data: {
                loves: {
                    connect: [
                        {id: "P0001"},
                        {id: "P0002"}
                    ]
                }
            },
            include: {
                loves: true
            }
        });

        console.log(JSON.stringify(customer))
    });

    it('should be able find implicit many to many', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                loves: {
                    some: {
                        name: {
                            contains: "A"
                        }
                    }
                }
            },
            include: {
                loves: true
            }
        });

        console.log(JSON.stringify(customers))
    });
})

