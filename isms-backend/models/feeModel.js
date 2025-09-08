import pool from "../config/db.js";

export const getAllFees = async () => {
  const result = await pool.query("SELECT * FROM fees ORDER BY id ASC");
  return result.rows;
};

export const addFee = async (student_id, amount) => {
  const result = await pool.query(
    "INSERT INTO fees (student_id, amount) VALUES ($1, $2) RETURNING *",
    [student_id, amount]
  );
  return result.rows[0];
};
