import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { BsSearch } from 'react-icons/bs';
import { LuArrowUpRight } from "react-icons/lu";

function TeacherHome() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/user";
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  function switchDetails(id) {
    navigate(`/project-details/${id}`);
  }

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[.8rem] lg:text-2xl font-bold text-purple-600">Students Names:</h2>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="bg-white flex justify-between items-center p-4 rounded-lg shadow hover:shadow-md delay-300 duration-500"
          >
            <div>
              <p className="font-semibold text-black/80 text-[.8rem] lg:text-[1rem]">Username: {user.username}</p>
              <p className="text-sm text-gray-500 text-[.6rem] lg:text-[.8rem]">project Title: {user.title || 'No title'}</p>
            </div>
            <button
              className="flex items-center gap-2 bg-purple-100 text-purple-600  px-4 py-1.5 rounded-md hover:bg-purple-200 cursor-pointer duration-500 delay-200"
              onClick={() => switchDetails(user.id)}
            >
              View <LuArrowUpRight size={18} />
            </button>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 mt-4">Students not found.</p>
        )}
      </div>
    </div>
  );
}

export default TeacherHome;
