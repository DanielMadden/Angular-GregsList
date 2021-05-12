import mongoose from "mongoose";

const Job = new mongoose.Schema(
  {
    wage: { type: Number, required: true },
    company: { type: String, required: true },
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
