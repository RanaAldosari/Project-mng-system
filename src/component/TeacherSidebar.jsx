import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { MdClose } from 'react-icons/md';   
import { CiUser, CiSettings } from 'react-icons/ci';
import { MdOutlineMessage } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";

function TeacherSidebar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchHome = () => {
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <>
  <div className="flex flex-col md:flex-row h-screen m-0 p-0">
 <div className="md:hidden flex justify-between items-center bg-purple-700 text-white p-4">
        <h2 className="text-xl font-bold">Teacher Panel</h2>
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <MdClose size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
{/* sm */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-700 text-white p-4 space-y-4">
          <h1 className="flex items-center gap-2 text-lg font-semibold">
            <CiUser /> Teacher Profile
          </h1>
          <div className="flex flex-col gap-2">
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
              className="bg-gray-50 rounded-2xl p-2 px-3 text-purple-600"
              onClick={switchHome}
            >
              Logout
            </button>
          </div>
        </div>
      )}
{/* lg */}
      <div className="hidden md:flex w-64 flex-col justify-between bg-gray-100 text-black/80 p-6 flex-shrink-0">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-start">Teacher Panel</h2>
          <nav className="flex flex-col space-y-3">
            {/* <h1 className="flex items-center gap-2 text-lg font-semibold hover:bg-purple-100 p-2 cursor-pointer">
              <CiUser /> Teacher Profile
            </h1> */}
            <NavLink
              to="/dashboard-tech"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
            >
              <h1 className='flex items-center gap-2 hover:bg-purple-100 p-2'>
                <RxDashboard /> Dashboard
              </h1>
            </NavLink>
            <NavLink
              to="/tech-home"
              className={({ isActive }) => isActive ? "font-semibold underline" : ""}
            >
              <h1 className='flex items-center gap-2 hover:bg-purple-100 p-2'>
                <FiUsers /> Students
              </h1>
            </NavLink>
          </nav>
        </div>
 <div className="mt-10 text-start">
          <button
            className="bg-purple-100  rounded-2xl p-2 px-3 text-purple-600 hover:cursor-pointer hover:bg-purple-200 duration-300 delay-150"
            onClick={switchHome}
          >
            Logout
          </button>
        </div>
      </div>
{/* display content of sidebar*/}
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

export default TeacherSidebar;
