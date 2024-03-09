import express, { NextFunction, Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { CommentService } from "../service/comment.service";
import { Comment } from "../model/comment";
import {
  validateAddComment,
  validateUpdateComment,
} from "../validator/comment.validator";

export class CommentRouter {
  public createRoutes(): Router {
    const router = express.Router();

    router.get(
      "/",
      async (_req: Request, res: Response, _next: NextFunction) => {
        try {
          const result = await CommentService.readAll();
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.get(
      "/read-one",
      async (req: Request, res: Response, _next: NextFunction) => {
        try {
          const id: string = req.query.id as string;
          const result = await CommentService.readOne(id);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.post(
      "/",
      [validateAddComment],
      async (req: Request<Comment>, res: Response, _next: NextFunction) => {
        try {
          const requestBody: Comment = req.body;
          const result = CommentService.createOne(requestBody)
          res.status(200).json(result).end();
        }  catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
         
      }
    );

    router.put(
      "/",
      [validateUpdateComment],
      async (req: Request<Comment>, res: Response, _next: NextFunction) => {
        try {
          const requestBody: Comment = req.body;
          const result = await CommentService.updateOne(requestBody);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.delete(
      "/",
      async (req: Request, res: Response, _next: NextFunction) => {
        try {
          const id: string = req.query.id as string;
          const result = await CommentService.deleteOne(id);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    return router;
  }
}
