import React, {  useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
function Signup() {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const apiUrl="https://68219a91259dad2655afc3cc.mockapi.io/api/users/user"
    const navigate=useNavigate()
    function handelSignup(){
if(!username||!email||!password||!confirmPassword){
    Swal.fire({
  icon: "error",
  text: "all field are required!",
});
return;
}
if(username.length<3){
    Swal.fire("username must be more than 3 characters");
    return
}
if(!email.includes("tuwaiq")|| !email.includes("@")|| !email.includes(".com")){
    Swal.fire( 'Email must contain "tuwaiq", "@" and end with ".com"');
    return
}
if (password !== confirmPassword) {
    Swal.fire("Passwords do not match");
      return;
}
axios.post(apiUrl,{
    username,
    email,
    password,
    confirmPassword
})
.then(()=>{
    Swal.fire({
  title: "Successfully!",
  text: "Account Created Successfully!",
  icon: "success"
});
navigate("/login")
    setUsername(''),
    setEmail(''),
    setPassword(''),
    setConfirmPassword('')
})
.catch((err)=>{
    console.log(err)
    Swal.fire({
  icon: "error",
  text: "There is an error,try again",
});
})
}
function switchLogin(){
    navigate("/login")
}
return (
<>
<div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-8">

  <div className="w-full lg:w-1/2 flex flex-col items-center text-center mb-10 lg:mb-0">
    <h2 className="text-black/70 text-[1.5rem] md:text-4xl lg:text-4xl font-bold mb-6 leading-snug">
      Welcome to <br />
      <span className="text-black/70">Project Management System</span>
    </h2>
<img
      className="w-60 md:w-80 lg:w-80 mt-4"
      src="/Forms_Customizable_Isometric_Illustrations___Amico_Style-removebg-preview.png"
      alt="logo-signup"
    />
  </div>

  <div className="w-full lg:w-1/2 flex justify-center">
    <div className="w-full max-w-md p-8 rounded bg-white ">
      <h2 className="text-2xl font-bold mb-6 text-center text-black/70">
        Create Your Account!
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

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

        <div>
          <label className="block mb-1 font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          onClick={handelSignup}
          className="w-full bg-purple-900 hover:bg-purple-800 text-white py-2 rounded font-semibold transition duration-200"
        >
          Create Account
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-900 font-medium hover:underline cursor-pointer"
            onClick={switchLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default Signup