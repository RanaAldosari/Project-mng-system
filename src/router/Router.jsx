import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router";
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import UserHome from '../container/UserHome';
import AddProject from '../container/AddProject';
import UserProfile from '../container/UserProfile';
import ProjectDetails from '../container/ProjectDetails';
import TeacherHome from '../container/TeacherHome';
function Layout(){
    return(
        <>
        <Outlet></Outlet>
        </>
    )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Signup></Signup>
        },
      {
          path:"/login",
        element:<Login></Login>
      },
      {
        path:"/home",
        element:<UserHome></UserHome>
      },
      {
        path:"/Idea",
        element:<AddProject></AddProject>
      },
      {
        path:"/edit-profile",
        element:<UserProfile></UserProfile>
      },
      {
        path:"/project-details",
        element:<ProjectDetails></ProjectDetails>
      },
      {
        path:"/tech-home",
        element:<TeacherHome></TeacherHome>
      }
    ]
  },
]);

function Router() {
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  )
}

export default Router