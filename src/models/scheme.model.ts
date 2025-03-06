// import mongoose, { Schema, Document } from "mongoose";

// export interface IScheme extends Document {
//   name: string;
//   benefits: string;
// }

// const SchemeSchema: Schema = new Schema(
//   {
//     name: { type: String, required: true },
//     benefits: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model<IScheme>("Scheme", SchemeSchema);




import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  eligibility: { type: String, required: true },
});

const Scheme = mongoose.model("Scheme", SchemeSchema);

export default Scheme;