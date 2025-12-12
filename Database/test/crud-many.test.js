import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to create many", async () => {
        const {count} = await prismaClient.customer.createMany({
            data: [
                {
                    id: "4",
                    name: "Alice Johnson",
                    email: "alice@gmail.com",
                    phone: "0812344556789"
                },
                {
                    id: "5",
                    name: "Bob Brown",
                    email: "bob@gmail.com",
                    phone: "082345672890"
                }
            ]
        })

        expect(count).toBe(2)
    })

    it("should be able to update many", async () => {
        const {count} = await prismaClient.customer.updateMany({
            data: {
                name: "Guest"
            },
            where: {
                email: {
                    contains: '@gmail.com'
                }
            }
        })

        expect(count).toBe(5)
    })

    // Error
    // it("should be able to update", async () => {
    //     const {count} = await prismaClient.customer.update({
    //         data: {
    //             name: "Guest"
    //         },
    //         where: {
    //             email: {
    //                 in: ['1', '2', '3', '4', '5']
    //             }
    //         }
    //     })
    //
    //     expect(count).toBe(1)

    it("should be able to delete many", async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where: {
                email: {
                    contains: 'sayang'
                }
            }
        })

        expect(count).toBe(0)
    })

    it("should be able to read many", async () => {
        const customers = await prismaClient.customer.findMany({})

        console.table(customers);
        expect(customers.length).toBe(5)
    })
})