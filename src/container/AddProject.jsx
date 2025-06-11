import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
function AddProject() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    leader: '',
    teamCount: '',
    teamName: '',
    contact: ''
  })
const userInfo = localStorage.getItem("username_key")
const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image"

  function handleSubmit(e) {
    e.preventDefault()

    if (parseInt(formData.teamCount) > 4) {
        Swal.fire("Team members should not exceed 4");
      return
    }

axios.post(apiUrl, { ...formData, leader: userInfo, userId: userInfo })
    .then(async res => {
      console.log(res.data)
      await Swal.fire({
        title: "Successfully!",
        text: "Project submitted successfully!",
        icon: "success"
      });

    await Swal.fire({
      title: "Please wait",
      text: "Your project is under review. You can check the status in your profile.",
      icon: "info"
    });

    navigate("/edit-profile");
  })
  .catch(err => {
      Swal.fire({
        icon: "error",
        text: "Unexpected error, please try again",
      });
      console.error(err)
    });
}

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            placeholder='Title of project'
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <h2>Select your project type:</h2>
          <select
            value={formData.type}
            onChange={e => setFormData({ ...formData, type: e.target.value })}
            className="border p-2 w-full"
            required
          >
            <option value="">Select</option>
            <option value="web">Web</option>
            <option value="application">Application</option>
            <option value="drons">Drones</option>
            <option value="AI">AI</option>
            <option value="robotics">Robotics</option>
            <option value="game">Game</option>
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            className="border p-2 w-full"
            placeholder='Describe your project'
            required
          />
        </div>

        <h2>Team Information:</h2>
        <div>
          <label>Leader:</label>
          <input
            type="text"
            value={formData.leader}
            onChange={e => setFormData({ ...formData, leader: e.target.value })}
            className="border p-2 w-full"
            placeholder='Team leader name'
            required
          />
        </div>

        <div>
          <label>Number of team members:</label>
          <input
            type="number"
            value={formData.teamCount}
            onChange={e => setFormData({ ...formData, teamCount: e.target.value })}
            className="border p-2 w-full"
            placeholder='Max 4 members'
            required
          />
        </div>

        <div>
          <label>Team name:</label>
          <textarea
            value={formData.teamName}
            onChange={e => setFormData({ ...formData, teamName: e.target.value })}
            className="border p-2 w-full"
            placeholder='Names of team members'
            required
          />
        </div>

        <div>
          <label>Contact Information:</label>
          <input
            type="text"
            value={formData.contact}
            onChange={e => setFormData({ ...formData, contact: e.target.value })}
            placeholder='Phone or Email of leader'
            className="border p-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
          Submit Project
        </button>
      </form>
    </>
  )
}

export default AddProject
