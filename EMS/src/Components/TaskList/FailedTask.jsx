import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className="flex-shrink-0 h-full w-1/4  p-5  bg-green-400 rounded-xl">
        <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-white text-md py-1 rounded-md ">
            {data.category}
          </h3>
          <h4 className=" text-white">{data.taskDate}</h4>
        </div>
        <h3 className="text-2xl text-white font-bold mt-2">
          {data.taskTitle}
        </h3>
        <p className="text-white mt-3">
          {data.taskDesc}
        </p>
        <div className= 'mt-20'>
            <button className= 'w-full  py-1 px-2 text-xs text-white rounded-md'>
                Failed
            </button>

        </div>
      </div>
  )
}

export default FailedTask
