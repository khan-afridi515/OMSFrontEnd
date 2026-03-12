import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  // const handleRoute = () => {
  //   window.location.href = "/profile";
  // }

  // const myData = JSON.parse(localStorage.getItem("data"));
  // console.log("myData", myData);

  const barRef = useRef();
  const timeRef = useRef();
  const divRef = useRef();

  const barIn = () => {
    divRef.current.style.display = "block";
    barRef.current.style.display = "none";
  }

  const timeOut = () => {
    divRef.current.style.display = "none";
    barRef.current.style.display = "block";
  }



  return (
    <div className='relative'>
      <div className='flex justify-between border-b-1 sm:px-10 px-4 py-3 w-full'>
        <h1 className='sm:text-3xl text-[25px]  text-black font-bold sm:mt-0 mt-1'>AptechMedia</h1>
        {/* <i className="fa-solid fa-user text-3xl mt-1"></i> */}

        <div className='sm:block hidden'>
          <div className="flex gap-4 mt-2">

            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-gray-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/leave"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-gray-600"
              }
            >
              Leave
            </NavLink>

            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-gray-600"
              }
            >
              Event
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-gray-600"
              }
            >
              Attendance
            </NavLink>

          </div>
        </div>

        <div className='flex gap-5'>
          <div className='block sm:hidden mt-2'> 
          <i className='fa-solid fa-bars text-3xl' onClick={barIn} ref={barRef}></i>
          </div>
         
          <Link to="/profile"><div>

          <img src="/lion.jpg" alt="No image here" className='w-10 h-10 rounded-full' />
        </div></Link>
        </div>
        
      </div>

      <div className='top-16.5 right-1 fixed hidden border-2 bg-white rounded-md mynavbar z-50' ref={divRef}>
      <div className='w-45 px-5 py-5 telative'>
        <i className='fa-solid fa-times text-2xl absolute top-2 right-2 cusor-pointer' onClick={timeOut} ref={timeRef}/>
          <div className="flex flex-col gap-4 mt-2">

            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-black"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/leave"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-black"
              }
            >
              Leave
            </NavLink>

            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-black"
              }
            >
              Event
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "text-md font-bold text-purple-500 border-b-2 border-purple-500"
                  : "text-md font-bold text-black"
              }
            >
              Attendance
            </NavLink>

          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Navbar
