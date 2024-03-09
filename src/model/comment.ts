import mongoose, { Schema, Document } from "mongoose";

export interface Comment extends Document {
  title: string;
  text: string;
  name:string;
  taskId: string;
  createdAt?: Date;
}

const CommentSchema = new Schema<Comment>({
  title: { type: String, required: true },
  text: { type: String, required: true },
  name: { type: String, required: true },
  taskId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);

export default CommentModel;
