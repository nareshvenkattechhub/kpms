import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

import useAuthStore from "../store/authstore";

const Subscribe = () => {
  const [years, setYears] = useState(2);
  const amountPerYear = 310;
  const totalAmount = years * amountPerYear;
  const { handleSubscribe } = useAuthStore();

  // Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ background: "linear-gradient(to right, #56CCF2, #2F80ED)" }}
    >
      <Card
        className="shadow-lg p-4 text-center border-0 rounded-4"
        style={{
          width: "30%",
          backgroundColor: "#1B1B1B",
          color: "#fff",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h3 className="mb-3 text-info fw-bold">KPMPP Subscription</h3>
        <p className="text-light">Select a plan and enjoy exclusive access.</p>

        <Form.Group controlId="subscriptionYears" className="m-3 px-5">
          <Form.Label className="fw-bold text-white fs-4">
            Select Subscription Duration
          </Form.Label>
          <div className="position-relative">
            <Form.Control
              as="select"
              className="form-select fw-bold border-0 shadow-lg pe-5"
              style={{
                background: "linear-gradient(45deg, #1E90FF, #00FA9A)",
                height: "55px",
                fontSize: "18px",
                padding: "10px",
                borderRadius: "8px",
                color: "#fff",
                cursor: "pointer",
                transition: "0.3s ease-in-out",
              }}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            >
              <option value={2}>⭐ 2 Years - ₹{2 * amountPerYear}</option>
              <option value={5}>🔥 5 Years - ₹{5 * amountPerYear}</option>
              <option value={10}>💎 10 Years - ₹{10 * amountPerYear}</option>
            </Form.Control>
            {/* Dropdown arrow icon inside the input */}
            <div
              className="position-absolute"
              style={{
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              ▼
            </div>
          </div>
        </Form.Group>

        <p className="mt-3 fw-bold text-success">Total Amount: ₹{totalAmount}</p>

        <Button
          className="btn btn-info w-50 py-3 px-4 mt-4 fw-bold"
          onClick={() => handleSubscribe(totalAmount, years, loadRazorpayScript)}
          style={{
            borderRadius: "35px",
            fontSize: "18px",
            transition: "0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = "0.85";
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0px 4px 10px rgba(255, 81, 47, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Subscribe for {years} Year(s)
        </Button>
      </Card>
    </Container>
  );
};

export default Subscribe;
