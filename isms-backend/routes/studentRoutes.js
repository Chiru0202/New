import express from "express";
import pool from "../utils/db.js";

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM admissions");
  res.json(rows);
});

// Add student
router.post("/", async (req, res) => {
  const { name, dob, email, course } = req.body;
  await pool.query("INSERT INTO admissions (name, dob, email, course) VALUES (?,?,?,?)",
    [name, dob, email, course]);
  res.json({ message: "Student added!" });
});

export default router;
