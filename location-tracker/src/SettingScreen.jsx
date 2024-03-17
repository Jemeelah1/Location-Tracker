import React from 'react'
import { Outlet } from "react-router-dom";
import Settingbar from './Components/Settingbar';


const SettingScreen = () => {
  return (
    <>
      <div className="flex flex-grow bg-primary">
      <Settingbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default SettingScreen;