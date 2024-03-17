import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import hero from "../Assets/hero.svg";
import { Link } from "react-router-dom";
import map from "../Assets/map.jpg";
import maplady from "../Assets/mapLady.png";

function LandingPage() {

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
        className="flex justify-start items-center bg-primary text-white"
      >
        <div
          className="mx-auto  font-avenir-light space-y-4 items-center"
        >
          <div className=" container flex flex-wrap items-center justify-between mx-auto text-justify">
            {/* Hero image */}
            <div
              className="text-l pb-10 pt-10 relative"
              style={{ paddingRight: "20px" }}
            >
              <p className=" text-2xl mr-4 font-semibold relative">
                <img src={hero} alt="logo" className="mr-4" />
              </p>
              <div className="absolute bottom-0 left-16 bg-purple rounded-md text-white text-center mb-32 p-2 w-48">
                <Link
                  to="/map"
                  onClick={handleOpen}
                  type="button"
                  className="text-white"
                >
                  Start sharing
                </Link>
              </div>
            </div>

            {/* 2nd section */}
            <div className="border-4 border-purple rounded-md flex items-center justify-between text-justify px-5 py-5 mb-10 bg-primary ml-6">
              <div>
                <h1 className="text-2xl font-semibold pb-2">New to find. ?</h1>
                <p>
                  We at find. will assist you with everything <br />
                  you need to know about maps, how they operate, and which ones
                  are the
                  <br />
                  how to navigate. So let's get started.
                </p>
              </div>
              <div className="bg-purple text-white rounded-md text-center shadow-md ml-20 mt-4 p-2 w-48">
                <Link to="/contact" className="hover:text-primary">
                  <input type="button" value="Contact us now" />
                </Link>
              </div>
            </div>

            {/* 3rd SECTION */}
            <div className="space-y-4 items-center text-center ml-40 mb-10 mt-6">
              <h1 className="text-2xl text-l font-bold">
                find. Value propositions
              </h1>
              <p>
              Discover Your World: Navigate Your Surroundings with Precision and Ease.
              </p>
            </div>
          </div>

          {/* 4th SECTION */}
          <div className="relative flex border-4 border-purple rounded-md py-5 mr-16 space-x-10">
            <div className="className">
            <h1 className="text-xl text-l font-bold mt-4 mb-2 pl-12">
                About Us
              </h1>
            <h2 className="text-white font-bold pt-4 py-10 pl-10">
              At Find, we're dedicated to guiding you to the heart of every<br />
              destination. Our platform connects you
              with authentic<br /> experiences and must-see spots, ensuring each<br />
              adventure is unforgettable.    
            </h2>
            <div className="bg-purple text-white rounded-md text-center mt-2 ml-10 p-2 w-48">
              <Link to="/about" className="hover:text-primary">
                <input type="button" value="Learn more" />
              </Link>
            </div>
            </div>
            <div className="top-0 right-2 mt-[-80px] mr-2 absolute">
              <img src={maplady} alt="logo" className="" />
            </div>
          </div>

          {/* 5th SECTION */}
          <div className="space-y-4 items-center text-center ml-30 mb-10 pt-16">
            <h1 className="text-2xl text-l font-bold">
                find. Mission
            </h1>
            <p className="pb-10">
            Empowering exploration and connection, Find is on a mission to guide individuals to the heart of every locale,<br /> fostering unforgettable experiences and authentic connections along the way
            </p>
          </div>
          <div className="mt-12 flex justify-center items-center">
            <img src={map} alt="logo" className="w-full h-64 mb-6 mr-20" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
