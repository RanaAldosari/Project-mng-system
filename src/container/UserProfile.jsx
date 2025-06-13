import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { IoAlertCircle } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from 'sweetalert2';
function UserProfile() {
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [state, setState] = useState(null)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"
  const apiUrlProject = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image"
  const userInfo = localStorage.getItem("username_key")
// user-info
  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        const users = res.data
        const findUser = users.find((user) => user.username === userInfo)
        setState(findUser)
        if (findUser) {
          setFormData({
            username: findUser.username,
            email: findUser.email,
            password: findUser.password
          })
setProject(findUser); 
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [userInfo])

// user-project
  useEffect(() => {
    axios.get(apiUrlProject)
      .then((res) => {
        const projects = res.data
        const userProjects = projects.filter(p => p.userId === userInfo)
        setProject(userProjects[0]) 
      })
      .catch((err) => {
        console.log(err)
      })
  }, [userInfo])

// update-info
  function handleUpdate() {
    axios.put(`${apiUrl}/${state.id}`, formData)
      .then(res => {
        alert("Profile updated successfully!")
        setState(res.data)
        localStorage.setItem("username_key", formData.username)
      })
      .catch(err => {
        console.error("Update failed:", err)
        alert("Error updating profile.")
      })
  }
function switchHome() {
    navigate("/home")
  }

function switchSignup() {
  Swal.fire({
    title: "Are you sure you want to log out?",
    text: "You will need to log in again to access your account.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, log out",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Logged out!", "You have been logged out successfully.", "success");
      navigate("/");
    }
  });
}


return (
<>
<div className=" min-h-screen py-10">
  <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg">
    {!state ? (
      <div className="text-center text-gray-600 text-lg">Please wait...</div>
    ) : (
      <>

        <h1 className="text-2xl font-bold text-purple-700 mb-4">Welcome back! You can edit your account below.</h1>
{/* edit-account */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Edit your account:</h2>

        <div className="mb-4">
          <label className="block font-medium text-gray-600">Username:</label>
          <input
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-600">Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block font-medium text-gray-600">Password:</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button onClick={handleUpdate} className="bg-green-200 text-white px-4 py-2 rounded hover:bg-green-300 cursor-pointer delay-150 duration-500 ">
            Update
          </button>
  </div>
{/* project-details */}
        {project && (
          <div className="border p-5 mt-4 rounded shadow bg-gray-100">
            <h2 className="text-xl font-bold text-purple-700 mb-3">Your Project Information</h2>
            <p><strong>Title:</strong> {project.title}</p>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Team Name:</strong> {project.teamName}</p>
            <p><strong>Team Members:</strong> {project.teamCount}</p>
            <p><strong>Contact:</strong> {project.contact}</p>

            {project.status === 'accepted' && (
              <p className="text-green-600 font-semibold mt-3 flex items-center gap-2">
                <IoAlertCircle /> Status: Accepted
              </p>
            )}

            {project.status === 'rejected' && (
              <div className="mt-3 text-red-600 font-semibold">
                <p className="flex items-center gap-2"><IoAlertCircle /> Status: Rejected</p>
                <p className="text-sm font-normal mt-1">Reason: {project.rejectionReason || 'No reason provided.'}</p>
              </div>
            )}

            {!project.status && (
              <p className="text-yellow-600 font-semibold mt-3 flex items-center gap-2">
                <IoAlertCircle /> Status: Under Review
              </p>
            )}
          </div>
        )}
      </>
    )}
  </div>

  <div className='flex gap-2'>
<button onClick={switchHome} className="bg-blue-200 text-white px-4 py-2 flex items-center gap-1 rounded hover:bg-blue-300 delay-150 duration-500 cursor-pointer">
          <FaArrowLeftLong></FaArrowLeftLong>  View Projects
          </button>
          <button onClick={switchSignup} className="bg-red-200 text-white px-4 py-2 rounded hover:bg-red-400 delay-150 duration-500 cursor-pointer">
            Log out
          </button>
  </div>
</div>

</>
  )
}

export default UserProfile
