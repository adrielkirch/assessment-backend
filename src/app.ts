import express, { Express } from "express";
import { TaskRouter } from "./routes/task.router";
import { CommentRouter } from "./routes/comment.router";
import cors from "cors";
import { UserRouter } from "./routes/user.router";
import bodyParser from "body-parser";
import authMiddleware from "./middleware/middleware.auth";
export class Application {
  public express: Express;

  public init(): Promise<void> {
    return new Promise((resolve, _reject) => {
      const taskRouter: TaskRouter = new TaskRouter();
      const commentRouter: CommentRouter = new CommentRouter();
      const userRouter: UserRouter = new UserRouter();
      this.express = express();
      this.express.use(cors());

      this.express.use(bodyParser.json());
      this.express.use("/users", userRouter.createRoutes());
      this.express.use("/tasks", 
      // authMiddleware, 
      taskRouter.createRoutes());
      this.express.use(
        "/comments",
        // authMiddleware,
        commentRouter.createRoutes()
      );

      resolve();
    });
  }
}
