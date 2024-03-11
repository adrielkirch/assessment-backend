import { Comment } from "../model/comment";
import express, { NextFunction, Request, Response } from "express";
import mongoose from 'mongoose';
export function validateAddComment(
  req: Request<Comment>,
  res: Response,
  next: NextFunction
) {
  const requestBody: Comment = req.body;
  if (
    !(
      requestBody &&
      typeof requestBody === "object" &&
      "text" in requestBody &&
      "taskId" in requestBody 
    )
  ) {
    return res.status(400).json({ error: "Invalid request body" }).end();
  }
  next();
}

export function validateUpdateComment(
  req: Request<Comment>,
  res: Response,
  next: NextFunction
) {
  const requestBody: Comment = req.body;
  if (
    !(
      requestBody &&
      typeof requestBody === "object" &&
      "text" in requestBody &&
      "taskId" in requestBody &&
      "_id" in requestBody
    )
  ) {
    return res.status(400).json({ error: "Invalid request body" }).end();
  }
  next();
}