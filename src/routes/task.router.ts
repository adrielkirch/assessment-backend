import express, { Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { TaskService } from "../service/task.service";
import { Task } from "../model/task";
import { validateAddTask, validateUpdateTask } from "../validator/task.validator";

/**
 * Router for handling Task CRUD operations.
 */
export class TaskRouter {
  /**
   * Creates routes for Task CRUD operations.
   * @returns {Router} Express router containing Task routes.
   */
  public createRoutes(): Router {
    const router = express.Router();

    /**
     * Route: GET /tasks
     * Description: Retrieves all tasks.
     * @param {Request} _req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.get("/", async (_req: Request, res: Response) => {
      try {
        const result = await TaskService.readAll();
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: GET /tasks/read-one
     * Description: Retrieves a single task by ID.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.get("/read-one", async (req: Request, res: Response) => {
      try {
        const id: string = req.query.id as string;
        const result = await TaskService.readOne(id);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: POST /tasks
     * Description: Creates a new task.
     * @param {Request<Task>} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.post("/", [validateAddTask], async (req: Request<Task>, res: Response) => {
      try {
        const requestBody: Task = req.body;
        const result = await TaskService.createOne(requestBody);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: PUT /tasks
     * Description: Updates an existing task.
     * @param {Request<Task>} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.put("/", [validateUpdateTask], async (req: Request<Task>, res: Response) => {
      try {
        const requestBody: Task = req.body;
        const result = await TaskService.updateOne(requestBody);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: DELETE /tasks
     * Description: Deletes a task by ID.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.delete("/", async (req: Request, res: Response) => {
      try {
        const id: string = req.query.id as string;
        const result = await TaskService.deleteOne(id);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    return router;
  }
}
