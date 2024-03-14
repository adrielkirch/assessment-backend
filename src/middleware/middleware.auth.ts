import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: string;
    }
  }
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY) as {
      user: string;
    };
    req.user = decodedToken.user;
    next();
  } catch (error) {
    return res.status(401).send("Invalid token, authorization denied");
  }
}

export default authMiddleware;
