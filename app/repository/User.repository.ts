import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User.model";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public bulkCreate(Users: User[]): Promise<any> {
        return this.manager.createQueryBuilder().insert().into(User).values(Users).execute();
    }

    public async removeById(id: number): Promise<User> {
        const itemToRemove: User = await this.findOne({id});
        return this.manager.remove(itemToRemove);
    }

    public findByUsername(username: string): Promise<User> {
        return this.manager.findOne(User, {where: {username}});
    }

    public findOneById(id: number): Promise<User> {
        return this.manager.findOne(User, {where: {id}});
    }
}
