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

return (
<>
<div>
    <h2>Create Your Account!</h2>
    {/* form */}
    <div>
    <label>Username:</label>
    <input className='border' type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

        <label>Email:</label>
    <input className='border' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <label>Password:</label>
    <input className='border' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        <label>Confirm password:</label>
    <input className='border' type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
    <button onClick={handelSignup}>Create</button>
    </div>
</div>
</>
  )
}

export default Signup