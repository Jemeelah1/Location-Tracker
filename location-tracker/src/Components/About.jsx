import React from "react";
import location from "../Assets/locationImg.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-primary">
      <div className="className">
        <img src={location} alt="location" className="mt-6 ml-80" />
        <h2 className="text-white font-bold pt-10 text-center">
          At Find, we're dedicated to guiding you to the heart of every
          destination. Our platform connects you
          <br /> with authentic experiences and must-see spots, ensuring each
          adventure is unforgettable.
          <br />
          Let Find be your compass in exploring the essence of every place.
        </h2>
        <div className="pt-10">
          <Link
            to="/contact"
            style={{
              background: "#5E1AE5",
              color: "white",
              textAlign: "center",
              marginLeft: "26em",
              width: "50%",
            }}
            className="px-4 py-2 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
