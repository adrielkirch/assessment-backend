import express, { Express } from "express";
import { TaskRouter } from "./routes/task.router";
import { CommentRouter } from "./routes/comment.router";
import bodyParser from 'body-parser';
export class Application {
  public express: Express;

  public init(): Promise<void> {
    return new Promise((resolve, _reject) => {
      const taskRouter: TaskRouter = new TaskRouter();
      const commentRouter: CommentRouter = new CommentRouter();
      this.express = express();
      
      this.express.use(bodyParser.json());
      this.express.use("/tasks", taskRouter.createRoutes());
      this.express.use("/comments", commentRouter.createRoutes());
      resolve();
    });
  }
}
