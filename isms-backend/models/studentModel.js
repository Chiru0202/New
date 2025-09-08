import pool from "../config/db.js";

export const getAllStudents = async () => {
  const result = await pool.query("SELECT * FROM students ORDER BY id ASC");
  return result.rows;
};

export const addStudent = async (name, email, course) => {
  const result = await pool.query(
    "INSERT INTO students (name, email, course) VALUES ($1, $2, $3) RETURNING *",
    [name, email, course]
  );
  return result.rows[0];
};
