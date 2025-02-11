import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import useAuthStore from "../store/authstore";

const Login = () => {
  const { signUp, login } = useAuthStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false); // New state for loading animation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    setLoading(true); // Show loader

    try {
      if (isSignUp) {
        await signUp(username, email, password);
        setMessage({ text: "Sign-up successful! You can now log in.", type: "success" });
        setIsSignUp(false);
      } else {
        await login(email, password);
        setMessage({ text: "Login successful! Redirecting...", type: "success" });
        setTimeout(() => navigate("/dashboard"), 1500);
      }
    } catch (error) {
      setMessage({ text: error.message || "Something went wrong!", type: "danger" });
    } finally {
      setTimeout(() => setLoading(false), 1000); // Hide loader after 1s
    }
  };

  return (
    <Container
      fluid
      className="d-flex flex-column   py-5 min-vh-100"
      style={{
        background: "linear-gradient(120deg, #3a1c71, #d76d77, #ffaf7b)",
        padding: "20px",
      }}
    >
      <Row className="w-100">
        <Col xs={12} sm={10} md={6} lg={5} xl={4} className="mx-auto">
          <Card
            className="shadow-lg p-4 text-white"
            style={{
              borderRadius: "75px 0px 75px 0px",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <h3 className="text-center mb-4">{isSignUp ? "Sign Up" : "Login"}</h3>

            {message.text && (
              <Alert variant={message.type} className="text-center">
                {message.text}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              {isSignUp && (
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{
                      borderRadius: "10px",
                      border: "none",
                      background: "rgba(255, 255, 255, 0.2)",
                      color: "#fff",
                      padding: "12px",
                      fontSize: "16px",
                    }}
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3  fs-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    padding: "12px",
                    fontSize: "16px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 fs-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    padding: "12px",
                    fontSize: "16px",
                  }}
                />
              </Form.Group>
              <Button
  type="submit"
  className="w-100"
  style={{
    borderRadius: "35px",
    fontSize: "18px",
    padding: "14px",
    background: "linear-gradient(45deg, #FF512F, #DD2476)",
    border: "none",
    color: "white",
    transition: "all 0.3s ease-in-out",
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
  disabled={loading} // Disable button while loading
>
  {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
</Button>



            </Form>

            <p className="text-center mt-3">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <Button
                variant="link"
                className="text-white"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign Up"}
              </Button>
            </p>
          </Card>
        </Col>
      </Row>

      {/* Rotating Loader (Visible only when loading) */}
      {loading && (
        <div className="mt-4">
          <Spinner
            animation="border"
            variant="light"
            role="status"
            style={{
              width: "50px",
              height: "50px",
              borderWidth: "5px",
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default Login;
