import { model, models, Schema } from "mongoose";

const AuthActivitySchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },
    eventType: {
      type: String,
      required: true,
      index: true,
    },
    sessionId: {
      type: String,
    },
    occurredAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  { timestamps: true }
);

export const AuthActivity =
  models.AuthActivity || model("AuthActivity", AuthActivitySchema);
