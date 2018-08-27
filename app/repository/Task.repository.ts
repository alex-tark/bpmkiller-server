import { EntityRepository, Repository } from "typeorm";
import { Task } from "../models/Task.model";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    public bulkCreate(Tasks: Task[]): Promise<any> {
        return this.manager.createQueryBuilder().insert().into(Task).values(Tasks).execute();
    }

    public async removeById(id: number): Promise<Task> {
        const itemToRemove: Task = await this.findOne({id});
        return this.manager.remove(itemToRemove);
    }

    public findByAssigned(username: string): Promise<Task> {
        return this.manager.findOne(Task, {where: {assigned: username}});
    }

    public findOneById(id: number): Promise<Task> {
        return this.manager.findOne(Task, {where: {id}});
    }
}
