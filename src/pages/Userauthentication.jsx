import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Supabase Initialization
const projectUrl = "https://fxqizogzyeybioiwpqar.supabase.co";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cWl6b2d6eWV5YmlvaXdwcWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTIwMjMsImV4cCI6MjA1NDA4ODAyM30.WHASrC_EhL4xDp7JJMjtF-IVu9NLgeSV4yKurScD860";
const supabase = createClient(projectUrl, apiKey);

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false); // Login first, then signup
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("userstore")
        .select("id, name, email, password")
        .eq("email", formData.email)
        .single();

      if (error || !data || data.password !== formData.password) {
        setResponse("Invalid email or password.");
        return;
      }

      localStorage.setItem("token", data.id);
      localStorage.setItem("email", data.email);
      localStorage.setItem("username", data.name);

      setResponse("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      console.error("Error during login:", err);
      setResponse("Something went wrong!");
    }
  };

  // Handle sign up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    let { data: existingUser } = await supabase
      .from("userstore")
      .select("email")
      .eq("email", formData.email)
      .single();

    if (existingUser) {
      setResponse("User with this email already exists.");
      return;
    }

    const { error } = await supabase.from("userstore").insert([formData]);
    if (error) {
      setResponse(error.message);
    } else {
      setResponse("User registered successfully! Switching to login...");
      setTimeout(() => setIsSignUp(false), 2000);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #6EE7B7, #3F5EFB)" }}>
      <Row className="shadow-lg overflow-hidden w-20" style={{ borderRadius: "20px" }}>
        <Col xs={12} className="p-5 text-white " style={{ background: "#222", borderRadius: "20px" }}>
          <h2 className="fw-bold mb-4">{isSignUp ? "SIGN UP" : "MEMBER LOGIN"}</h2>

          {!isSignUp ? (
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="fs-5">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-5">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
              </Form.Group>
              <Button variant="primary" className="w-100 fs-5" type="submit">Login</Button>
            </Form>
          ) : (
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3">
                <Form.Label className="fs-5">Username</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Username" onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-5">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fs-5">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
              </Form.Group>
              <Button variant="success" className="w-100 fs-5" type="submit">Sign Up</Button>
            </Form>
          )}

          {response && <p className="mt-3 fw-bold text-center">{response}</p>}

          <p className="mt-3 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"} {" "}
            <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Login here" : "Sign up here"}
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
