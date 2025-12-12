import {getAllProducts} from "../src/database.js";
import {ProductService} from "../src/product-service.js";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn(),
        getProductById: jest.fn()
    };
});