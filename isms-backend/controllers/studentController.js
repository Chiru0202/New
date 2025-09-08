import { getAllStudents, addStudent } from "../models/studentModel.js";

export const fetchStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createStudent = async (req, res) => {
  const { name, email, course } = req.body;
  try {
    const student = await addStudent(name, email, course);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
