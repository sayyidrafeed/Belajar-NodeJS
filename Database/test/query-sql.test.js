import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to execute raw SQL", async () => {
        const id = "1";

        const impacted = await prismaClient.$queryRaw`SELECT *
                                                      FROM sample
                                                      WHERE id = ${id};`;

        for (const impactedElement of impacted) {
            console.log(impactedElement);
        }
    })

    it("should be able to create customer", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "1",
                name: "Rafee",
                email: "myemailsaya@gmail.com",
                phone: "08123456789"
            }
        })

        console.log(customer);
        expect(customer.id).toBe("1");
        expect(customer.name).toBe("Rafee");
        expect(customer.email).toBe("myemailsaya@gmail.com")
        expect(customer.phone).toBe("08123456789")
    })

    it("should be able to update customer", async () => {
        const customer = await prismaClient.customer.update({
            where: {
                id: "1"
            },
            data: {
                name: "Rafee Djamil"
            }
        })

        console.log(customer);
        expect(customer.name).toBe("Rafee Djamil");
    })

    it("should be able to read customer", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "1"
            }
        })

        console.log(customer);
        expect(customer.name).toBe("Rafee Djamil");
    })
})