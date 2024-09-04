import React from 'react';
import Arrow from '../assets/view.svg';

interface TaskProps {
 index: number;
 status: 'pending' | 'in-progress' | 'completed';
 title: string;
 onViewTask: () => void;
}

const Task: React.FC<TaskProps> = ({ index, status, title, onViewTask }) => {
 // Format the index
 const formattedIndex = `T-${index.toString().padStart(2, '0')}`;

 // Define status colors
 const statusColors = {
  pending: 'bg-[#FFFDF5] text-[#DF9A00]',
  'in-progress': 'bg-[#F2F4FD] text-cerulean-blue-600',
  completed: 'bg-[#F0FFF9] text-[#00C271]'
 };

 return (
  <article className="flex flex-col w-full sm:w-[200px] xl:w-[250px] h-[220px] justify-between border-b bg-white shadow-md rounded-2xl p-[20px] ">
   <div className="flex justify-between space-x-4">
    {/* Index */}
    <h3 className="font-semibold text-lg">{formattedIndex}</h3>
    {/* Status */}
    <p className={`px-2 py-1 rounded-full ${statusColors[status]}`}>{status.replace('-', ' ')}</p>
   </div>
   {/* Title */}
   <p className=" text-[#16171D] font-bold text-[16px]">{title}</p>
   {/* View Task Button */}
   <button onClick={onViewTask} className="flex items-center text-cerulean-blue-600 transition-colors">
    <p className="mr-2 font-bold text-[20px]">View Task</p>
    <img src={Arrow} alt="View Task" className="w-8 h-8" />
   </button>
  </article>
 );
};

export default Task;
