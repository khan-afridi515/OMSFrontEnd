import React, { useRef, useState } from 'react'



const MyProfile = () => {

  const [show, setShow] = useState(false);
  const [leaveShow, setleaveShow] = useState(false);

  const myRef = useRef();
  const cardRef = useRef();

  const showCard = () => {
    myRef.current.style.display = "block";
  }

  const leaveCard = () => {
    cardRef.current.style.display = "block";
  }

  const hideCard = () => {
    myRef.current.style.display = "none";
  }

  const hideLeaveCard = () => {
    cardRef.current.style.display = "none";
  }
  

  return (
    <div className='w-full'>
      <div className='relative w-full'>
        <div className='relative w-full h-65 bg-blue-400 border-black border-b-5'>
          
        </div>

        <div className='absolute top-50 left-5 flex flex-col gap-2'>
          <img src="/lion.jpg" className="w-28 h-28 rounded-full " alt="" />
          <h3 className='text-3xl font-bold'>Aziz Khan</h3>

        </div>

        

      </div>
    </div>
  )
}

export default MyProfile
