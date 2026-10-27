import React, { useState } from 'react'

const Header = ({data}) => {
  // useState [username, setUsername] = useState('')
  // if (!data){
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.firstName)
  // }

  const logoutUser = () =>{
    localStorage.setItem('loggedInUser', "")
    window.location.reload() 
  }
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='  text-2xl'> <br/> <span className='font-semi-bold text-white text-3xl'> hey </span> </h1>
      <button
       onClick={logoutUser}
       className='bg-red-600 text-lg font-medium text-white px-4 py-2 rounded-md hover:bg-red-700'>Logout</button>
    </div>
  )
}

export default Header
