import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function NavBar(){
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold">ISMS</Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600">Role: <b>{user.role}</b></span>
              <button className="btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}