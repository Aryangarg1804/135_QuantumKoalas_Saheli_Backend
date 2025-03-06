// import mongoose, { Schema, Document } from "mongoose";

// export interface ICourse extends Document {
//   title: string;
//   description: string;
// }

// const CourseSchema: Schema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model<ICourse>("Course", CourseSchema);

import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;