// backend/routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/db.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; // Use secure secret in .env for production

// Helper: validate username and password with trimming
function validateCredentials(username, password) {
  if (
    typeof username !== "string" || username.trim().length < 3 ||
    typeof password !== "string" || password.length < 6
  ) {
    return false;
  }
  return true;
}

// SIGNUP
router.post("/signup", async (req, res) => {
  let { username, password, role } = req.body;

  username = username?.trim();
  role = role?.trim();

  if (!validateCredentials(username, password)) {
    return res.status(400).json({ error: "Invalid username or password format" });
  }

  try {
    // Check if username already exists
    const userExists = await pool.query("SELECT 1 FROM users WHERE username = $1", [username]);
    if (userExists.rows.length > 0) {
      return res.status(409).json({ error: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (username, password, role) VALUES ($1, $2, $3)",
      [username, hashedPassword, role || "student"]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed due to server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  username = username?.trim();

  if (!validateCredentials(username, password)) {
    return res.status(400).json({ error: "Invalid username or password format" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed due to server error" });
  }
});

export default router;
