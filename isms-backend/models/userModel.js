import pool from "../utils/db.js";

export async function createUser(username, hashedPassword, role) {
  const result = await pool.query(
    "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *",
    [username, hashedPassword, role]
  );
  return result.rows[0];
}

export async function findUserByUsername(username) {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
  return result.rows[0];
}
