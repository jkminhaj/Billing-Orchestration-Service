import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true
    },

    stripeSubscriptionId: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["pending", "active", "canceled", "past_due"],
      default: "pending"
    },

    currentPeriodStart: {
      type: Date
    },

    currentPeriodEnd: {
      type: Date
    }
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", subscriptionSchema);
