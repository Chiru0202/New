import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/login/Signup.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import Admissions from "./pages/student/Admissions.jsx";
import Fees from "./pages/student/Fees.jsx";
import Hostel from "./pages/student/Hostel.jsx";
import Exams from "./pages/student/Exams.jsx";
import Library from "./pages/student/Library.jsx";
import StaffDashboard from "./pages/staff/StaffDashboard.jsx";
import AdmissionsVerify from "./pages/staff/AdmissionsVerify.jsx";
import FeeManagement from "./pages/staff/FeeManagement.jsx";
import HostelAllocation from "./pages/staff/HostelAllocation.jsx";
import ExamRecords from "./pages/staff/ExamRecords.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import Users from "./pages/admin/Users.jsx";
import Reports from "./pages/admin/Reports.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Example: redirect to student dashboard after login
    const role = localStorage.getItem("role"); // assuming role is stored
    if (role === "student") navigate("/student");
    else if (role === "staff") navigate("/staff");
    else if (role === "admin") navigate("/admin");
    else navigate("/login");
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Student routes */}
        <Route element={<ProtectedRoute roles={["student"]} />}>
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/admissions" element={<Admissions />} />
          <Route path="/student/fees" element={<Fees />} />
          <Route path="/student/hostel" element={<Hostel />} />
          <Route path="/student/exams" element={<Exams />} />
          <Route path="/student/library" element={<Library />} />
        </Route>

        {/* Staff routes */}
        <Route element={<ProtectedRoute roles={["staff"]} />}>
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/staff/admissions-verify" element={<AdmissionsVerify />} />
          <Route path="/staff/fee-management" element={<FeeManagement />} />
          <Route path="/staff/hostel-allocation" element={<HostelAllocation />} />
          <Route path="/staff/exam-records" element={<ExamRecords />} />
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRoute roles={["admin"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="page">
              <div className="card">
                <h1 className="title">404</h1>
                <p>Page Not Found</p>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
