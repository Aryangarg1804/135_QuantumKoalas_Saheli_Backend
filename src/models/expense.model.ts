import mongoose, { Schema, Document } from "mongoose";

export interface IExpense extends Document {
  amount: number;
  category: string;
  date: Date;
}

const ExpenseSchema: Schema = new Schema(
  {
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IExpense>("Expense", ExpenseSchema);