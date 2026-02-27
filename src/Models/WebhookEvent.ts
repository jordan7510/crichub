import { model, models, Schema } from "mongoose";

const ClerkWebhookEventSchema = new Schema(
  {
    svixId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    type: {
      type: String,
      required: true,
      index: true,
    },
    processedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const ClerkWebhookEvent = models.ClerkWebhookEvent || model("ClerkWebhookEvent", ClerkWebhookEventSchema);
