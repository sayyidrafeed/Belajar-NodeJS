import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should be able query using aggregate', async () => {
        const result = await prismaClient.product.aggregate({
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            }
        })

        expect(result._min.price).toBe(1000);
        expect(result._max.price).toBe(5000);
        expect(result._avg.price).toBe(3000);
    });

    it('should be able query using group by', async () => {
        const result = await prismaClient.product.groupBy({
            by: ['category'],
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            }
        })

        for (const resultElement of result) {
            console.log(resultElement);
        }
    });

    it('should be able query using group by and having', async () => {
        const result = await prismaClient.product.groupBy({
            by: ['category'],
            _min: {
                price: true
            },
            _max: {
                price: true
            },
            _avg: {
                price: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 2500
                    }
                }
            }
        })

        for (const resultElement of result) {
            console.log(resultElement);
        }
    });
})