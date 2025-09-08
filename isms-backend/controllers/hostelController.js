import { getAllHostelAllocations, addHostelAllocation } from "../models/hostelModel.js";

export const fetchHostelAllocations = async (req, res) => {
  try {
    const data = await getAllHostelAllocations();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createHostelAllocation = async (req, res) => {
  const { student_id, room_number } = req.body;
  try {
    const data = await addHostelAllocation(student_id, room_number);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
