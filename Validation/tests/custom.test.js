import Joi from "joi";

describe("Joi", () => {
    it('should can create custom validation', () => {
        const registerSchema = Joi.object({
            username: Joi.string().min(3).max(30).required(),
            password: Joi.string().min(3).max(30).required().custom((value, helpers) => {
                if (value.toLowerCase() === 'password') {
                    return helpers.error('register.password.invalid');
                }
                return value;
            }).messages({
                'register.password.invalid': 'Password cannot be "password"'
            }),
            confirmPassword: Joi.string().min(3).max(30).required(),
        }).custom((value, helpers) => {
            if (value.password !== value.confirmPassword) {
                return helpers.error('register.password.different');
            }
            return value;
        }).messages({
            'register.password.different': 'Password and Confirm Password must be the same'
        })

        const request = {};
        const result = registerSchema.validate(request)
        console.log(result)
        expect(result.error).toBeDefined();
        expect(result.error.details[0].message).toBe('"username" is required');

        const result2 = registerSchema.validate({username: 'john', password: 'password', confirmPassword: 'password'});
        console.log(result2);
        expect(result2.error).toBeDefined();
        expect(result2.error.details[0].message).toBe('Password cannot be "password"');

        const result3 = registerSchema.validate({
            username: 'john',
            password: 'secret123',
            confirmPassword: 'secret321'
        });
        console.log(result3);
        expect(result3.error).toBeDefined();
        expect(result3.error.details[0].message).toBe('Password and Confirm Password must be the same');

        const result4 = registerSchema.validate({
            username: 'john',
            password: 'secret123',
            confirmPassword: 'secret123'
        });
        console.log(result4);
        expect(result4.error).toBeUndefined();
    });
})