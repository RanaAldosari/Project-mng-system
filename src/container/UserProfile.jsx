import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { IoAlertCircle } from "react-icons/io5";
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

function switchSignup(){
  navigate("/")
}

return (
<>
<div>
<div className="p-4 max-w-md mx-auto">
  {!state ? (
        <div>Please wait...</div>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-4">Edit your account:</h2>
          <div className="mb-4">
            <label className="block">Username:</label>
            <input
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Email:</label>
            <input
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Password:</label>
<input  name="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
            <button onClick={switchHome} className="bg-blue-500 text-white px-4 py-2 rounded">Home</button>
            <button className='bg-red-600' onClick={switchSignup}>Log out</button>
          </div>
{/* project-details */}
{project && (
<div className="border p-4 mt-8 rounded shadow">
<h2 className="text-xl font-bold mb-2">Project Title: {project.title}</h2>
              <p><strong>Type:</strong> {project.type}</p>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Team Name:</strong> {project.teamName}</p>
              <p><strong>Team Members:</strong> {project.teamCount}</p>
              <p><strong>Contact:</strong> {project.contact}</p>
              <p className="text-yellow-600 font-semibold mt-2 flex items-center gap-2"><IoAlertCircle></IoAlertCircle> Status: Under Review</p>
            </div>
          )}
        </>
)}
</div>
    </div>
</>
  )
}

export default UserProfile
