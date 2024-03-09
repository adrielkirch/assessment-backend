import express, { NextFunction, Request, Response } from "express";
import { Router } from "express-serve-static-core";

export class TaskRouter {

    public createRoutes(): Router {
        const router = express.Router();

        router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
          res.status(200).json([
            {
              id: '1',
              title: 'Task1',
              text: 'Lorem ipsum',
              status: 'TODO',
              createdAt: new Date('2024-02-28')
            },
            {
              id: '2',
              title: 'Task2',
              text: 'sit dolor',
              status: 'DONE',
              createdAt: new Date('2024-02-29')
            }
          ]).end();
        });

        return router;
    }
}
