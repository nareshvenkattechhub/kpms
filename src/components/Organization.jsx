import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const organizationRoles = [
  {
    title: "President",
    description:
      "The President oversees the strategic direction of the party and is responsible for major decisions.",
    gradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach
    detailedDescription: (
      <>
        <h5>The President shall be the Chief Executive of the Association</h5>
        <ul>
          <li>Exercises overall control over the association’s affairs.</li>
          <li>Presides over all key meetings and decision-making bodies.</li>
          <li>Ensures administrative and legislative measures benefit members.</li>
          <li>Operates bank accounts jointly with the General Secretary.</li>
          <li>Manages urgent expenditures with later approval.</li>
        </ul>
      </>
    ),
  },
  {
    title: "General Secretary",
    description:
      "The General Secretary handles the internal functioning and administration of the party.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
  {
    title: "Treasurer",
    description:
      "The Treasurer is responsible for the financial management of the party.",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise
  },
  {
    title: "Vice President",
    description:
      "The Vice President assists the President and steps in their absence.",
    gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose
  },
  {
    title: "Joint Secretary",
    description:
      "The Joint Secretary assists the General Secretary in their duties and acts in their absence.",
    gradient: "linear-gradient(135deg, #ffcc00, #ff6699)", // Yellow-Pink
  },
];

function Organization() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleLearnMoreClick = (role) => {
    setSelectedRole(role);
  };

  const handleBackClick = () => {
    setSelectedRole(null);
  };

  return (
    <>

      <div className="container  ">
        {/* Title Section */}
        <div
          className="text-center p-3 mb-4 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
            borderRadius: "50%",
            color: "#333",
            fontSize: "2.5rem",
            letterSpacing: "0.5vh",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Our Organization
        </div>

        {/* Role Cards */}
        <div className="row g-4 justify-content-center">
          {selectedRole ? (
            <div className="col-md-12">
              <div
                className="card shadow-lg border-0 h-100 text-center"
                style={{
                  background: selectedRole.gradient,
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  className="card-body d-flex flex-column align-items-center p-4"
                  style={{
                    background: "linear-gradient(to bottom, #ffffff, #f0f4f8)",
                    borderRadius: "15px",
                  }}
                >
                  {/* Title */}
                  <div
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "250px",
                      height: "60px",
                      background: selectedRole.gradient,
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "bold",
                      borderRadius: "15px",
                      textAlign: "center",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    {selectedRole.title}
                  </div>

                  {/* Description */}
                  <p className="card-text text-muted" style={{ fontSize: "18px", maxWidth: "80%", lineHeight: "1.5" }}>
                    {selectedRole.description}
                  </p>

                  {/* Detailed Description */}
                  {selectedRole.detailedDescription && (
                    <div className="mt-3 text-start" style={{ width: "100%", maxWidth: "700px", fontSize: "16px", lineHeight: "1.6" }}>
                      {selectedRole.detailedDescription}
                    </div>
                  )}

                  {/* Back Button */}
                  <button
                    onClick={handleBackClick}
                    className="btn btn-secondary btn-lg mt-4 px-5 py-2"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      borderRadius: "30px",
                      transition: "background 0.3s ease",
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          ) : (
            organizationRoles.map((role, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="card shadow-lg border-0 h-100 text-center"
                  style={{
                    background: role.gradient,
                    borderRadius: "15px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    className="card-body d-flex flex-column align-items-center p-4"
                    style={{
                      background: "linear-gradient(to right, #ffffff, #f8f9fa)",
                      borderRadius: "15px",
                    }}
                  >
                    <div
                      className="mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "220px",
                        height: "50px",
                        background: role.gradient,
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderRadius: "15px",
                        textAlign: "center",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {role.title}
                    </div>

                    <p className="card-text text-muted">{role.description}</p>

                    <button
                      onClick={() => handleLearnMoreClick(role)}
                      className="btn btn-primary btn-lg mt-3 px-4"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Organization;
