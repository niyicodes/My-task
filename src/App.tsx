import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import DashboardLayout from './Layouts/DashboardLayout'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Tasks from './Pages/Tasks'
import SingleTask from './Pages/SingleTask'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Tasks />} />
          <Route path='/dashboard/task/:title' element={<SingleTask />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
