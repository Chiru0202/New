import pool from "../config/db.js";

export const getAllExams = async () => {
  const result = await pool.query("SELECT * FROM exams ORDER BY id ASC");
  return result.rows;
};

export const addExam = async (student_id, subject, marks, exam_date) => {
  const result = await pool.query(
    "INSERT INTO exams (student_id, subject, marks, exam_date) VALUES ($1, $2, $3, $4) RETURNING *",
    [student_id, subject, marks, exam_date]
  );
  return result.rows[0];
};
