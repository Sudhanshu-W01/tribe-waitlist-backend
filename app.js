import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import waitlistRoutes from "./routes/waitlistRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  return res.send("API is running...");
});
app.use("/api/waitlist", waitlistRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
