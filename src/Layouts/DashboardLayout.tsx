import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi'; // Example icons
import { IoNotifications } from "react-icons/io5";


const DashboardLayout: React.FC = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

 const toggleSidebar = () => {
  setIsSidebarOpen(prev => !prev);
 };

 return (
  <div className="relative flex flex-col lg:flex-row min-h-screen">
   {/* Mobile Menu Toggle Button */}
   <div>
    <button
     onClick={toggleSidebar}
     className="lg:hidden p-4 text-gray-700 rounded-md z-50"
    >
     {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
    </button>
   </div>

   {/* Sidebar for menu items */}
   <aside
    className={`fixed inset-0 top-[30px] left-0 lg:relative lg:flex lg:flex-col lg:w-[180px] bg-white text-cerulean-blue-600 font-bold p-4 lg:p-6 transform transition-transform ease-in-out duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}
   >
    <h2 className="text-xl text-[#101C56] font-extrabold mb-6">My Tasks</h2>
    <ul className="space-y-4">
     <li><a href="#" className="hover:text-gray-400">Home</a></li>
     <li><a href="#" className="hover:text-gray-400">Profile</a></li>
     <li><a href="#" className="hover:text-gray-400">Settings</a></li>
     <li><a href="#" className="hover:text-gray-400">Logout</a></li>
    </ul>
   </aside>

   {/* Main Content Area */}
   <main className="flex-1 flex flex-col lg:flex-row bg-[#6685ff17]">
    <section className="flex-1 p-4 lg:p-6">
     <div className='flex  justify-between items-center mb-[40px]'>
      <article>
       <input type="search" name="" id="" className='customInput bg-transparent' placeholder='Search your Tasks here...' />
      </article>
      <IoNotifications className='text-[35px] text-cerulean-blue-600'/>
     </div>
     <div>
      <Outlet />
     </div>
    </section>

    {/* Profile area, visible only on large screens */}
    <aside className="hidden lg:flex flex-col p-4 lg:w-[220px] xl:w-[250px] bg-white mr-[20px] my-[20px] rounded-xl">
     <h2 className="text-lg font-semibold mb-4">Profile</h2>
     <div>
      <p>Goat</p>
     </div>
    </aside>
   </main>
  </div>
 );
};

export default DashboardLayout;
