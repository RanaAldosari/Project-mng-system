import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { CiUser, CiSettings } from 'react-icons/ci';
import { MdOutlineMessage } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
function AdminSidebar() {
  const navigate=useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
function switchHome(){
navigate("/")
}
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
  <div className="md:hidden flex justify-between items-center bg-gray-100 text-purple-900 p-4">
          <h2 className="text-xl font-bold">Admin Panel</h2>
{/* sm */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <MdClose size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
 {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100 text-purple-900 p-4 space-y-4 flex flex-col text-start">
            <NavLink
              to="/admin-1d"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/search-std-1d"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Students
            </NavLink>
            <NavLink
              to="/view-project-all"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Projects
            </NavLink>
            <NavLink
              to="/admin-teacher-controls"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Teacher
            </NavLink>
{/* lg */}
  <div className='mt-10 md:mt-80'>
              <button
                className='bg-gray-50 rounded-2xl p-2 px-3 text-purple-900 hover:cursor-pointer'
                onClick={switchHome}
              >
                Logout
              </button>
            </div>

          </div>
        )}
<div className="hidden md:flex w-64 flex-col justify-between bg-gray-100 text-black/80 p-6 flex-shrink-0">
  <div>
    <h2 className="text-2xl font-bold mb-6 text-start">Admin Panel</h2>
    <nav className="flex flex-col text-start space-y-4">
      <NavLink to="/admin-1d" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
        <h1 className='flex items-center gap-2'><RxDashboard /> Dashboard</h1>
      </NavLink>
      <NavLink to="/search-std-1d" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
        <h1 className='flex items-center gap-2'><FiUsers /> Students</h1>
      </NavLink>
      <NavLink to="/view-project-all" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
        <h1 className='flex items-center gap-2'><GoProjectRoadmap /> All Projects</h1>
      </NavLink>
      <NavLink to="/admin-teacher-controls" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>
        <h1 className='flex items-center gap-2'><FiUsers /> Teacher</h1>
      </NavLink>
    </nav>
  </div>
<div className="mt-10 text-start">
    <button
      className="bg-purple-100 rounded-2xl p-2 px-3 text-purple-600 hover:cursor-pointer hover:bg-purple-200 duration-300 delay-150"
      onClick={switchHome}
    >
      Logout
    </button>
  </div>
</div>

{/* display */}
 <div className="flex-1 overflow-y-auto m-0 p-0 bg-gray-100">
        <div className="flex items-center justify-between mb-4 px-4 py-2 bg-gray-100">
          <div></div>
          <div className="flex items-center gap-4">
            <CiSettings />
            <MdOutlineMessage />
            <IoMdNotificationsOutline />
            <img
              className="w-10 h-10 border rounded-full"
              src="/Businesswoman_free_icons_designed_by_pojok_d-removebg-preview.png"
              alt="Teacher Avatar"
            />
          </div>
        </div>

        <Outlet />
      </div>

      </div>
    </>
  );
}

export default AdminSidebar;
