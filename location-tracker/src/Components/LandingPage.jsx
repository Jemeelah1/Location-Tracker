import React, { useEffect, useState } from "react";
import background from "../Assets/background2.avif";
import Box from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./Validate";
import { ToastContainer, toast} from "react-toastify";
import { notify } from "./Toast";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
// Axios
import axios from "axios";

function LandingPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    IsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const changeEmailHandler = (event) => {
    if (event.target.name === "IsEmailAccepted") {
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
    if (!Object.keys(errors).length) {
      // Pushing data to database usuing PHP script
      const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${data.email.toLowerCase()}&password=${
        data.password
      }&register=true`;
      const pushData = async () => {
        const responseA = axios.get(urlApi);
        const response = await toast.promise(responseA, {
          pending: "Check your data",
          success: "Checked!",
          error: "Something went wrong!",
        });
        if (response.data.ok) {
          notify("You signed Up successfully", "success");
        } else {
          notify(
            "You have already registered, log in to your account",
            "warning"
          );
        }
      };
      pushData();
    } else {
      notify("Please Check fileds again", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        IsAccepted: false,
        IsEmailAccepted: false,
      });
    }
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
        className="flex justify-start items-center"
      >
        <div className="className">
          <Box
            sx={{
              width: 700,
              height: 700,
              backgroundColor: "white",
            }}
            className="ml-24 mb-20 bg-white rounded-md"
          >
            <div className="pt-20 space-y-12 flex justify-center align-middle">
              <form
                className={styles.formLogin}
                onSubmit={submitHandler}
                autoComplete="off"
              >
                <div>
                  <div
                    className={
                      errors.email && touched.email
                        ? styles.unCompleted
                        : !errors.email && touched.email
                        ? styles.completed
                        : undefined
                    }
                  >
                    <label>Email</label>
                    <input
                      className=""
                      type="text"
                      name="email"
                      value={data.email}
                      placeholder="E-mail"
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      autoComplete="off"
                    />
                    {/* <img src={emailIcon} alt="" /> */}
                  </div>
                  {errors.email && touched.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>
                <div>
                  <div
                    className={
                      errors.password && touched.password
                        ? styles.unCompleted
                        : !errors.password && touched.password
                        ? styles.completed
                        : undefined
                    }
                  >
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
                    {/* <img src={passwordIcon} alt="" /> */}
                  </div>
                  {errors.password && touched.password && (
                    <span className={styles.error}>{errors.password}</span>
                  )}
                </div>
                <div>
                  <div
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? styles.unCompleted
                        : !errors.confirmPassword && touched.confirmPassword
                        ? styles.completed
                        : !errors.confirmPassword && touched.confirmPassword
                        ? styles.completed
                        : undefined
                    }
                  >
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      placeholder="Confirm Password"
                      onChange={changeHandler}
                      onFocus={focusHandler}
                      autoComplete="off"
                    />
                    {/* <img src={passwordIcon} alt="" /> */}
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <span className={styles.error}>
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
                <div className="">
                  <div className={styles.terms}>
                    <input
                      type="checkbox"
                      name="IsEmailAccepted"
                      value={data.IsEmailAccepted}
                      id="accept"
                      onChange={changeEmailHandler}
                      onFocus={focusHandler}
                    />
                    <label htmlFor="accept">
                    Sign up for Emails to get updates from us on <br /> products and new offers
                      services
                    </label>
                  </div>
                  {errors.IsEmailAccepted && touched.IsEmailAccepted && (
                    <span className={styles.error}>{errors.IsEmailAccepted}</span>
                  )}
                </div>
                <div className="">
                  <div className={styles.terms}>
                    <input
                      type="checkbox"
                      name="IsAccepted"
                      value={data.IsAccepted}
                      id="accept"
                      onChange={changeHandler}
                      onFocus={focusHandler}
                    />
                    <label htmlFor="email">
                      By signing up, you agree to Coincoach privacy<br /> and terms of
                      services
                    </label>
                  </div>
                  {errors.IsAccepted && touched.IsAccepted && (
                    <span className={styles.error}>{errors.IsAccepted}</span>
                  )}
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
                    Sign Up
                  </button>
                  <span
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    Already have a account?{" "}
                    <Link to="/signin">
                      <span className="text-orange">Sign In</span>
                    </Link>
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}

export default LandingPage;