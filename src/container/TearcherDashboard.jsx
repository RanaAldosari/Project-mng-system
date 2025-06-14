import React from 'react';
import { CiUser } from "react-icons/ci";

function TearcherDashboard() {
  return (
    <>
    <div className=" rounded-lg p-4 sm:p-6 w-full max-w-7xl mx-auto space-y-10">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="bg-purple-400 text-white rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:cursor-pointer duration-300  delay-300 hover:scale-105">
<div className="flex items-center gap-2 text-3xl font-bold"> <CiUser size={30} /> 100 </div>
          <p className="mt-2 text-[1.1rem] text-center">Number of Students</p>
        </div>
{/* pie-chart */}
        <div className="bg-white rounded-lg p-4 shadow-md text-center hover:cursor-pointer duration-300 delay-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-1">Number of Students</h2>
          <p className="text-sm text-gray-500 mb-3">Pie Chart</p>
          <div className="flex justify-center items-center">
            <div className="relative w-28 sm:w-36 h-28 sm:h-36">
              <div className="w-full h-full rounded-full border-[12px] sm:border-[14px] border-purple-300 rotate-[45deg]"></div>
              <div className="absolute inset-4 bg-white rounded-full flex flex-col justify-center items-center text-center">
                <p className="text-xl font-bold">100</p>
                <p className="text-sm text-gray-500">Students</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-2 text-sm text-gray-700">
            <span className="w-3 h-3 bg-purple-300 rounded-full"></span> Students: 100
          </div>
        </div>
{/* pie-chart */}
        <div className="bg-white rounded-lg p-4 shadow-md text-center hover:cursor-pointer duration-300  delay-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-1">Projects Status</h2>
          <p className="text-sm text-gray-500 mb-3">Pie Chart</p>
          <div className="flex justify-center items-center">
            <div className="relative w-28 sm:w-36 h-28 sm:h-36">
              <div className="w-full h-full rounded-full border-[12px] sm:border-[14px] border-purple-300 border-r-purple-200 rotate-[45deg]"></div>
              <div className="absolute inset-4 bg-white rounded-full flex flex-col justify-center items-center text-center">
                <p className="text-xl font-bold">100</p>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-300 rounded-full"></span> Accepted: 65
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-200 rounded-full"></span> Rejected: 35
            </div>
          </div>
        </div>
      </div>
{/* gradient */}
      <div className='hover:cursor-pointer duration-300  delay-300 hover:scale-105'>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Students - Gradient Area Chart</h2>
          <p className="text-sm text-gray-500">Showing number of student</p>
        </div>
        <div className="relative bg-gradient-to-t from-purple-100 to-transparent h-40 rounded-md overflow-hidden">
          <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-purple-300 to-transparent opacity-50 z-0"></div>
          <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-t from-purple-400 to-transparent opacity-60 z-0"></div>
          <svg className="absolute top-0 left-0 w-full h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#6b21a8"
              strokeWidth="2"
              points="0,80 20,60 40,65 60,40 80,50 100,30"
            />
          </svg>
          <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-600 px-4 pb-2 z-20">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
{/* bar-chart */}
 <div className='hover:cursor-pointer duration-300  delay-300 hover:scale-105'>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Students - Bar Chart</h2>
          <p className="text-sm text-gray-500">Number of students per month</p>
        </div>
        <div className="h-40 flex items-end gap-2 px-2 sm:px-4">
          {[40, 60, 80, 30, 70, 50].map((height, idx) => (
            <div
              key={idx}
              className="flex-1 bg-purple-400 rounded-t"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600 px-2 sm:px-4 pt-2">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
 </>
  );
}

export default TearcherDashboard;
