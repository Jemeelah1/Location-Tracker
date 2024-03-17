import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Find-logo.png";
import profile from "../Assets/profile.svg";
import padlock from "../Assets/padlock.svg";
import help from "../Assets/help.svg";
import about from "../Assets/about.svg";
import home from "../Assets/home.svg";
import signout from "../Assets/signout.svg";


function Settingbar() {
  const active = ({ isActive }) => {
    console.log(isActive)
    return { color: isActive ? "#5E1AE5" : ""}
  }

  return (
    <div className="bg-primary text-white pr-20">
      <div className="container h-screen flex flex-col" style={{paddingTop: "20px", paddingLeft: "20px"}}>
        {/* logo */}
          <NavLink to="/" style={active} className="flex mb-4">
            <img src={logo} alt="logo" className="mr-4" style={{ width: "80px", height: "auto" }} />
          </NavLink>
          <NavLink to="/account" style={active} className=" flex text-white hover:text-purple mr-4 mb-4">
            <img src={profile} alt="logo" className="mr-4" style={{ filter: 'brightness(0) invert(1)' }} />
            Account
          </NavLink>
          <NavLink to="/password" style={active} className="flex text-white hover:text-purple mr-4 mb-4">
           <img src={padlock} alt="logo" className="mr-4" style={{ filter: 'brightness(0) invert(1)' }} />
            Change Password
          </NavLink>
          <NavLink to="/about" style={active} className=" flex text-white hover:text-purple mr-4 mb-4">
           <img src={about} alt="logo" className="mr-4" style={{ filter: 'brightness(0) invert(1)' }} />
           About us
          </NavLink>
          <NavLink to="/contact" style={active} className="flex text-white hover:text-purple mr-4 mb-4">
           <img src={help} alt="logo" className="mr-4" style={{ filter: 'brightness(0) invert(1)' }} />
           Contact us
          </NavLink>
          <NavLink to="/" style={active} className=" flex text-white hover:text-purple mr-4 mb-4 mt-64">
            <img src={home} alt="logo" className="mr-4" />
            Home
          </NavLink>
          <NavLink to="/signin" style={active} className="flex text-white hover:text-purple mr-4 mb-4">
            <img src={signout} alt="logo" className="mr-4" style={{ filter: 'brightness(0) invert(1)' }} />
            SignOut
          </NavLink>
      </div>
    </div>
  );
}

export default Settingbar;