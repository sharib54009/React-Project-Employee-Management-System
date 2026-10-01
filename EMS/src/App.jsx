import React, {useContext, useEffect, useState} from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import {setLocalStorage} from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
 
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
     const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
     setUser(loggedInUser.role)
    }

  }, [authData])
  

  const handleLogin = (email, password) => {
    if(email == "admin@gmail.com" && password == "123"){
      setUser({role: "Admin"})
      localStorage.setItem('loggedInUser', JSON.stringify({role: "Admin"}))
      console.log(user)
    } else if (authData)
      {
      const employee = authData.employees.find((e) => 
      e.email === email && e.password === password)
      if(employee){
        setUser({role: "Employee"})
      }
      localStorage.setItem('loggedInUser', JSON.stringify({role: "Employee"}))
      console.log(user)
    } else {
      console.log("Invalid Credentials")
    }
  }
 
 

  return (
   <>
   {!user ? <Login handleLogin={handleLogin} /> : null}
   {user === "Admin" ? <AdminDashboard /> : <EmployeeDashboard />}
   
   
   </>
  )
}

export default App
