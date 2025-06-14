import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FaCircleUser } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import axios from 'axios';

function UserHome() {
  const user = localStorage.getItem("username_key");
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image";

  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
        const acceptedProjects = res.data.filter(project => project.status === 'accepted');
        setProjects(acceptedProjects);
      })
      .catch(err => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  function addProject() {
    navigate('/Idea');
  }

  function userProfile() {
    navigate("/edit-profile");
  }

  return (
    <>
      <div className="p-6">
<div className="flex justify-between mb-4">
          <h2
            className='text-purple-600 font-bold flex items-center gap-2 cursor-pointer'
            onClick={userProfile}
          >
            <FaCircleUser /> {user}
          </h2>
          <button
            className="bg-purple-200 text-purple-600 flex items-center gap-2 px-4 py-2 rounded hover:bg-purple-300 transition"
            onClick={addProject}
          >
            Add Project <GoPlus />
          </button>
        </div>
{/* display-projects */}
        <div className="min-h-screen">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-purple-600 text-start">All Accepted Projects:</h1>
          </div>

          {loading ? (
            <p className="text-center text-lg text-gray-600">Loading...</p>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects accepted.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {projects.map(project => (
                <div
                  key={project.id}
                  className="bg-white text-start rounded-lg shadow p-4 hover:shadow-md cursor-pointer duration-500 delay-500 hover:scale-110 hover:border border-purple-600"
                >
                  <h2 className="text-xl font-semibold mb-2">Title: {project.title}</h2>
                  <p className="text-gray-700 text-sm">
                    Description: {project.description || 'No description provided.'}
                  </p>
</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserHome;
