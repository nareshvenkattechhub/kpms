import React from 'react';

const VoiceYourConcerns = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh", // Ensure it fills the full page height
        background: "linear-gradient(to right, #ff6a00, #ee0979)", // Gradient background
        borderRadius: "10px",
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
          Voice Your Concerns
        </h2>
        <p
          className="lead fs-3 fw-bold mb-4"
          style={{
            color: "black",
            fontWeight: "300",
            textShadow: "1px 1px 6px rgba(0, 0, 0, 0.2)", // Adding shadow for text to stand out
          }}
        >
          Have an issue you want us to address? Submit your complaint and help us build a better, more
          responsive community.
        </p>
        <a
          href="/complaint"
          className="btn btn-dark btn-lg"
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
          Submit Complaint
        </a>
      </div>
    </div>
  );
};

export default VoiceYourConcerns;
