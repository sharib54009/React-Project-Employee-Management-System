import React from 'react'

const CreateTask = () => {
  return (
   <div className = "p-5  mt-7 rounded" >
       <form className='flex  gap-5  w-full justify-between items-start'>
        <div className = "w-1/2  flex flex-col gap-5">
        <div className = "w-full">
          <h3 className="text-sm text-gray-600 mb-0.5">Date</h3>
          <input className=' border-2 text-sm py-1 w-4/5 rounded outline-none, bg-transparent'   type="date" />
        </div>


        <div>
          <h3 className="text-sm text-gray-600 mb-0.5">Assign to</h3>
          <input className='border-2 text-sm py-1 w-4/5 rounded outline-none, bg-transparent'  type="text" placeholder="Employee Name" />
        </div>


        <div>
          <h3 className="text-sm text-gray-600 mb-0.5">Category</h3>
          <input className='border-2 text-sm py-1 w-4/5 rounded outline-none, bg-transparent'  type="text" placeholder="Design, dev, etc." />
        </div>

        <div>
         <h3 className="text-sm text-gray-600 mb-0.5">Task Title</h3>
        <input className='border-2 text-sm py-1 w-4/5 rounded outline-none, bg-transparent  '  type="text" placeholder="Enter task title" />
       </div>

         
        </div>
         <div className = "w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-600 mb-0.5">Description</h3>
          <textarea
            className='border-2 text-sm py-1 w-4/5 rounded outline-none, bg-transparent' 
            name=""
            id=""
            cols="30"
            rows="10"
          placeholder="Enter task description"
        ></textarea>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-4/5">Create Task</button>
        </div>
        
      </form>
     </div>
  )
}

export default CreateTask
