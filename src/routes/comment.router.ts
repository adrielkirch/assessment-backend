import express, { Request, Response } from "express";
import { Router } from "express-serve-static-core";
import { CommentService } from "../service/comment.service";
import { Comment } from "../model/comment";
import {
  validateAddComment,
  validateUpdateComment,
} from "../validator/comment.validator";

/**
 * Router for handling Comment CRUD operations.
 */
export class CommentRouter {
  /**
   * Creates routes for Comment CRUD operations.
   * @returns {Router} Express router containing Comment routes.
   */
  public createRoutes(): Router {
    const router = express.Router();

    /**
     * Route: GET /comments/:taskId
     * Description: Retrieves all comments associated with a task.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.get("/:taskId", async (req: Request, res: Response) => {
      try {
        const taskId = req.params.taskId;
        const result = await CommentService.readAllByTaskId(taskId);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: GET /comments/read-one
     * Description: Retrieves a single comment by ID.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.get("/read-one", async (req: Request, res: Response) => {
      try {
        const id: string = req.query.id as string;
        const result = await CommentService.readOne(id);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: POST /comments
     * Description: Creates a new comment.
     * @param {Request<Comment>} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.post("/", [validateAddComment], async (req: Request<Comment>, res: Response) => {
      try {
        const requestBody: Comment = req.body;
        const result = await CommentService.createOne(requestBody);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: PUT /comments
     * Description: Updates an existing comment.
     * @param {Request<Comment>} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.put("/", [validateUpdateComment], async (req: Request<Comment>, res: Response) => {
      try {
        const requestBody: Comment = req.body;
        const result = await CommentService.updateOne(requestBody);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    /**
     * Route: DELETE /comments
     * Description: Deletes a comment by ID.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
    router.delete("/", async (req: Request, res: Response) => {
      try {
        const id: string = req.query.id as string;
        const result = await CommentService.deleteOne(id);
        res.status(200).json(result).end();
      } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" }).end();
      }
    });

    return router;
  }
}
