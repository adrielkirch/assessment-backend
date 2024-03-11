import { Task } from "../model/task";
import express, { NextFunction, Request, Response } from "express";

export function validateAddTask(
  req: Request<Task>,
  res: Response,
  next: NextFunction
) {
  const requestBody: Task = req.body;
  if (
    !(
      requestBody &&
      typeof requestBody === "object" &&
      "title" in requestBody &&
      "text" in requestBody &&
      "status" in requestBody
    )
  ) {
    return res.status(400).json({ error: "Invalid request body" }).end();
  }
  next();
}

export function validateUpdateTask(
  req: Request<Task>,
  res: Response,
  next: NextFunction
) {
  const requestBody: Task = req.body;
  if (
    !(
      requestBody &&
      typeof requestBody === "object" &&
      "title" in requestBody &&
      "text" in requestBody &&
      "status" in requestBody &&
      "_id" in requestBody
    )
  ) {
    return res.status(400).json({ error: "Invalid request body" }).end();
  }
  next();
}
