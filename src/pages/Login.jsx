import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

function Login() {
const navigate=useNavigate()
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"
function handelLogin(){
 if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        text: 'All fields are required',
      });
      return;
    }
axios.get(apiUrl)
.then((res)=>{
    console.log(res.data)
    const users=res.data
    const findUser=users.find((user)=>user.email===email&&user.password===password)
    if(findUser){
Swal.fire({
          title: "Successfully!",
          text: `welcome ${findUser.username}`,
          icon: "success"
});
localStorage.setItem("username_key",findUser.username)
navigate('/home')
    }
}).catch((err)=>{
    console.log(err)
   Swal.fire({
  icon: "error",
  text: "There is an error,try again",
});
})

if(email==="teacher-id-23451@tuwaiq.com"&&password==="23451")
alert("login as teacher")
navigate("/tech-home")
}

  return (
<>
<div>
    <label>Email:</label>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <label>Password:</label>
    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={handelLogin}>Login</button>
</div>
</>
  )
}

export default Login