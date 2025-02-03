import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
    <section id="preamble" className="py-5" style={{ background: 'linear-gradient(to right, rgb(255, 126, 95), rgb(254, 180, 123))' }}>
      <div className="container text-center">
        {/* Title with vibrant color */}
        <h2 className="display-4 mb-4 text-dark fw-bold" style={{ fontSize: '3rem' }}>
          Preamble
        </h2>

        {/* Short Introduction Text */}
        <p className="lead fs-4 mb-5 text-dark fw-bold">
          India is a great country where everyone deserves fresh air, suitable food crops, and all kinds of essential resources. Our vision is to ensure that India stands as a global leader, economically ahead of all nations.
        </p>

        {/* Main Content Section */}
        <div className="row justify-content-center fs-4 fw-bold">
          <div className="col-lg-8">
            <p className="fs-5 text-dark mb-4 fw-dark" style={{ letterSpacing: '1px' }}>
              To ensure that the value of the Indian rupee is greater than the dollar, and to create opportunities for every citizen based on their skills. We strive for a future where every family is debt-free, where families produce goods for the world and sell them internationally.
            </p>
            <p className="fs-5 text-dark mb-4 fw-light" style={{ lineHeight: '1.6' }}>
              Our goal is to empower Youth, Women, Men, and Scientists to lead India on a path of development. We aim to enhance sectors like food, housing, education, healthcare, and medical services, ensuring a prosperous future for the next 150 years.
            </p>
            <p className="fs-5 text-dark mb-4 fw-light" style={{ textTransform: 'capitalize' }}>
              We envision setting up skill courts, offering risk-free opportunities for everyone. The Mana Karshaka Praja Marg Political Party was founded with the objective of guiding people towards progress through professional growth, environmental protection, and national defense.
            </p>
            <p className="fs-5 text-dark mb-4 fw-bold" style={{ fontStyle: 'italic' }}>
              Together, we can build a stronger, self-sufficient, and prosperous India for all generations to come.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <blockquote className="blockquote text-center text-primary fs-3 mb-4">
              <p className="mb-0">“A prosperous India, built by its people, for its people.”</p>
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
  );
}

export default About;
