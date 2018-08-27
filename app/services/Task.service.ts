import { getCustomRepository } from "typeorm";
import { Task } from "../models/Task.model";
import { TaskRepository } from "../repository/Task.repository";

export class TaskService {
    public static FindByAssigned(username: string): Promise<Task> {
        return getCustomRepository(TaskRepository).findByAssigned(username);
    }

    public static BulkCreate(Tasks: Task[]): Promise<Task[]> {
        return getCustomRepository(TaskRepository).bulkCreate(Tasks);
    }

    public static FindOneById(id: number): Promise<Task> {
        return getCustomRepository(TaskRepository).findOneById(id);
    }

    public static Find(): Promise<Task[]> {
        return getCustomRepository(TaskRepository).find();
    }

    public static Remove(task: Task): Promise<Task> {
        return getCustomRepository(TaskRepository).remove(task);
    }

    public static RemoveById(id: number): Promise<Task> {
        return getCustomRepository(TaskRepository).removeById(id);
    }

    public static Save(task: Task): Promise<Task> {
        return getCustomRepository(TaskRepository).save(task);
    }
}
