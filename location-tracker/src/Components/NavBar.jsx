import React from "react";
import { NavLink } from "react-router-dom";
import heart from "../Assets/heart.svg";
import car from "../Assets/car.svg";
import home from "../Assets/home.svg";
import location from "../Assets/location.svg";
import family from "../Assets/Family.svg";
import logo from "../Assets/Find-logo.png";

function NavBar() {
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
          <NavLink to="/" style={active} className=" flex text-white hover:text-purple mr-4 mb-4">
            <img src={home} alt="logo" className="mr-4" />
            Home
          </NavLink>
          <NavLink to="/map" style={active} className="flex text-white hover:text-purple mr-4 mb-4">
           <img src={location} alt="logo" className="mr-4" />
            Map
          </NavLink>
          <NavLink to="/tools" style={active} className=" flex text-white hover:text-purple mr-4 mb-4">
           <img src={heart} alt="logo" className="mr-4" />
           Saved locations
          </NavLink>
          <NavLink to="/profile" style={active} className="flex text-white hover:text-purple mr-4 mb-4">
           <img src={family} alt="logo" className="mr-4" />
           Friends & Family
          </NavLink>
          <NavLink to="/community" style={active} className="flex text-white hover:text-purple mr-4 mb-4">
           <img src={car} alt="logo" className="mr-4" />
            Share my trip
          </NavLink>
          <NavLink to="/signin" style={active} className="text-white hover:text-purple mr-4 mb-4">
            Sign-In
          </NavLink>
      </div>
    </div>
  );
}

export default NavBar;