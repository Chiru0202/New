import pool from "../config/db.js";

export const getAllHostelAllocations = async () => {
  const result = await pool.query("SELECT * FROM hostel ORDER BY id ASC");
  return result.rows;
};

export const addHostelAllocation = async (student_id, room_number) => {
  const result = await pool.query(
    "INSERT INTO hostel (student_id, room_number) VALUES ($1, $2) RETURNING *",
    [student_id, room_number]
  );
  return result.rows[0];
};
