import { getAllFees, addFee } from "../models/feeModel.js";

export const fetchFees = async (req, res) => {
  try {
    const fees = await getAllFees();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createFee = async (req, res) => {
  const { student_id, amount } = req.body;
  try {
    const fee = await addFee(student_id, amount);
    res.json(fee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
