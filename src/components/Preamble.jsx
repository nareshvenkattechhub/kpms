import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Preamble() {
  return (
    <section id="preamble" className="py-5" style={{ backgroundColor: '#f4f4f9' }}>
       <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-8">
          <div
            className="p-4 shadow-lg rounded card"
            style={{ background: 'linear-gradient(to right, rgb(255, 126, 95), rgb(254, 180, 123))' }}
          >
            <div className="text-center text-white card-body">
              <h3 className="mb-4">Vision for India</h3>
              <p className="fs-5">
                India is a very great country. Our India is a country where everyone needs fresh air, suitable living conditions, food crops, and all kinds of essentials. To ensure that India is economically ahead of all countries in the world, we aim to make the value of the rupee greater than the value of the dollar.
              </p>
              <p className="fs-5">
                Our mission is to ensure everyone has a career according to their skills, make every family debt-free, and produce goods needed by the nations of the world. We will sell those goods globally, with Youth, Women, Men, and Scientists leading India on the path of development.
              </p>
              <p className="fs-5">
                We aim to enhance food, housing, education, healthcare, and medical services for the next 150 years. Many skill courts will be set up to ensure no risks to people's development.
              </p>
              <p className="fs-5">
                Mana Karshaka Praja Marg Political Party was established to lead people on the path of development through professionalism, environmental protection, and national defense.
              </p>
              <button
                type="button"
                className="mt-4 btn btn-light btn-lg"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
              >
                Join the Vision
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Preamble;