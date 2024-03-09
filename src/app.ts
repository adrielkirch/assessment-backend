import express, { Express } from 'express';
import { TaskRouter } from './task.router';

export class Application {
  public express: Express;

  public init(): Promise<void> {
    return new Promise((resolve, _reject) => {
      const taskRouter: TaskRouter = new TaskRouter();
      this.express = express();

      this.express.use('/tasks', taskRouter.createRoutes());
      resolve();
    })
  }
}
