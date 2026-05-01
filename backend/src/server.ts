import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db";

import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import githubRoutes from "./routes/githubRoutes";

dotenv.config();

const app = express();

// Middleware
const corsOptions = {
  origin: process.env.NODE_ENV === "production"
    ? (process.env.FRONTEND_URL || "https://your-vercel-domain.vercel.app")
    : true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Database Connection
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("DevPulse API Running 🚀");
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Server Running Successfully",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Profile Routes
app.use("/api/profile", profileRoutes);

// GitHub Routes
app.use("/api/github", githubRoutes);

// Server
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});