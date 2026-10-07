import React, { useContext, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)

  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {

    // Admin login
    if (email === "admin@gmail.com" && password === "123") {

      setUser({ role: "Admin" })

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: "Admin" })
      )

      return
    }

    // Employee login
    if (authData) {

      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      ) 

      if (employee) {

        setUser({ role: "Employee" })
        setLoggedInUser(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: "Employee" })
        )

        return
      }
    }

    // Invalid login
    console.log("Invalid Credentials")
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user?.role === "Admin" && <AdminDashboard />}

      {user?.role === "Employee" && (
        <EmployeeDashboard data={loggedInUser} />
      )}
    </>
  )
}

export default App