import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewProjects() {
  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image";

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
const acceptedProjects = res.data.filter(project => project.status === 'accepted');
        setProjects(acceptedProjects);
      })
      .catch(err => {
        console.error("Failed to fetch projects:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading projects...</div>;
  }

  if (projects.length === 0) {
    return <div className="text-center mt-10 text-gray-500">No accepted projects found.</div>;
  }

  return (
    <>

    <div className="min-h-screen p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-purple-400 text-start">All Accepted Projects:</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white text-start rounded-lg shadow p-4 hover:shadow-md cursor-pointer duration-500 delay-500 hover:scale-110 hover:border border-purple-400"
          >
            <h2 className="text-xl font-semibold mb-2 text-black/80">
              Title: {project.title || 'No title'}
            </h2>
            <p className="text-gray-700 text-sm">
              Description: {project.description || 'No description available.'}
            </p>
          </div>
        ))}
      </div>
    </div>
        </>
  );
}

export default ViewProjects;
