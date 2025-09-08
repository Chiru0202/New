import express from "express";
import pool from "../utils/db.js";

const router = express.Router();

// Get hostel allocations
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM hostel");
  res.json(rows);
});

// Allocate room
router.post("/", async (req, res) => {
  const { student_id, room_no } = req.body;
  await pool.query("INSERT INTO hostel (student_id, room_no, status) VALUES (?,?, 'ALLOCATED')",
    [student_id, room_no]);
  res.json({ message: "Hostel allocated!" });
});

export default router;
