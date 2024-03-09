import { Task } from "../model/task";
import { TaskRepository } from "../repository/task.repository";

export class TaskService {
  public static async createOne(task: Task): Promise<Task> {
    return await TaskRepository.createOne(task);
  }
  public static async updateOne(task: Task): Promise<Task> {
    const exist = this.readOne(task.id)
    if(!exist) {
      throw new Error("Task not found");
    }
    return await TaskRepository.updateOne(task);
  }
  public static async readAll(): Promise<Task[]> {
    return await TaskRepository.readAll();
  }
 
  public static async readOne(id: string): Promise<Task> {
    return await TaskRepository.readOne(id);
  }
  
  public static async deleteOne(id: string): Promise<any> {
    const exist = this.readOne(id)
    if(!exist) {
      throw new Error("Task not found");
    }
    await TaskRepository.deleteOne(id);
    return {
      id: id,
    };
  }
}
