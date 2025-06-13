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
// teacher
if(email==="teacher-id-23451@tuwaiq.com"&&password==="23451")
alert("login as teacher")
navigate("/tech-home")
}
// admin
if(email==="admin-id-234512@tuwaiq.com"&&password==="234512"){
  alert("login as admin")
  navigate("/admin-1d")
}


function switchSignup(){
  navigate("/")
}

return (
<>
<div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8 ">

      <div className="w-full lg:w-1/2 flex flex-col items-center text-center mb-10 lg:mb-0">
        <h2 className="text-black/70 text-3xl md:text-4xl font-bold leading-snug">
          Welcome Again! <br />
        </h2>
        <img
          className="w-60 md:w-80 lg:w-80 mt-4"
          src="/Forms_Customizable_Isometric_Illustrations___Amico_Style-removebg-preview.png"
          alt="Welcome"
        />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md p-8 rounded bg-white">
          <h2 className="text-2xl font-bold mb-6 text-center text-black/70">Login to Your Account</h2>

<div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              onClick={handelLogin}
              className="w-full bg-purple-900 hover:bg-purple-800 text-white py-2 rounded font-semibold transition duration-200"
            >
              Login
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Don’t have an account?{' '}
              <span
                className="text-purple-900 font-medium hover:underline cursor-pointer"
                onClick={switchSignup}
              >
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Login