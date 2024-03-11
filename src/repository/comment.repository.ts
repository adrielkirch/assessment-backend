import CommentModel, { Comment } from "../model/comment";

export class CommentRepository {
  public static async createOne(task: Comment): Promise<Comment> {
    const taskEntity = await CommentModel.create(task);
    return taskEntity;
  }
  public static async updateOne(task: Comment): Promise<Comment> {
    const updatedComment = await CommentModel.findOneAndUpdate(
      { _id: task.id },
      task,
      { new: true }
    );
    return updatedComment;
  }
  public static async readAll(taskId: string): Promise<Comment[]> {
    return await CommentModel.find({ taskId }).sort({ createdAt: -1 });
  }

  public static async readOne(id: string): Promise<Comment> {
    return await CommentModel.findById(id);
  }
  public static async deleteOne(id: string): Promise<void> {
    await CommentModel.deleteOne({ _id: id });
  }
}
