import express, { NextFunction, Request, Response } from "express";
import { Router } from "express-serve-static-core";

export class CommentRouter {

    public createRoutes(): Router {
        const router = express.Router();

        router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
          res.status(200).json([
            {
              id: '1',
              text: "lorem ipsum",
              email: "test@test.com",
              createdAt: new Date('2024-02-29')
            },
            {
              id: '2',
              text: "lorem ipsum 2",
              email: "test2@test.com",
              createdAt: new Date('2024-02-28')
            }
          ]).end();
        });

        return router;
    }
}
