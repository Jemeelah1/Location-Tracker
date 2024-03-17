import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./Validate";
import hero from "../Assets/hero.svg";

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex justify-start items-center"
      >
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="  mx-auto  font-avenir-light space-y-4 items-center"
        >
          <div className=" container flex flex-wrap items-center justify-between mx-auto text-justify">

            {/* Hero image */}
            <div className="text-l pb-24 pt-20 relative" style={{paddingRight: "20px"}}>
              <p className=" text-3xl mr-4 font-semibold relative">
                <img src={hero} alt="logo" className="mr-4" />
              </p>
              <div className="absolute bottom-0 left-16 bg-purple rounded-md text-white text-center mb-40 p-2 w-48">
                <button
                  onClick={handleOpen}
                  type="button"
                  className="text-white"
                >
                  Start sharing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;