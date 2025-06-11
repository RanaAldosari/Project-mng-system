import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router'
function TeacherHome() {
  const[user,setUser]=useState([])
const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"
  // const apiUrlProject = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image"
const navigate=useNavigate()

useEffect(()=>{
  axios.get(apiUrl)
  .then((res)=>{
    console.log(res.data)
setUser(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

function switchDetails(id) {
  navigate(`/project-details/${id}`);
}

  return (
<>
<div>
{user.map((item) => (
  <div key={item.id}>
    <input type="text" value={item.username} readOnly />
    <button className='bg-blue-600 m-2' onClick={() => switchDetails(item.id)}>Display</button>
  </div>
))}

  <div>

  </div>
</div>
</>
  )
}

export default TeacherHome