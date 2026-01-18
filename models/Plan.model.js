import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    price: {
      type: Number,
      required: true
    },

    currency: {
      type: String,
      default: "usd"
    },

    interval: {
      type: String,
      enum: ["month", "year"],
      required: true
    },

    stripePriceId: {
      type: String,
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Plan", planSchema);
