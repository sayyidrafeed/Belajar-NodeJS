import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to execute transaction", async () => {
        const [john, jane] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "2",
                    name: "John Doe",
                    email: "johndoe@gmail.com",
                    phone: "08987654321"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "3",
                    name: "Jane Smith",
                    email: "janesmith@gmail.com",
                    phone: "08765432109"
                }
            })
        ])

        console.log(john);
        console.log(jane);

        expect(john.id).toBe("2");
        expect(jane.id).toBe("3");
    })

    it("should be able to interactive transaction", async () => {
        const [john, jane] = await prismaClient.$transaction(async (prismaClient) => {
            const john = await prismaClient.customer.create({
                data: {
                    id: "2",
                    name: "John Doe",
                    email: "johndoe@gmail.com",
                    phone: "08987654321"
                }
            })
            const jane = await prismaClient.customer.create({
                data: {
                    id: "3",
                    name: "Jane Smith",
                    email: "janesmith@gmail.com",
                    phone: "08765432109"
                }
            })
            return [john, jane];
        })

        console.log(john);
        console.log(jane);

        expect(john.id).toBe("2");
        expect(jane.id).toBe("3");
    })
})