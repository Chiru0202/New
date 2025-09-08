import { useEffect, useState } from "react";

export default function Admissions() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", dob: "", email: "", course: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/admissions")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/admissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admissions</h1>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="date" onChange={e => setForm({ ...form, dob: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Course" onChange={e => setForm({ ...form, course: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2">Add Student</button>
      </form>

      <ul className="mt-4">
        {students.map(s => (
          <li key={s.id}>{s.name} - {s.course}</li>
        ))}
      </ul>
    </div>
  );
}
