import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Arrow from '../assets/view.svg'
import { useNavigate } from 'react-router-dom';

const SingleTask: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="p-4">
      {/* Breadcrumb and back arrow */}
      <div className="flex flex-col  space-x-2 mb-4">
      <article className='flex gap-2 items-center'>
          <h1 className="text-[40px] font-extrabold text-[#101C56]">Tasks</h1>
          <div className='flex gap-2 items-center'><IoIosArrowForward /><small className="text-[15px] text-[#636363]">Task Name</small></div>
        </article>
        <button className="text-gray-500 hover:text-gray-700" onClick={()=>navigate(-1)}>
          <img src={Arrow} alt="" className='rotate-180 w-12 h-12'/>
        </button>
        
      </div>

      {/* Task area */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between">
        {/* Task details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Task Title</h2>
          <p className="text-sm text-gray-500 mb-4">Status: In Progress</p>
          <p className="mb-6">
            This is the task description. It provides an overview of what needs to be done.
          </p>

          {/* Button and icons */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Complete Task
            </button>
            {/* Icons */}
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">✏️</button>
              <button className="text-gray-500 hover:text-gray-700">🗑️</button>
            </div>
          </div>
        </div>

        {/* Right-aligned div (additional info or actions) */}
        <div className="flex-shrink-0">
          {/* Additional content or actions can go here */}
          <p className="text-gray-400">Due Date: 2024-09-10</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
