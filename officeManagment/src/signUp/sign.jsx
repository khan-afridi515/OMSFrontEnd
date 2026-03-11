import React, { useRef, useState } from 'react';
import { userlocalHost } from '../localHost';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../logIn/log.css";

const Sign = () => {
  const [img, setImg] = useState();
  const [preview, setPreview] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  const myRef = useRef();

  const takeImg = () => {
    myRef.current.click();
  }

  const handleImg = (e) => {
    const file = e.target.files[0];
    setImg(file);

    const myImg = URL.createObjectURL(file);
    setPreview(myImg);
  }

  const holeUrl = `${userlocalHost}/api/v0/users/postUser`;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("contact", mobile);
  formData.append("password", password);
  formData.append("img", img);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if(!name || !email || !mobile || !password || !cPassword){
  //     alert("Please fill all the fields");
  //     return;
  //   }
  //   else if(password !== cPassword){
  //     alert("Password and Confirm Password do not match");
  //   }else{
  //      axios.post(holeUrl, formData, {
  //       headers:{
  //         "Content-Type":"myltipart/form-data"
  //       }
  //      })
  //      .then((res)=>{
  //       console.log("res", res);

  //       res && alert("User created successfully");

  //       console.log("resData", res.data.user);
       
  //      })
  //   }

  //   console.log("myUrl", holeUrl);
  //   console.log("data", name, email, mobile, password, cPassword, img);

  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("myUrl", holeUrl);
  }

  return (
    <div>
      <div className='flex justify-center items-center w-full h-[110vh]'>
      <div className='px-8 py-12 border border-3 rounded-md'>
        <h1 className='text-2xl font-bold text-black text-center mb-3'>Sign Up</h1>
        <div>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6'>

                <div className='relative self-center flex flex-col items-center my-3'>
                  <img src={preview} alt="No image here"  className='w-25 h-25 rounded-full border-1' />
                  <input type="file" accept='image/*' ref={myRef} name="file" onChange={handleImg} className='hidden' />
                  <i className="fa-solid fa-camera text-2xl absolute top-18 left-22" onClick={takeImg}></i>
                </div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name' className=' w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md'/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className=' w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md'/>
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter your Mobile Number' className=' w-80 py-2 text-[16px] px-3 bg-gray-400 text-white rounded-md'/>

                <div className='w-full flex gap-3'>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='w-38 py-2 text-[15px] px-3 bg-gray-400 text-white rounded-md'/>
                <input type="password" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} placeholder='Enter your confirm password' className='w-38 py-2 text-[15px] px-3 bg-gray-400 text-white rounded-md'/>

                </div>
                <button type="submit" className='py-2 text-[16px] px-3 text-white text-xl font-bold text-white text-center bg-blue-500 rounded-md field'>Sign Up</button>
            </form>
             <p className='text-center text-black mt-1'>Already have an Account <Link to="/"><span className='text-blue-500'>Log In</span></Link></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sign
