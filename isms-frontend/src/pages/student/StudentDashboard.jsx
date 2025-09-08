import { Link } from 'react-router-dom'

export default function StudentDashboard(){
  const tiles = [
    { to:'/student/admissions', title:'Admissions', desc:'Apply / track status' },
    { to:'/student/fees', title:'Fees', desc:'Pay fees & receipts' },
    { to:'/student/hostel', title:'Hostel', desc:'Request room & status' },
    { to:'/student/exams', title:'Exams', desc:'Hall ticket & results' },
    { to:'/student/library', title:'Library', desc:'Loans & fines' },
  ]
  return (
    <div className="page">
      <h1 className="title">Student Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiles.map(t => (
          <Link key={t.to} to={t.to} className="card hover:shadow-md transition">
            <div className="text-lg font-semibold">{t.title}</div>
            <p className="text-gray-600">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}