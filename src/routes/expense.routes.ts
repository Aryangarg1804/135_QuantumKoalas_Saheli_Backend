import express from "express";
// import { getExpenses, addExpense, deleteExpense } from "../controllers/expense.controller";
import { getExpenses, addExpense, deleteExpense } from "../controllers/expense.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", authMiddleware, getExpenses);
router.post("/", authMiddleware, addExpense);
router.delete("/:id", authMiddleware, deleteExpense);

export default router;