import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex  justify-between py-10 gap-5  rounded-md'>
      <div className='h-40 px-10 py-5 rounded-xl w-1/2  bg-red-500'>
      <h3 className= 'text-white text-3xl font-semibold'>0</h3>
      <h3 className='text-white text-xl font-medium'>New task</h3>
      </div>
      <div className='h-40 px-10 py-5 rounded-xl w-1/2 bg-blue-500'>
      <h3 className= 'text-white text-3xl font-semibold'>0</h3>
      <h3 className='text-white text-xl font-medium'>New task</h3>
      </div>
      <div className='h-40 px-10 py-5 rounded-xl w-1/2 bg-green-500'>
      <h3 className= 'text-white text-3xl font-semibold'>0</h3>
      <h3 className='text-white text-xl font-medium'>New task</h3>
      </div>
      <div className='h-40 px-10 py-5 rounded-xl w-1/2 bg-yellow-500'>
      <h3 className= 'text-white text-3xl font-semibold'>0</h3>
      <h3 className='text-white text-xl font-medium'>New task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
