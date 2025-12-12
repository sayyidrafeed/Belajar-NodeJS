import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class findById", () => {
    const user = { id: 1, name: "Rafee" };
    const findByIdMock = jest.spyOn(repository, "findById");
    findByIdMock.mockReturnValueOnce(user);

    const result = service.findById(1);

    expect(result).toBe(user);
    expect(findByIdMock).toHaveBeenCalled();
    expect(findByIdMock).toHaveBeenCalledWith(1); // Memastikan findById dipanggil dengan argumen yang benar
});
