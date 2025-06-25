import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    role: { type: String, required: true },
    collegeName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

const Waitlist = mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;
