import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  console.log(authData.employees);
  

  return (
    <div className = "p-5  mt-5 rounded  " >
      <div className =' bg-red-400 mb-2  py-2 px-4 flex justify-between rounded '>
         <h3 className='text-xl font-bold w-1/5'>Employee Name</h3>
         <h2 className='text-xl font-bold w-1/5'>New Task</h2>
         <h3 className='text-xl font-bold w-1/5'>Active Task</h3>
         <h3 className='text-xl font-bold w-1/5'>Completed</h3>
         <h3 className='text-xl font-bold w-1/5'>Failed~</h3>


        </div>
      <div className=''>
        {authData.employees.map(function(elem){
         return <div className ='border-2  mb-2  py-2 px-4 flex justify-between rounded '>
         <h3 className='text-lg font-medium w-1/5 '>{elem.firstName}</h3>
         <h2 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h2>
         <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h3>
         <h3 className='text-lg font-medium w-1/5 text-black-600'>{elem.taskNumbers.completed}</h3>
         <h3 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h3>
        </div>
      })}
      </div>
       
        
      
    </div>
  )
}

export default AllTask
