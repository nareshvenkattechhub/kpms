import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


import Navigation from "../components/Navigation";  // Top page navigation


const SupportParty = () => {
  return (



    <>


    <Navigation/>
    <Container fluid className="bg-light">
      <section
        className="support-party py-5"
        style={{
          height: '50vh',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background for the section
          borderRadius: '10px',
        }}
      >
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <div className="row text-center w-100">
            <div className="col-12">
              <h2
                className="display-4 fw-bold mb-4 text-white"
                style={{
                  fontSize: '3rem',
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)', // Adding shadow to the title for emphasis
                }}
              >
                Support Our Mission
              </h2>
              <p
                className="lead fs-4 mb-4"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.2)', // Adding shadow for text to stand out
                }}
              >
                Your contribution helps us advance the cause of the people and build a stronger, fairer future.
                Join us in creating change that matters.
              </p>
              <a
                href="/donate"
                className="btn btn-light btn-lg"
                style={{
                  background: 'linear-gradient(to right, #43e97b, #38f9d7)', // Gradient for the button
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '12px 30px',
                  borderRadius: '50px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  textTransform: 'uppercase',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>



    </>
  );
};

export default SupportParty;
