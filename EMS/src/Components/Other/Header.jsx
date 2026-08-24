import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='  text-2xl'>Header <br/> <span className='font-semi-bold text-3xl'> Sharib </span> </h1>
      <button className='bg-red-600 text-lg font-medium text-white px-4 py-2 rounded-md hover:bg-red-700'>Logout</button>
    </div>
  )
}

export default Header
