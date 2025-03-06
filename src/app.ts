import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "*", // Allow all origins (change this in production)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies (optional)
  })
);

app.use(express.json());

export default app;