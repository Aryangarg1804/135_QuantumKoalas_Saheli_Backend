// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header("Authorization");

//   if (!token) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   try {
//     const secretKey = process.env.JWT_SECRET || "default_secret"; // Ensure you set this in your .env file
//     const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);
//     (req as any).user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid token." });
//   }
// };

// export default authMiddleware;

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface AuthRequest extends Request {
  user?: { id: string };
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization");
    if (!token) {
        res.status(401).json({ message: "Unauthorized - No token provided" });
        return;
      }
  try {
   
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; // Attach user info
    next(); // ✅ Call next() properly
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

export { authMiddleware, AuthRequest };