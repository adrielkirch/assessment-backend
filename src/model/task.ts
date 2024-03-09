import mongoose, { Schema, Document } from "mongoose";

export interface Task extends Document {
  title: string;
  text: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  createdAt?: Date;
}

const TaskSchema = new Schema<Task>({
  title: { type: String, required: true },
  text: { type: String, required: true },
  status: { type: String, enum: ['TODO', 'IN_PROGRESS', 'DONE'], required: true },
  createdAt: { type: Date, default: Date.now }
});

const TaskModel = mongoose.model<Task>("Task", TaskSchema);

export default TaskModel;
