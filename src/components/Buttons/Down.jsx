import React, { useEffect, useState } from "react";

const Down = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 40 ? 0 : prev + 2)); // Moves down and resets
    }, 100); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      style={{
        width: "60px",
        height: "90px",
        borderRadius: "50%",
        background: "black",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "orange",
          borderRadius: "50%",
          position: "absolute",
          top: `${position}px`, // Moves down
          transition: "top 0.2s linear",
        }}
      />
    </button>
  );
};

export default Down;
