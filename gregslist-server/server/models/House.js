import mongoose from "mongoose";

const House = new mongoose.Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    city: { type: String, required: true },
    description: { type: String, default: "No description" },
    imgUrl: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export default House;
