import { Document } from "mongoose";

export interface Comment {
  id?: string; 
  text: string; 
  email: string;
  createdAt:string; 
}

export type CommentEntity = Comment & Document;
