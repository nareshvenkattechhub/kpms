import React from 'react';
import { Card } from 'react-bootstrap';

import Navigation from "../components/Navigation";  // Top page navigation

function About() {
  return (

    <>
    
    <section id="preamble" className="py-5" style={{ background: 'linear-gradient(to right, rgb(255, 126, 95), rgb(254, 180, 123))' }}>
      <div className="container text-center">
        {/* Title with vibrant color */}
        <h2 className="display-4 mb-4 text-dark fw-bold" style={{ fontSize: '3rem' }}>
          Preamble
        </h2>

        {/* Short Introduction Text */}
        <p className="lead fs-4 mb-5 text-dark fw-bold">
        India is a very great country our India is a country where everyone needs fresh air suitable for living food crops and all kinds of acceptable. To ensure that India is economically ahead of all countries in the world, to ensure that the value of the rupee is greater than the value of the dollar, to arrange for everyone to have a career according to their skills, to make every family debt-free, Making goods needed by the nations of the world from every family and selling those goods to the nations of the world, Youth, Women, Men and Scientist to lead India on the path of development to enhance food, housing, education, health care and medical health services for 150 years. In this way, many types of skill courts are set up without risk. Mana Karshaka Praja Marg Political Party was established to lead people on the path of development for the job of professionalism, environmental protection and national defense.
        </p>

        {/* Main Content Section */}
      

        {/* Quote Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <blockquote className="blockquote text-center text-primary fs-3 mb-4">
              
              <footer className="blockquote-footer">Karshaka Praja Marg</footer>
            </blockquote>
          </div>
        </div>

        {/* KPM Political Party Information Card */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <Card>
              <Card.Header as="h4" className="text-center">KPM Political Party Registration</Card.Header>
              <Card.Body>
                <p className="fs-5 text-dark mb-4">
                  The Association, Karshaka Praja Marg Political Party, is registered with the Election Commission of India under the Representation of the People Act, 1951, as required under section 29A of the Act. It has furnished additional particulars under the Registration of Political Parties (Furnishing of Additional Particulars) Order 1992.
                </p>
                <p className="fs-5 text-dark mb-4">
                  The abbreviated form of the political party shall be **KPM Political Party**.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>

    </>

  );
}

export default About;
