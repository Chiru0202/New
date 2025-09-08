import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByUsername } from "../models/userModel.js";

export async function register(req, res) {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword, role);
    res.json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) return res.status(404).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.user_id, role: user.role },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
