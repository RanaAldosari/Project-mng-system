import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router';
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { MdClose } from 'react-icons/md';   

function TeacherSidebar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchHome = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
 <div className="md:hidden flex justify-between items-center bg-purple-700 text-white p-4">
          <h2 className="text-xl font-bold">Teacher Panel</h2>
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <MdClose size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
{/* sm */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-purple-700 text-white p-4 space-y-4">
            <h1 className='flex items-center gap-2'><CiUser /> Teacher Profile</h1>
<div className='flex flex-col text-start gap-2'>
            <NavLink
              to="/dashboard-tech"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/tech-home"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              Students
            </NavLink>

            <button
              className='bg-gray-50 rounded-2xl p-2 px-3 text-purple-600'
              onClick={switchHome}
            >
              Logout
            </button>
</div>
          </div>
        )}
{/* lg */}
        <div className="hidden md:block w-64 bg-purple-700 rounded-3xl text-white p-6 flex-shrink-0">
          <h2 className="text-2xl font-bold mb-6">Teacher Panel</h2>
          <nav className="flex flex-col text-start space-y-4">
            <h1 className='flex items-center gap-2'><CiUser /> Teacher Profile</h1>

            <NavLink
              to="/dashboard-tech"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/tech-home"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
            >
              Students
            </NavLink>

            <div className='mt-10 md:mt-80'>
              <button
                className='bg-gray-50 rounded-2xl p-2 px-3 text-purple-600 hover:cursor-pointer'
                onClick={switchHome}
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
{/* display pages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default TeacherSidebar;
