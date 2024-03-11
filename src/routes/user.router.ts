import express, { Request, Response, Router } from "express";
import { UserService } from "../service/user.service";
import { User } from "../model/user";
import { validateAuth } from "../validator/user.validator";

/**
 * Router for handling User auth operations.
 */
export class UserRouter {
  public createRoutes(): Router {
    const router = express.Router();

     /**
     * Public Route for user signup.
     * @param {Request<any, any, User>} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
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
    
      /**
     * Route for user login.
     * @param {Request<any, any, User>} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Promise<void>} - Promise representing the completion of the operation.
     */
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
