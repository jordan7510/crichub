import { model, models, Schema } from "mongoose"

const UserSchema = new Schema({
    clerkUserId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: String,
    email: {
        type: String,
        required: true,
        index: true
    },
    country: {
        type: String,
        default: "IND"
    },
    phone: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isRestricted: {
        type: Boolean,
        default: false,
    },
    lastSignInAt: Date,
},
    { timestamps: true }
)

export const User = models.User || model("User", UserSchema)