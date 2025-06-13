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
import AdminHome from '../container/AdminHome';
import ProjectDetailsAdmin from '../container/ProjectDetailsAdmin';
import Adminsearch from '../container/Adminsearch';
import AdminSidebar from '../component/AdminSidebar';
import ViewProjects from '../container/ViewProjects';
import AdminStdControls from '../container/AdminStdControls';
import AdminTechControls from '../container/AdminTechControls';
import TeacherSidebar from '../component/TeacherSidebar';
import TearcherDashboard from '../container/TearcherDashboard';
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
      // {
      //   path:"/project-details/:id",
      //   element:<ProjectDetails></ProjectDetails>
      // },
      // {
      //   path:"/tech-home",
      //   element:<TeacherHome></TeacherHome>
      // },
      // {
      //   path:"/admin-1d",
      //   element:<AdminHome></AdminHome>
      // },
      // {
      //   path:"/projet-details/std/:id",
      //   element:<ProjectDetailsAdmin></ProjectDetailsAdmin>
      // },
      // {
      //   path:"/search-std-1d",
      //   element:<Adminsearch></Adminsearch>
      // },


// admin-pages
{
        path:'/',
        element:<AdminSidebar></AdminSidebar>,
        children:[
 {
path: "/admin-1d",
element: <AdminHome />
        },
        {
          path: "/search-std-1d",
          element: <Adminsearch />
        },
        {
          path: "/projet-details/std/:id",
          element: <ProjectDetailsAdmin />
        },
        {
          path:"/view-project-all",
          element:<ViewProjects></ViewProjects>
        },
        {
          path:"/admin-std-controls",
          element:<AdminStdControls></AdminStdControls>
        },
        {
          path:"/admin-teacher-controls",
          element:<AdminTechControls></AdminTechControls>
        }
        ]
      },
// teacher-pages
      {
path:"/",
element:<TeacherSidebar></TeacherSidebar>,
children:[
  {
    path:"/dashboard-tech",
    element:<TearcherDashboard></TearcherDashboard>
  },
    {
        path:"/tech-home",
        element:<TeacherHome></TeacherHome>
      },
          {
        path:"/project-details/:id",
        element:<ProjectDetails></ProjectDetails>
      },
]}]
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