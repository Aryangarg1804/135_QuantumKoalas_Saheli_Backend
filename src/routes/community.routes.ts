// import express from "express";
// import { getCommunityPosts, createCommunityPost } from "../controllers/community.controller";
// import authMiddleware from "../middlewares/auth.middleware";

// const router = express.Router();

// router.get("/", getCommunityPosts);
// router.post("/", authMiddleware, createCommunityPost);

// export default router;



import express from "express";
import { getPosts, createPost } from "../controllers/community.controller"; // Correct function names
import  { authMiddleware } from "../middlewares/auth.middleware"; // Ensure this path is correct

const router = express.Router();

// Get all community posts (Public)
router.get("/", getPosts);

// Create a new post (Protected)
router.post("/", authMiddleware, createPost);

export default router;