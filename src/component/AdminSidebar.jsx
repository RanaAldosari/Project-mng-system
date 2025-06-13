import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router';
function AdminSidebar() {
  const navigate=useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
function switchHome(){
navigate("/")
}
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
  <div className="md:hidden flex justify-between items-center bg-purple-200 text-purple-900 p-4">
          <h2 className="text-xl font-bold">Admin Panel</h2>
{/* sm */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <MdClose size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
 {isMobileMenuOpen && (
          <div className="md:hidden bg-purple-200 text-purple-900 p-4 space-y-4 flex flex-col text-start">
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
<div className="hidden md:block w-64 bg-purple-200 text-purple-900 p-6 flex-shrink-0">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <nav className="flex flex-col text-start space-y-4">
            <NavLink to="/admin-1d" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>Dashboard</NavLink>
            <NavLink to="/search-std-1d" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>Students</NavLink>
            <NavLink to="/view-project-all" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>All Projects</NavLink>
            <NavLink to="/admin-teacher-controls" className={({ isActive }) => isActive ? "font-semibold underline" : ""}>Teacher</NavLink>
          </nav>
        </div>
{/* display */}
 <div className="flex-1 overflow-y-auto p-4 sm:p-6 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
