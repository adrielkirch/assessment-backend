import { Comment } from "../model/comment";
import { CommentRepository } from "../repository/comment.repository";
import { TaskRepository } from "../repository/task.repository";

export class CommentService {
  public static async createOne(comment: Comment): Promise<Comment> {
    const exist = await TaskRepository.readOne(comment.taskId);
    if (!exist) {
      throw new Error("Task not found");
    }
    return await CommentRepository.createOne(comment);
  }

  public static async updateOne(comment: Comment): Promise<Comment> {
    const exist = await this.readOne(comment.id);
    if (!exist) {
      throw new Error("Comment not found");
    }
    return await CommentRepository.updateOne(comment);
  }

  public static async readAllByTaskId(taskId: string): Promise<Comment[]> {
    return await CommentRepository.readAll(taskId);
  }

  public static async readOne(id: string): Promise<Comment> {
    return await CommentRepository.readOne(id);
  }

  public static async deleteOne(id: string): Promise<any> {
    const exist = await this.readOne(id);
    if (!exist) {
      throw new Error("Comment not found");
    }
    await CommentRepository.deleteOne(id);
    return {
      id: id,
    };
  }
}
