import { useState } from "react";
import Button from "../Button";
import CustomInput from "../CustomInput";
import { HiX } from 'react-icons/hi';

interface FormDetails {
 taskName: string;
 dueDate: string;
 description: string;
}

const CreateTask = ({ onClose }: { onClose: () => void }) => {
 const [formDetails, setFormDetails] = useState<FormDetails>({
  taskName: '',
  dueDate: '',
  description: ''
 });

 const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormDetails((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
   <div className="bg-white rounded-lg w-[90%] max-w-[430px] mx-auto p-6 relative shadow-lg">
    <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
     <HiX className="w-6 h-6" />
    </button>
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Create a New Task</h2>
    <form className="flex flex-col gap-6 mt-[30px]">
     <CustomInput
      type="text"
      label="Task Name"
      value={formDetails.taskName}
      onChange={handleFormChange}
      placeholder="Enter task name"
      id="taskName"
      name="taskName"
     />
     <CustomInput
      type="date"
      label="Due Date"
      value={formDetails.dueDate}
      onChange={handleFormChange}
      id="dueDate"
      name="dueDate"
     />
     <CustomInput
      multiline
      label="Task Description"
      value={formDetails.description}
      onChange={handleFormChange}
      placeholder="Type your content here"
      id="description"
      name="description"
     />
     <Button children='Create Task' variant='filled' onClick={onClose}/>
    </form>
   </div>
  </div>
 );
}

export default CreateTask;
