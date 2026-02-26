import { model, models, Schema } from "mongoose"

const SubscriptionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    plan: {
        type: String,
        enum: ["monthly", "yearly"],
        required: true
    },
    status: {
        type: String,
        enum: ["active", "expired", "cancelled"],
        required: true
    },
    amount: Number,
    currency: String,
    startDate: Date,
    endDate: Date,
},
    { timestamps: true }
)

export const Subscription = models.Subscription || model("Subscription", SubscriptionSchema)