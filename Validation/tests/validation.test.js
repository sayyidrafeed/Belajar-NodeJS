import Joi from "joi";

describe("Joi", () => {
    it('should be able to validate', async () => {
        const schema = Joi.string().min(3).max(10).required();

        const request = "Rafee";

        const result = schema.validate(request);
        if (result.error) {
            throw new Error("Validation failed");
        } else {
            expect(result.value).toBe(request);
        }
    });

    it("should can validate data type", () => {
        const usernameSchema = Joi.string().email().required();
        const isAdminSchema = Joi.boolean().required();
        const priceSchema = Joi.number().required().min(1000).max(100000);

        const resultUsername = usernameSchema.validate("Rafee");
        console.log(resultUsername);

        const resultIsAdmin = isAdminSchema.validate("true");
        console.log(resultIsAdmin);

        const resultPrice = priceSchema.validate(500);
        console.log(resultPrice);
    });

    it('should can validate object', () => {
        const loginSchema = Joi.object({
            username: Joi.string().alphanum().email().min(3).max(30).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            isAdmin: Joi.boolean().required()
        })

        const request = {
            username: "Rafee123",
            password: "password123",
            isAdmin: true
        }

        const result = loginSchema.validate(request, {abortEarly: false});
        if (result.error) {
            result.error.details.forEach((detail) => {
                console.log(`Validation error at ${detail.path} : ${detail.message}`);
            });
        } else {
            expect(result.value).toEqual(request);
        }
    });

    it('should can validate nested object', () => {
        const createUserSchema = Joi.object({
            username: Joi.string().alphanum().email().min(3).max(30).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            profile: Joi.object({
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                age: Joi.number().min(0).required()
            }).required()
        });

        const request = {};

        const result = createUserSchema.validate(request, {abortEarly: false});

        console.log(result);
    });

    it('should can validate array', () => {
        const hobbiesSchema = Joi.array().items(
            Joi.string().required().min(3).max(100)
        ).min(1).unique();

        const hobbies = ["Reading", "Traveling", "Reading"];

        const result = hobbiesSchema.validate(hobbies, {abortEarly: false});

        console.log(result);
    });

    it('should can validate object', () => {
        const orderItemsSchema = Joi.array().items(
            Joi.object({
                productId: Joi.string().alphanum().required(),
                quantity: Joi.number().min(1).required()
            })
        ).min(1).required();

        const request = [
            {
                productId: "prod123",
                quantity: 2
            },
            {
                productId: "prod456",
                quantity: 0
            }
        ];

        const result = orderItemsSchema.validate(request, {abortEarly: false});

        console.log(result);
    });
})