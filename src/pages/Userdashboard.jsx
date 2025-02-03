import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaWhatsapp, FaDownload, FaShare } from "react-icons/fa";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [showShare, setShowShare] = useState(false);
  const [username, setUsername] = useState("Guest");
  const cardRef = useRef(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    html2canvas(cardRef.current, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "membership_card.png";
      link.click();
    });
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298)", padding: "20px" }}
    >
      {/* Greeting Card */}
      <div
        className="card text-dark text-center fs-3 shadow-lg mb-4"
        style={{
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          width: "70vh",
          padding: "20px",
          borderRadius: "15px",

          fontSize:"20px"
        }}
      >
        <h2>Hello, {username} Welcome to Karshaka Praja Margh!</h2>
      </div>

      {/* Upload & Membership Cards */}
      <div className="row mt-3 align-items-center w-75">
        {/* Image Upload Card */}
        <div className="col-lg-4 d-flex flex-column align-items-center">
          <div
            className="card border-0 shadow-lg d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "130mm",
              height: "80mm",
              fontSize: "14px",
              borderRadius: "10px",
              padding: "8px",
              background: "#343a40",
              color: "yellow",
            }}
          >
            {/* Display uploaded image OR default KPM logo */}
            {image ? (
              <img
                src={image}
                alt="Uploaded Preview"
                className="rounded border mt-2"
                style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ccc" }}
              />
            ) : (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#ffcc00",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  textAlign: "center",
                  border: "3px solid white",
                }}
              >
                KPM
              </div>
            )}
          </div>
          {/* Choose Image Button - Below Upload Card */}
          <input type="file" className="btn btn-warning mt-3" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Membership Card */}
        <div className="col-lg-8 d-flex flex-column align-items-center">
          <div
            ref={cardRef}
            className="card border-0 shadow-lg"
            style={{
              width: "130mm",
              height: "80mm",
              fontSize: "14px",
              borderRadius: "10px",
              padding: "8px",
              background: "linear-gradient(135deg, #1f4037, #99f2c8)",
            }}
          >
            {!showShare ? (
              <>
                <div
                  className="card-header text-center text-white py-2"
                  style={{
                    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                  }}
                >
                  <h5 className="mb-0 fs-1 ">KPM Membership</h5>
                </div>
                <div className="card-body d-flex align-items-center p-3">
                  <div className="me-3">
                    {image ? (
                      <img
                        src={image}
                        alt="Member"
                        className="rounded border"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          border: "2px solid #ccc",
                        }}
                      />
                    ) : (
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          backgroundColor: "#ffcc00",
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "24px",
                          textAlign: "center",
                          border: "3px solid white",
                        }}
                      >
                        KPM
                      </div>
                    )}
                  </div>
                  <div className="d-flex flex-column">
                    <p className="mb-2 fw-bold text-dark fs-3">
                      <span className="text-dark">Name:</span> {username}
                    </p>
                    <p className="mb-2 fw-bold text-dark fs-3">
                      <span className="text-primary">Pincode:</span> 123456
                    </p>
                    <p className="mb-0 fw-bold text-dark fs-3">
                      <span className="text-primary">Member ID:</span> 78910
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-around align-items-center py-4">
                <FaFacebook size={40} color="#4267B2" />
                <FaTwitter size={40} color="#1DA1F2" />
                <FaWhatsapp size={40} color="#25D366" />
              </div>
            )}
          </div>

          {/* Action Buttons - Below Membership Card */}
          <div className="mt-3">
            <button
              className="btn mx-2"
              onClick={() => setShowShare(!showShare)}
              style={{
                background: "linear-gradient(135deg, #ff7b7b, #ff4d6d)",
                color: "white",
                fontSize: "18px",
                borderRadius: "10px",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <FaShare /> {showShare ? "Back to Card" : "Share"}
            </button>
            <button
              className="btn mx-2"
              onClick={handleDownload}
              style={{
                background: "linear-gradient(135deg, #61c0bf, #00b8a9)",
                color: "white",
                fontSize: "18px",
                borderRadius: "10px",
                padding: "10px 20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <FaDownload /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
