import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";


const Fullscreen = () => {
  return (
    <>
      <div className="flex flex-grow bg-primary">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default Fullscreen;