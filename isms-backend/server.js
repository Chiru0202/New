import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import feeRoutes from "./routes/feeRoutes.js";
import hostelRoutes from "./routes/hostelRoutes.js";
import examRoutes from "./routes/examRoutes.js";

dotenv.config();
const app = express();

// Updated CORS configuration for Cloud Workstations development
const corsOptions = {
  origin: "*", // Allow all origins for development
  credentials: true, // Allow cookies and authorization headers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/hostel", hostelRoutes);
app.use("/api/exams", examRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
