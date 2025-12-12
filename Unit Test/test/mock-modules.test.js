import {ProductService} from "../src/product-service.js";
import {getAllProducts, getProductById} from "../src/database.js";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn(),
    };
});

test.failing("mock modules getProductById", () => {
    ProductService.findById(1);
})

test("mock modules getAllProducts", () => {
    getAllProducts.mockImplementationOnce((id) => {
        return [
            {id: 1, name: "Mocked Product 1", price: 100},
            {id: 2, name: "Mocked Product 2", price: 200},
        ]
    })

    const result = getAllProducts();

    expect(result).toEqual([
        {id: 1, name: "Mocked Product 1", price: 100},
        {id: 2, name: "Mocked Product 2", price: 200},
    ]);
});

