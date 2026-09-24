import React, {useEffect, useState} from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import {setLocalStorage} from './Utils/LocalStorage'

const App = () => {
 
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == "admin@gmail.com" && password == "123"){
      setUser("Admin")
      console.log(user)
    } else if (email == "employee@gmail.com" && password == "123") {
      setUser("Employee")
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
