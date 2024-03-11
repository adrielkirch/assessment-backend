import mongoose, { Schema, Document } from "mongoose";

export interface Comment extends Document {
  text: string;
  taskId: string;
  userId:string;
  createdAt?: Date;
}

const CommentSchema = new Schema<Comment>({
  text: { type: String, required: true },
  taskId: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);

export default CommentModel;
