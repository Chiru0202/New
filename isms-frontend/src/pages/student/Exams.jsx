export default function Exams(){
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Examinations</h1>
        <ul className="list-disc ml-6 space-y-1">
          <li>Download Hall Ticket</li>
          <li>View Results (GPA/CGPA)</li>
          <li>Download Transcript</li>
        </ul>
        <p className="text-gray-500 mt-2">Connect to backend endpoints / Sheets to render real data.</p>
      </div>
    </div>
  )
}