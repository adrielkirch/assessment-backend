import { Task } from "../model/task";
import express, { NextFunction, Request, Response } from "express";

export function validateAuth(
  req: Request<Task>,
  res: Response,
  next: NextFunction
) {
  const requestBody: Task = req.body;
  if (
    !(
      requestBody &&
      typeof requestBody === "object" &&
      "email" in requestBody &&
      "password" in requestBody 
    )
  ) {
    return res.status(400).json({ error: "Invalid request body" }).end();
  }
  next();
}

