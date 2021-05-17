import mongoose from "mongoose";

const Job = new mongoose.Schema(
  {
    wage: { type: Number, required: true },
    company: { type: String, required: true },
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String, default: "No description" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
