import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";

jest.mock("../src/user-repository.js")

const repository = new UserRepository()
const service = new UserService(repository)

test("mock class save", () => {
    const user = {id: 1, name: "Rafee"}
    service.save(user)
    expect(repository.save).toHaveBeenCalledWith(user)
});

test("test mock class findById", () => {
    const user = {id: 1, name: "Rafee"}
    repository.findById.mockReturnValueOnce(user)

    const result = service.findById(1)

    expect(repository.findById).toHaveBeenCalledWith(1)
    expect(result).toBe(user)
});

test("test mock class findAll", () => {
    const users = [
        {id: 1, name: "Rafee"},
        {id: 2, name: "Joni"},
    ]
    repository.findAll.mockReturnValueOnce(users)

    const result = service.findAll()

    expect(repository.findAll).toHaveBeenCalled()
    expect(result).toBe(users)
})