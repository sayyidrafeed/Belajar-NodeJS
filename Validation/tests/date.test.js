import Joi from "joi";

describe("Joi", () => {
    it('should can validate date', () => {
        const birthdateSchema = Joi.date().less('2005-01-01').required();

        const resultValidDate = birthdateSchema.validate('2000-05-15');
        expect(resultValidDate.error).toBeUndefined();


        const resultInvalidDate = birthdateSchema.validate('2010-03-22');
        expect(resultInvalidDate.error).toBeDefined();
    })
})