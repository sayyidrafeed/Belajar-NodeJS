import Joi from "joi";

describe('Joi', () => {
    it('should return validation error', () => {
        const usernameSchema = Joi.string().alphanum().email().min(3).max(30).required();

        const result = usernameSchema.validate('ab', {abortEarly: false});
        if (result.error) {
            result.error.details.forEach((detail) => {
                console.log(`Validation error at ${detail.path} : ${detail.message}`);
            })
        }
    });
});