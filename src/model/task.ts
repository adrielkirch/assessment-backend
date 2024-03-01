import { Document } from "mongoose";

export interface Task {
  title: string;
  text: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  createdAt: Date
  id?: string;
}

export type TaskEntity = Task & Document;