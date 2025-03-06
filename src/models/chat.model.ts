import mongoose, { Schema, Document } from "mongoose";

export interface IChat extends Document {
  sender: string;
  message: string;
}

const ChatSchema: Schema = new Schema(
  {
    sender: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IChat>("Chat", ChatSchema);