import express from "express";
import pool from "../utils/db.js";

const router = express.Router();

// Get exam records
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM exams");
  res.json(rows);
});

// Add exam record
router.post("/", async (req, res) => {
  const { student_id, subject, marks, grade } = req.body;
  await pool.query("INSERT INTO exams (student_id, subject, marks, grade) VALUES (?,?,?,?)",
    [student_id, subject, marks, grade]);
  res.json({ message: "Exam record added!" });
});

export default router;
