import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



import Navigation from "../components/Navigation";

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
              <li>Exercise overall control over the affairs of the Association.</li>
              <li>Preside over all the meetings of the Central and State Council, Central and State Executive Committee, and the Parliament, Secretariat.</li>
              <li>Keep close contact with the central and state Branches, City Centre, Spl. Branches, and Assembly Constituencies.</li>
              <li>Closely watch the administrative and legislative measures directly affecting the interests of the Employers and Employees and initiate appropriate action.</li>
              <li>Appoint the Staff within the scale approved by the Executive Committee in consultation with the General Secretary.</li>
              <li>Consult General Secretary in all important matters.</li>
              <li>Have power to permit expenditure in excess of the limit prescribed in article VIII (3) (c) in case of urgency and place it before the next Executive Committee for approval.</li>
              <li>The President shall be the Chief Executive of the Association of Central and all States.</li>
              <li>Operate Bank Accounts with General Secretary.</li>
            </ul>
          </>
        ),
      }
      ,

      {
        title: "Vice President",
        description:
          "The Vice President assists the President and steps in their absence.",
        gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose
        detailedDescription: (
          <>
            <h5>The Vice President shall support the President in their duties</h5>
            <ul>
              <li>Shall assist the President in the discharge of his duties and shall exercise all or any of the powers delegated to him by the President.</li>
              <li>Shall, in the absence of the President, exercise all the powers of the President and perform all his duties.</li>
            </ul>
          </>
        ),
      }
      
      ,


      {
        title: "General Secretary",
        description:
          "The General Secretary handles the internal functioning and administration of the party.",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
        detailedDescription: (
          <>
            <h5>The General Secretary shall handle the internal administration of the Association</h5>
            <ul>
              <li>Maintain the Central Office and attend to correspondence with the assistance of the Organising Secretary and Secretaries and Parliament.</li>
              <li>Control the staff sanctioned to the Central Office.</li>
              <li>Maintain records of the minutes of the meeting of the Central and State Council, the Central and State Executive, and the Secretariat, and be in charge of all the records, registers, stores, and properties of the Association.</li>
              <li>Take suitable steps to implement the decisions or directions of the Central and State Council, Central and State Executive Committee, and the Secretariat.</li>
              <li>Consult the President in all important matters.</li>
              <li>Convene all meetings in consultation with the President, such as Secretariat, Executive, and State Council and Departmental Cells.</li>
              <li>Take such steps as are necessary to preserve the records and documents and arrange for their safe custody.</li>
              <li>Operate bank accounts jointly with the President.</li>
              <li>Maintain the members lists of the Central and State Branches, City Centre, Special Branches, and Assembly Constituencies.</li>
              <li>Maintain a register of properties of Central and State Branches, City Centre, Special Branches, and Assembly Constituencies.</li>
              <li>Incur expenditure within such limits as may be prescribed from time to time by the Central and State Executive. All payments exceeding Rs.1,000/- shall be made in consultation with the President.</li>
              <li>Be the Editor/Publisher of the Magazines/Journals of the Association.</li>
            </ul>
          </>
        ),
      },
      

,

{
    title: "Joint Secretary",
    description:
      "The Joint Secretary assists the General Secretary in their duties and acts in their absence.",
    gradient: "linear-gradient(135deg, #ffcc00, #ff6699)", // Yellow-Pink
    detailedDescription: (
      <>
        <h5>The Joint Secretary shall assist the General Secretary in their duties</h5>
        <ul>
          <li>Assist the General Secretary in the discharge of his duties.</li>
          <li>In the absence of the General Secretary:</li>
          <ul>
            <li>Exercise all the powers entrusted to him by the General Secretary and perform his duties.</li>
            <li>Be the publisher of the Magazines and Journals of the Association.</li>
          </ul>
        </ul>
      </>
    ),
  }
  
,


      {
        title: "Treasurer",
        description:
          "The Treasurer is responsible for the financial management of the party.",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise
        detailedDescription: (
          <>
            <h5>The Treasurer shall oversee the financial matters of the Association</h5>
            <ul>
              <li>Collect the Association dues and assessments from the Central and State Branches, City Centre, Special Branch, and Assembly Constituencies and report to the State Executive Committee periodically on the collections and present annual audited accounts to the State Executive Committee within 3 months after completion of the year.</li>
              <li>Maintain accounts, receipts, and expenditure of the State and present the yearly audited accounts furnished by the Branches, City Centre, and Special Branches.</li>
              <li>Make payments as approved by the President.</li>
              <li>Assist the General Secretary in the preparation and presentation of the Annual Budget.</li>
              <li>Have the accounts audited every year and present them to the State Executive Committee.</li>
              <li>Shall place income and expenditure statements before the Executive periodically.</li>
              <li>Shall issue receipts for all the money received by the Association and deposit the same in the bank and inform the President periodically.</li>
            </ul>
          </>
        ),
      }
,      
 






];

function Org() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleLearnMoreClick = (role) => {
    setSelectedRole(role);
  };

  const handleBackClick = () => {
    setSelectedRole(null);
  };

  return (
    <>






      <div className="container    organizationcontainer-5 my-5">
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
                    className="mb-3 d-flex align-items-center  fs-4justify-content-center"
                    style={{
                      width: "250px",
                      height: "60px",
                      background: selectedRole.gradient,
                      color: "black",
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
                      className="mb-3 d-flex  fw-bold fs-4 align-items-center justify-content-center"
                      style={{
                        width: "100%",
                        height: "5vh",
                        background: role.gradient,
                        color: "black",
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

export default Org;
