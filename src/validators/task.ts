import { Task } from "../models/task";

export function validateAddTask(requestBody: Task) {
    return !(
      !requestBody ||
      typeof requestBody !== "object" ||
      !("title" in requestBody) ||
      !("text" in requestBody) ||
      !("status" in requestBody) 
    );
  }