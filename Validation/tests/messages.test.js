import Joi from "joi";

describe('Joi', () => {
    it('should can use custom message', () => {
        const schema = Joi.string().min(30).required().messages({
            'string.min': 'The value must be at least {#limit} characters long le!',
            'any.required': 'This field is required!'
        });

        const result = schema.validate('aduh', {abortEarly: false});
        if (result.error) {
            result.error.details.forEach((detail) => {
                console.log(`Validation error at ${detail.path} : ${detail.message}`);
            });
        }
    });
});