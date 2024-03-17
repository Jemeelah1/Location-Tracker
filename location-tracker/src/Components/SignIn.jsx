import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../Assets/Find-logo.png";
import styles from "./SignUp.module.css";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const checkData = (obj) => {
    const { email, password } = obj;
    const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
    const api = axios
      .get(urlApi)
      .then((response) => response.data)
      .then((data) =>
        data.ok
          ? notify("You logged in to your account successfully", "success")
          : notify("Your password or email is wrong", "error")
      );
    toast.promise(api, {
      pending: "Loading your data...",
      success: false,
      error: "Something went wrong!",
    });
  };

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkData(data);
  };

  return (
    <>
      <div className="flex justify-center items-center text-white bg-primary h-screen">
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" style={{ width: "80px", height: "auto" }} />
          <h2 className="font-bold text-2xl">Welcome back!</h2>
          <form className={styles.formLogin} onSubmit={submitHandler} autoComplete="off">
            <div className="mb-4">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={data.email}
                placeholder="E-mail"
                onChange={changeHandler}
                onFocus={focusHandler}
                autoComplete="off"
                required  // Adding required attribute
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={changeHandler}
                onFocus={focusHandler}
                autoComplete="off"
                required  // Adding required attribute
              />
            </div>

            <div className="text-right mb-4">
              <Link to="/forgot" className="text-purple text-md hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              style={{
                 background: "#5E1AE5",
                 color: "white",
                 textAlign: "center",
                 marginLeft: "6em",
                 width: "60%",
              }}
              className="bg-purple text-white px-4 py-2 rounded-md"
              type="submit"
            >
              Login
            </button>

            <span className="text-gray-500 text-sm block mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple hover:underline">
                Create account
              </Link>
            </span>
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

export default SignIn;
