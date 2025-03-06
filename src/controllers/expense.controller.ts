// import { Request, Response } from "express";
// import Expense from "../models/expense.model";

// export const addExpense = async (req: Request, res: Response) => {
//   try {
//     const { amount, category, date } = req.body;
//     const newExpense = new Expense({ amount, category, date });

//     await newExpense.save();
//     res.status(201).json({ message: "Expense added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// export const getExpenses = async (req: Request, res: Response) => {
//   try {
//     const expenses = await Expense.find();
//     res.json(expenses);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };




import { Request, Response } from "express";
import Expense from "../models/expense.model";
import mongoose from "mongoose";

// ✅ Add Expense
export const addExpense = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, amount } = req.body;

    if (!title || !amount) {
      // return res.status(400).json({ message: "Title and amount are required" });
    }

    const newExpense = new Expense({ title, amount });
    await newExpense.save();

    // return res.status(201).json({ message: "Expense added successfully", expense: newExpense });
  } catch (error) {
    // return res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Delete an Expense
export const deleteExpense = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      // return res.status(404).json({ message: "Expense not found" });
    }

    // return res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    // return res.status(500).json({ message: "Server error", error });
  }
};
// ✅ Get All Expenses
export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

