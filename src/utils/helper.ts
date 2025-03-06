import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Hashes a plain text password using bcrypt.
 * @param password - The plain text password.
 * @returns The hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * Compares a plain text password with a hashed password.
 * @param password - The plain text password.
 * @param hashedPassword - The stored hashed password.
 * @returns Boolean indicating whether the password matches.
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * Generates a JSON Web Token (JWT) for authentication.
 * @param userId - The user ID for which the token is generated.
 * @returns A signed JWT token.
 */
export const generateToken = (userId: string): string => {
  const secretKey = process.env.JWT_SECRET || "default_secret"; // Ensure you set this in your .env file
  return jwt.sign({ id: userId }, secretKey, { expiresIn: "7d" });
};