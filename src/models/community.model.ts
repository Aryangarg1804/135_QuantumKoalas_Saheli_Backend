import mongoose, { Schema, Document } from "mongoose";

export interface ICommunityPost extends Document {
  user: string;
  message: string;
}

const CommunitySchema: Schema = new Schema(
  {
    user: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICommunityPost>("Community", CommunitySchema);