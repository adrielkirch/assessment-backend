import express, { NextFunction, Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { TaskService } from "../service/task.service";
import { Task } from "../model/task";
import { validateAddTask,validateUpdateTask } from "../validator/task.validator";
export class TaskRouter {
  public createRoutes(): Router {
    const router = express.Router();

    router.get(
      "/",
      async (_req: Request, res: Response) => {
        try {
          const result = await TaskService.readAll();
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.get(
      "/read-one",
      async (req: Request, res: Response) => {
        try {
          const id: string = req.query.id as string; 
          const result = await TaskService.readOne(id);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.post(
      "/",
      [validateAddTask],
      async (req: Request<Task>, res: Response) => {
        try {
          const requestBody: Task = req.body;
          const result = await TaskService.createOne(requestBody);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.put(
      "/",
      [validateUpdateTask],
      async (req: Request<Task>, res: Response) => {
        try {
          const requestBody: Task = req.body;
          const result = await TaskService.updateOne(requestBody);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );


    router.delete(
      "/",
      async (req: Request, res: Response) => {
        try {
          const id: string = req.query.id as string; 
          const result = await TaskService.deleteOne(id);
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
