// import express from "express";
// import { getMessages, sendMessage } from "../controllers/chat.controller";
// import authMiddleware from "../middlewares/auth.middleware";

// const router = express.Router();

// router.get("/:chatId", authMiddleware, getMessages);
// router.post("/", authMiddleware, sendMessage);

// export default router;
import express from "express";
import { getMessages, sendMessage } from "../controllers/chat.controller";
import { authMiddleware } from "../middlewares/auth.middleware"; // Ensure this path is correct

const router = express.Router();

// Get messages for a specific chat
router.get("/:chatId", authMiddleware, getMessages);

// Send a new message
router.post("/", authMiddleware, sendMessage);

export default router;