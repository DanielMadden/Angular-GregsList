import mongoose from "mongoose";

const Car = new mongoose.Schema(
  {
    model: { type: String, required: true },
    make: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true, toJSON: { vrituals: true } }
);

export default Car;
