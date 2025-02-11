import React from "react";
import { Link } from "react-router-dom";

const SupportComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh", // Full screen height
        background: "linear-gradient(to right, #283048, #859398)", // Sleek modern gradient
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <div className="text-center w-100">
        <h2
          className="display-4 fw-bold mb-4 text-white"
          style={{
            fontSize: "3rem",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", // Adding shadow to the title for emphasis
          }}
        >
          Support Our Mission
        </h2>
        <p
          className="lead fs-4 mb-4"
          style={{
            color: "white",
            fontWeight: "300",
            textShadow: "1px 1px 6px rgba(0, 0, 0, 0.2)", // Adding shadow for text to stand out
          }}
        >
          Your contribution helps us advance the cause of the people and build a stronger, fairer future.
          Join us in creating change that matters.
        </p>


        <a
        


           as={Link}
                to="/donate"
        
          className="btn btn-light btn-lg"
          style={{
            background: "linear-gradient(to right, #43e97b, #38f9d7)", // Gradient for the button
            color: "black",
            fontWeight: "bold",
            padding: "12px 30px",
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textTransform: "uppercase",
            transition: "background 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          Donate Now
        </a>







      </div>
    </div>
  );
};

export default SupportComponent;
