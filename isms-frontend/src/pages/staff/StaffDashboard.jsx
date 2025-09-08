import { Link } from 'react-router-dom'

export default function StaffDashboard(){
  const tiles = [
    { to:'/staff/admissions-verify', title:'Admissions Verification', desc:'Verify documents & approve' },
    { to:'/staff/fee-management', title:'Fee Management', desc:'Track collections & offline receipts' },
    { to:'/staff/hostel-allocation', title:'Hostel Allocation', desc:'Assign rooms & manage occupancy' },
    { to:'/staff/exam-records', title:'Exam Records', desc:'Upload marks & attendance' },
  ]
  return (
    <div className="page">
      <h1 className="title">Staff Dashboard</h1>
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