import React from 'react'
import Navbar from './navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MyProfile from './profile/myProfile'
import Logg from './logIn/logg'
import SignIn from './signUp/signIn'
import MyLeave from './leave/myleave'
import EventRoute from './Event/eventRoute'
import Whole from './attandance/wholepage'
import Record from './attandance/record'
import Homes from './homes'





const App = () => {
  return (
     <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logg/>} />
        <Route path="/sign" element={<SignIn/>} />
        <Route path="/profile" element={<MyProfile/>} />
        <Route path="/leave" element={<MyLeave/>} />
        <Route path="/event" element={<EventRoute/>} />
        <Route path="/attandance" element={<Whole/>} />
        <Route path="/history" element={<Record/>} />
        <Route path="/home" element={<Homes/>} />
      </Routes>
      </BrowserRouter>
      
    </div> 
  )
}

export default App
