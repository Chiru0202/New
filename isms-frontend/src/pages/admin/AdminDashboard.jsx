import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', students: 40 },
  { month: 'Feb', students: 60 },
  { month: 'Mar', students: 80 },
];

export default function Dashboard() {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="students" stroke="#8884d8" />
    </LineChart>
  );
}
