import { getAllExams, addExam } from "../models/examModel.js";

export const fetchExams = async (req, res) => {
  try {
    const exams = await getAllExams();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createExam = async (req, res) => {
  const { student_id, subject, marks, exam_date } = req.body;
  try {
    const exam = await addExam(student_id, subject, marks, exam_date);
    res.json(exam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
