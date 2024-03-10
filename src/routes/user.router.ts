import express, { Request, Response, Router } from "express";
import { UserService } from "../service/user.service";
import { User } from "../model/user";
import { validateAuth } from "../validator/user.validator";

export class UserRouter {
  public createRoutes(): Router {
    const router = express.Router();

    router.post(
      "/signup",
      [validateAuth],
      async (req: Request<any, any, User>, res: Response) => { 
        try {
          const requestBody: User = req.body;
          const result = await UserService.createOne(requestBody);
          res.status(200).json(result).end();
        } catch (error) {
          console.error("Internal server error:", error);
          res.status(500).json({ error: "Internal server error" }).end();
        }
      }
    );

    router.post(
      "/login",
      [validateAuth],
      async (req: Request<any, any, User>, res: Response) => { 
        try {
          const requestBody: User = req.body;
          const result = await UserService.loginOne(requestBody);
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
