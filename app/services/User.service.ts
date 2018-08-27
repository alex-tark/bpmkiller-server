import { getCustomRepository } from "typeorm";
import { User } from "../models/User.model";
import { UserRepository } from "../repository/User.repository";

export class UserService {
    public static FindByUsername(text: string): Promise<User> {
        return getCustomRepository(UserRepository).findByUsername(text);
    }

    public static BulkCreate(Users: User[]): Promise<User[]> {
        return getCustomRepository(UserRepository).bulkCreate(Users);
    }

    public static FindOneById(id: number): Promise<User> {
        return getCustomRepository(UserRepository).findOneById(id);
    }

    public static Find(): Promise<User[]> {
        return getCustomRepository(UserRepository).find();
    }

    public static Remove(sample: User): Promise<User> {
        return getCustomRepository(UserRepository).remove(sample);
    }

    public static RemoveById(id: number): Promise<User> {
        return getCustomRepository(UserRepository).removeById(id);
    }

    public static Save(sample: User): Promise<User> {
        return getCustomRepository(UserRepository).save(sample);
    }
}
