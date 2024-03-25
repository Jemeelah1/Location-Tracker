import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signoutlogo from "../Assets/loggedout.png";
import styles from "./SignUp.module.css";

function Signout() {
    const navigate = useNavigate();

    const handleSignout = () => {
      // Clear user session logic goes here
      // For example, clearing localStorage, session storage, or sending a request to backend to invalidate the session/token
  
      navigate("/signin");
  
      toast.success("You have been successfully signed out!");
    };
 

 

  return (
    <>
      <div className="flex justify-center items-center text-white bg-primary h-screen">
        <div className="flex flex-col items-center">
          <img src={signoutlogo} alt="logo" style={{ width: "300px", height: "auto" }} />
          <h4 className="font-bold text-2xl">Are you sure you want to logout ?</h4>
          <form className={styles.formLogin} autoComplete="off">
            <button
              style={{
                 background: "#5E1AE5",
                 color: "white",
                 textAlign: "center",
                 marginLeft: "11em",
                 width: "30%",
              }}
              className="bg-purple text-white text-center py-2 rounded-md"
              type="submit"
            >
              Log out
            </button>
          </form>
          <ToastContainer />
          <div className="text-center mb-10 bg-primary">
            <Link to="/" className="text-purple hover:underline">
              <p>Go Back</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signout;
