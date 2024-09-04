import { Outlet } from "react-router-dom"
import back from '../assets/background.jpg'

const MainLayout = () => {
 return (
  <main className="flex gap-[50px] p-[20px]">
   <section
    className="h-[95vh] bg-cover bg-center flex-col justify-center items-center text-white rounded-2xl overflow-hidden hidden lg:flex w-[48%] px-[8%]"
    style={{ backgroundImage: `url(${back})` }}
   >
    <h1 className="text-[45px] font-bold">Take your productivity to the next level.</h1>
    {/* <p className="">Copyright 2021 | All Right Reserved</p> */}
   </section>
   <section className={`w-full lg:w-[40%]`}>
    <Outlet />
   </section>
  </main>
 )
}

export default MainLayout