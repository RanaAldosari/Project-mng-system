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
if(!formData.contact.includes("@tuwaiq.com")){
  Swal.fire("Email must include @tuwaiq.com");
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
<div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 gap-8 ">

  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl font-bold text-gray-700 mb-4">
      All fields are required. Please fill in all the information.
    </h2>
    <img
      className="max-w-xs mx-auto md:mx-0"
      src="/download-removebg-preview.png"
      alt="form illustration"
    />
  </div>
{/* form for add new project */}
 <form onSubmit={handleSubmit} className="md:w-1/2 bg-white rounded-lg p-6 space-y-4">
    <h1 className="text-xl font-semibold text-purple-700 mb-4">Add Your Project</h1>

    <div>
      <label className="block font-medium">Title:</label>
      <input
        type="text"
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title of project"
        className="border p-2 w-full rounded"
        required
      />
    </div>

 <div>
      <label className="block font-medium">Project Type:</label>
      <select
        value={formData.type}
        onChange={e => setFormData({ ...formData, type: e.target.value })}
        className="border p-2 w-full rounded"
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
      <label className="block font-medium">Description:</label>
      <textarea
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
        placeholder="Describe your project"
        className="border p-2 w-full rounded"
        required
      />
    </div>
 <div>
      <h2 className="text-lg font-semibold text-gray-700 mt-6">Team Information:</h2>
    </div>

    <div>
      <label className="block font-medium">Leader:</label>
      <input
        type="text"
        value={formData.leader}
        onChange={e => setFormData({ ...formData, leader: e.target.value })}
        placeholder="Team leader name"
        className="border p-2 w-full rounded"
        required
      />
    </div>

    <div>
      <label className="block font-medium">Number of team members:</label>
      <input
        type="number"
        value={formData.teamCount}
        onChange={e => setFormData({ ...formData, teamCount: e.target.value })}
        placeholder="Max 4 members"
        className="border p-2 w-full rounded"
        required
      />
    </div>

    <div>
      <label className="block font-medium">Team names:</label>
      <textarea
        value={formData.teamName}
        onChange={e => setFormData({ ...formData, teamName: e.target.value })}
        placeholder="Names of team members"
        className="border p-2 w-full rounded"
        required
      />
    </div>

    <div>
      <label className="block font-medium">Contact:</label>
      <input
        type="text"
        value={formData.contact}
        onChange={e => setFormData({ ...formData, contact: e.target.value })}
        placeholder="Email of leader"
        className="border p-2 w-full rounded"
        required
      />
    </div>

    <button
      type="submit"
      className="bg-purple-200 text-white px-4 py-2 rounded hover:bg-purple-400 transition"
    >
      Submit Project
    </button>
  </form>
</div>

    </>
  )
}

export default AddProject
