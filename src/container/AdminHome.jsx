import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
import { LuArrowUpRight } from "react-icons/lu";
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  RadialBarChart, RadialBar
} from 'recharts';
import { BiUser, BiCheckCircle, BiXCircle, BiTimeFive } from "react-icons/bi";

const COLORS = ['#c084fc', '#a855f7', '#d8b4fe'];

function AdminHome() {
  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/user";
  const [students, setStudents] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const totalStudents = students.length;
  const acceptedProjects = students.filter(s => s.status === 'accepted').length;
  const rejectedProjects = students.filter(s => s.status === 'rejected').length;
  const pendingProjects = students.filter(s => !s.status || s.status === 'pending').length;

  const pieData = [
    { name: 'Accepted', value: acceptedProjects },
    { name: 'Rejected', value: rejectedProjects },
    { name: 'Pending', value: pendingProjects },
  ];

  const barData = [
    { name: 'Accepted', count: acceptedProjects },
    { name: 'Rejected', count: rejectedProjects },
    { name: 'Pending', count: pendingProjects },
  ];

  const radialData = [
    { name: 'Accepted', value: acceptedProjects, fill: 'url(#gradientAccepted)' },
    { name: 'Rejected', value: rejectedProjects, fill: 'url(#gradientRejected)' },
    { name: 'Pending', value: pendingProjects, fill: 'url(#gradientPending)' },
  ];

  return (
<>
 <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-start text-purple-400">Admin Dashboard</h1>
{/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          {
            label: 'Total of Students',
            value: totalStudents,
            color: 'from-purple-200 to-purple-300',
            icon: <BiUser size={36} />
          },
          {
            label: 'Projects Accepted',
            value: acceptedProjects,
            color: 'from-purple-300 to-purple-400',
            icon: <BiCheckCircle size={36} />
          },
          {
            label: 'Projects Rejected',
            value: rejectedProjects,
            color: 'from-purple-400 to-purple-500',
            icon: <BiXCircle size={36} />
          },
          {
            label: 'Projects Pending',
            value: pendingProjects,
            color: 'from-purple-500 to-purple-600',
            icon: <BiTimeFive size={36} />
          },
        ].map(({ label, value, color, icon }) => (
          <div key={label} className={`bg-gradient-to-r ${color} p-5 rounded-xl shadow text-white text-center hover:scale-105 duration-200`}>
            <div className='flex flex-col gap-2 items-center'>
              <div className="flex justify-center items-center gap-2">{icon}</div>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm sm:text-base font-medium">{label}</p>
            </div>
          </div>
        ))}
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
{/* pie-chart */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center text-gray-700">Project Status - Pie</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
{/* radial */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center text-gray-700">Project Status - Radial</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart
              innerRadius="30%"
              outerRadius="80%"
              data={radialData}
              startAngle={180}
              endAngle={0}
            >
              <defs>
                <linearGradient id="gradientAccepted" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="gradientRejected" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradientPending" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="value"
              />
              <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
{/* bar-chart */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-10">
        <h2 className="text-base sm:text-lg font-semibold mb-4 text-center text-gray-700">Project Status - Bar</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <Bar dataKey="count" fill="url(#barGradient)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
}

export default AdminHome;
