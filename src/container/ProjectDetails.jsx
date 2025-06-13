import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";
function ProjectDetails() {
  const { id } = useParams();
  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image";
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        const userProjects = res.data.filter(project => project.id === id);
        setDetails(userProjects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function acceptproject() {
    Swal.fire({
      title: "Success!",
      text: "Project Accepted!",
      icon: "success"
    });
  }

  function rejectproject() {
    Swal.fire({
      title: 'Why do you reject this project?',
      input: 'text',
      inputPlaceholder: 'Type your reason here...',
      showCancelButton: true,
      confirmButtonText: 'Send',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const reason = result.value;
        console.log("Rejected with reason:", reason);
        Swal.fire('Project Rejected!', `Reason: ${reason}`, 'info');
      }
    });
  }

  function switchprojectHome() {
    navigate("/tech-home");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Project Details</h2>

      {details.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Project not found.</p>
      ) : (
        details.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>

            <div className="flex gap-4">
              <button
                onClick={acceptproject}
                className="bg-green-200 text-white px-4 py-2 rounded hover:bg-green-300 duration-600 delay-200 cursor-pointer"
              >
                Accept
              </button>
              <button
                onClick={rejectproject}
                className="bg-red-200 text-white px-4 py-2 rounded hover:bg-red-400 duration-600 delay-200 cursor-pointer"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
<div className="mt-6">
        <h1 className='flex items-center gap-3 hover:underline cursor-pointer'
          onClick={switchprojectHome}
        >
          <FaArrowLeftLong></FaArrowLeftLong>
          Back
        </h1>
      </div>
    </div>
  );
}

export default ProjectDetails;
