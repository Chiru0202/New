import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('isms_user')
    if(saved) setUser(JSON.parse(saved))
  }, [])

  const login = ({ role, id }) => {
    const u = { role, id }
    setUser(u)
    localStorage.setItem('isms_user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('isms_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}