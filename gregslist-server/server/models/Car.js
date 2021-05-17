import mongoose from "mongoose";

const Car = new mongoose.Schema(
  {
    model: { type: String, required: true },
    make: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String, default: "No description" },
  },
  { timestamps: true, toJSON: { vrituals: true } }
);

export default Car;
