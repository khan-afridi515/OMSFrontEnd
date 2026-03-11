import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const handleRoute = () => {
    window.location.href = "/profile";
  }

  // const myData = JSON.parse(localStorage.getItem("data"));
  // console.log("myData", myData);



  return (
    <div className='px-10 py-3 border-b-1'>
      <div className='flex justify-between'>
        <h1 className='text-3xl text-black font-bold'>AptechMedia</h1>
        {/* <i className="fa-solid fa-user text-3xl mt-1"></i> */}

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
        <div>

          <img src="/lion.jpg" alt="No image here" className='w-10 h-10 rounded-full' onClick={handleRoute} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
