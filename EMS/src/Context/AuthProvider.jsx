import React, {createContext, useEffect, useState} from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const [userData , setUserData] = useState(null)

const data = getLocalStorage()

useEffect (() => {
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
}, [])

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={"sharib"}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
