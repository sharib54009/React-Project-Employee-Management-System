import React from "react";
import Header from "../Other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full  p-10">
      <Header />

     <div >
       <form className='flex justify-between  items-start'>
        <div>
        


        <div>
          <h3>Date</h3>
          <input className='border-2'  type="date" />
        </div>


        <div>
          <h3>Assign to</h3>
          <input className='border-2'  type="text" placeholder="Employee Name" />
        </div>


        <div>
          <h3>Category</h3>
          <input className='border-2'  type="text" placeholder="Design, dev, etc." />
        </div>

        <div>
         <h3>Task Title</h3>
        <input className='border-2'  type="text" placeholder="Enter task title" />
       </div>

          <div>
          <h3>Description</h3>
          <textarea
            className='border-2' 
            name=""
            id=""
            cols="30"
            rows="10"
          placeholder="Enter task description"
        ></textarea>
        </div>

        </div>
       

        


        <button>Create Task</button>
      </form>
     </div>
    </div>
  );
};

export default AdminDashboard;
