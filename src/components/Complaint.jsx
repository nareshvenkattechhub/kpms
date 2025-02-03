import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const VoiceYourConcerns = () => {
  return (
    <Container fluid className="bg-light">
      <section
        className="voice-concerns py-5"
        style={{
          height: '70vh',
          background: 'linear-gradient(to right, #ff6a00, #ee0979)', // Gradient background for the section
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
                Voice Your Concerns
              </h2>
              <p
                className="lead fs-4 mb-4"
                style={{
                  color: 'white',
                  fontWeight: '300',
                  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.2)', // Adding shadow for text to stand out
                }}
              >
                Have an issue you want us to address? Submit your complaint and help us build a better, more
                responsive community.
              </p>
              <a
                href="/submit-complaint"
                className="btn btn-light btn-lg"
                style={{
                  background: 'linear-gradient(to right, #43e97b, #38f9d7)', // Gradient for the button
                  color: 'white',
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
                Submit Complaint
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default VoiceYourConcerns;
