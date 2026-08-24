import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full overflow-x-auto flex items-center justify-start flex-nowrap gap-5 py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-1/4 p-5 bg-red-400 rounded-xl">
        <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-white text-md py-1 rounded-md ">
            High
          </h3>
          <h4 className=" text-white">09 Aug 2026</h4>
        </div>
        <h3 className="text-2xl text-white font-bold mt-2">
          Make Fitness Short
        </h3>
        <p className="text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          dolore neque odio minus ullam sapiente corrupti quod{" "}
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-1/4 p-5 bg-blue-400 rounded-xl">
        <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-white text-md py-1 rounded-md ">
            High
          </h3>
          <h4 className=" text-white">09 Aug 2026</h4>
        </div>
        <h3 className="text-2xl text-white font-bold mt-2">
          Make Fitness Short
        </h3>
        <p className="text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          dolore neque odio minus ullam sapiente corrupti quod{" "}
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-1/4  p-5  bg-green-400 rounded-xl">
        <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-white text-md py-1 rounded-md ">
            High
          </h3>
          <h4 className=" text-white">09 Aug 2026</h4>
        </div>
        <h3 className="text-2xl text-white font-bold mt-2">
          Make Fitness Short
        </h3>
        <p className="text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          dolore neque odio minus ullam sapiente corrupti quod{" "}
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-1/4  p-5 bg-yellow-400 rounded-xl">
        <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 px-3 text-white text-md py-1 rounded-md ">
            High
          </h3>
          <h4 className=" text-white">09 Aug 2026</h4>
        </div>
        <h3 className="text-2xl text-white font-bold mt-2">
          Make Fitness Short
        </h3>
        <p className="text-white mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          dolore neque odio minus ullam sapiente corrupti quod{" "}
        </p>
      </div>
    </div>
  );
};

export default TaskList;
