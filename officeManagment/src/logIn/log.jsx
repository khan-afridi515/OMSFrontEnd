import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userlocalHost } from '../localHost';
import axios from 'axios';
import "./log.css";


const Log = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const holeUrl = `${userlocalHost}/api/v0/users/loginUser`;

  const myNav = useNavigate();

  
  const data = {
    email: email, 
    password: password
  }
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   if(!email || !password){
  //     alert("Please fill all the fields");
  //     return;
  //   }
  //   else{
  //     axios.post(holeUrl, data)
  //     .then((res)=>{
  //       console.log("res", res.data.data.user);
  //       console.log("token", res.data.data.token);
  //       localStorage.setItem("data", JSON.stringify(res.data.data.user));

  //       res && alert("User logged in successfully");
  //     })
  //     .catch((err)=>{
  //       console.log("err", err);
  //     })
  //   }
  // }


  const handleLogin = (e) => {
    e.preventDefault();

    setEmail("");
  setPassword("");

    myNav("/home");

  }


  return (
    <div className='flex justify-center items-center w-full h-[85vh]'>
      <div className='px-8 py-12 border border-3 rounded-md'>
        <h1 className='text-2xl font-bold text-black text-center mb-7'>Log In</h1>
        <div>
            <form action="" onSubmit={handleLogin} className='flex flex-col gap-6'>
                <input type="text" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className=' w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md '/>
                <div className='flex flex-col'>
                <input type="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md'/>
                 <p className='text-[14px] self-end'>Forgot Password</p>
                </div>
                <button type="submit" className='py-2 text-[16px] px-3 text-white text-xl font-bold text-white text-center bg-blue-500 rounded-md field'>Log In</button>
            </form>
            <p className='text-center text-black mt-2'>Don't have an Account?<Link to="/sign"><span className='text-blue-400'>Sign Up</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Log
