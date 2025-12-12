import {UserRepository} from "./user-repository.js";

export class UserService {

    constructor(userRepository) {
        if (userRepository) {
            this.userRepository = userRepository;
        } else {
            this.userRepository = new UserRepository();
        }
    }

    save(user) {
        return this.userRepository.save(user);
    }

    findById(userId) {
        return this.userRepository.findById(userId);
    }

    findAll() {
        return this.userRepository.findAll();
    }
}