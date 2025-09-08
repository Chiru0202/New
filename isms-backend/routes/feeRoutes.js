import express from "express";
import pool from "../utils/db.js";

const router = express.Router();

// Get all fees
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM fees");
  res.json(rows);
});

// Pay fee
router.post("/", async (req, res) => {
  const { student_id, amount } = req.body;
  await pool.query("INSERT INTO fees (student_id, amount, status) VALUES (?,?, 'PAID')",
    [student_id, amount]);
  res.json({ message: "Fee paid!" });
});

export default router;
