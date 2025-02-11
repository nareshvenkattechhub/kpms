import React from 'react';
import { Link } from 'react-router-dom';

function Vision() {
  return (
    <div className= " mt-5 container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-8">
          <div
            className="p-4 shadow-lg rounded-4 card"
            style={{
              background: 'linear-gradient(to right, rgb(255, 126, 95), rgb(254, 180, 123))', // Original gradient color
              backgroundSize: 'cover',
              borderRadius: '20px', // Rounded corners for the card
              position: 'relative',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', // Add a stronger shadow for a floating effect
              overflow: 'hidden', // Make sure nothing exceeds the border radius
            }}
          >
            <div className="text-center text-white card-body">
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '2.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Vision of kpmpp
              </h3>
              <p
                className="fs-5"
                style={{
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1.2rem',
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              >
                India is a very great country. Our India is a country where everyone needs fresh air, suitable living conditions, food crops, and all kinds of essentials. To ensure that India is economically ahead of all countries in the world, we aim to make the value of the rupee greater than the value of the dollar.
              </p>


              <Link to="/about" style={{ textDecoration: "none" }}>


              <button
                type="button"
                className="mt-4 btn btn-lg"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  borderRadius: '50px', // Round corners for the button
                  backgroundColor: '#ff6f3e', // Warm color for highlight
                  borderColor: '#ff6f3e',
                  color: '#fff',
                  padding: '12px 40px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 12px rgba(255, 111, 62, 0.4)', // Shadow for pop effect
                  transform: 'scale(1)', // Default state
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ff9f70'; // Lighter on hover
                  e.target.style.boxShadow = '0 8px 16px rgba(255, 159, 112, 0.5)'; // Lighter shadow
                  e.target.style.transform = 'scale(1.1)'; // Slightly enlarge the button
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ff6f3e'; // Original color on leave
                  e.target.style.boxShadow = '0 8px 12px rgba(255, 111, 62, 0.4)'; // Original shadow
                  e.target.style.transform = 'scale(1)'; // Return to original size
                }}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.boxShadow = '0 0 10px rgba(255, 159, 112, 0.8)'; // Focus glow effect
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = '0 8px 12px rgba(255, 111, 62, 0.4)'; // Return shadow when focus is lost
                }}
              >
                Join the Vision
              </button>

              </Link>



              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
