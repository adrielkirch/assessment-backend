import TaskModel, { Task } from "../model/task";

export class TaskRepository {
  public static async createOne(task: Task): Promise<Task> {
    const taskEntity = await TaskModel.create(task);
    return taskEntity;
  }
  public static async updateOne(task: Task): Promise<Task> {
    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: task._id },
      task,
      { new: true }
    );
    return updatedTask;
  }
  public static async readAll(): Promise<Task[]> {
    return await TaskModel.find().sort({ createdAt: -1 });
  }

  public static async readOne(id: string): Promise<Task> {
    return await TaskModel.findById(id);
  }
  public static async deleteOne(id: string): Promise<void> {
    await TaskModel.deleteOne({ _id: id });
  }
}
