import React, { useState } from "react";
import background from "../Assets/background-images.jpeg";
import Box from "@mui/material/Box";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const chaeckData = (obj) => {
    const { email, password } = obj;
    const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
    const api = axios
      .get(urlApi)
      .then((response) => response.data)
      .then((data) =>
        data.ok
          ? notify("You login to your account successfully", "success")
          : notify("Your password or your email is wrong", "error")
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
    chaeckData(data);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex justify-end items-center"
      >
        <Box
          sx={{
            width: 700,
            height: 500,
            backgroundColor: "white",
          }}
          className="mr-32 mb-24 bg-white rounded-md"
        >
          <div className="">
            <div className="pt-16 space-y-12 flex justify-center align-middle">
              <form
                className={styles.formLogin}
                onSubmit={submitHandler}
                autoComplete="off"
              >
                <div>
                  <div>
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      placeholder="E-mail"
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={data.password}
                      placeholder="Password"
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="text-end pb-4 hover-underline">
                  <Link to="/forgot">
                    <span className="text-orange text-md">
                      Forgot Password?
                    </span>
                  </Link>
                </div>

                <div>
                  <button
                    style={{
                      background: "#CE5A29",
                      color: "white",
                      textAlign: "center",
                      marginLeft: "6em",
                      width: "60%",
                    }}
                    type="submit"
                  >
                    Login
                  </button>

                  <span
                    style={{
                      color: "#a29494",
                      textAlign: "center",
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    Don't have a account?{" "}
                    <Link to="/signup">
                      <span className="text-orange">Create account</span>
                    </Link>
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          {/* go back link */}
          <div className="text-center mt-6 text-orange items-center mx-auto hover-underline">
            <Link to="/" className="text-orange hover-underline pb-10">
              <p>Go Back</p>
            </Link>
          </div>
        </Box>
      </div>
    </>
  );
}

export default SignIn;