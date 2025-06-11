import React from 'react'
import { useNavigate } from 'react-router'
import { FaCircleUser } from "react-icons/fa6";
function UserHome() {
    const user=localStorage.getItem("username_key")
    const navigate=useNavigate()
function addProject(){
navigate('/Idea')
}

function userProfile(){
    navigate("/edit-profile")
}
  return (
 <>
 <div>

  <div className="flex justify-between mb-4">
    <h2 className='text-blue-600 font-bold flex items-center gap-2' onClick={userProfile}><FaCircleUser></FaCircleUser> {user} </h2>      
<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition" onClick={addProject}>
Add Project
</button>
        </div>
    <div>

    </div>
    <div>
        <h1 className='text-2xl font-bold p-5'>All Projects:</h1>
    </div>
    {/* card */}
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
<div className='border p-2'>
    <h2>Title:test1</h2>
    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.</p>
    </div>

<div className='border p-2'>
    <h2>Title:test1</h2>
    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.</p>
    </div>

<div className='border p-2'>
    <h2>Title:test1</h2>
    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.</p>
    </div>

<div className='border p-2'>
    <h2>Title:test1</h2>
    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.</p>
    </div>
    </div>

 </div>
 </>
  )
}

export default UserHome