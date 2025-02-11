import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown, Card } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (replace with actual authentication logic)
    const token = localStorage.getItem("authToken"); // Example: Checking for an auth token
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token on logout
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect to home or login page
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="shadow-sm py-2">
      <Container fluid className="d-flex justify-content-between">
        
        {/* Left Section: Party Name with Styled Card */}
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <Card
            className="rounded-pill px-3 py-2 me-2 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#32CD32", // Green background
              border: "none",
              boxShadow: "0 0 10px rgba(50, 205, 50, 0.5)",
            }}
          >
            <span
              style={{
                fontFamily: "Gilgiti, sans-serif",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#fff", // White text
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              KPMPP
            </span>
          </Card>

          {/* Beside Text: KARSHAKA PRAJA MARG */}
          <span
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#FFD700", // Golden color
              textTransform: "uppercase",
            }}
          >
            KARSHAKA PRAJA MARG
          </span>
        </Navbar.Brand>

        {/* SEO Hidden H1 (For Better Search Ranking) */}
        <h1 className="visually-hidden">KARSHAKA PRAJA MARG POLITICAL PARTY - KPMPP Official Website</h1>

        {/* Center Section: Navbar Links */}
        <Navbar.Toggle aria-controls="navigation-menu" />
        <Navbar.Collapse id="navigation-menu" className="justify-content-center">
          <Nav className="align-items-center">
            <Nav.Link href="/" className="text-light fs-5 px-3">Home</Nav.Link>

            {/* Dropdown under About */}
            <NavDropdown title="About" id="about-dropdown" className="fs-5 px-3">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/organization">Organization</NavDropdown.Item>
              <NavDropdown.Item href="/objectives">Objectives</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/media" className="text-light fs-5 px-3">Media</Nav.Link>
            <Nav.Link href="/complaints" className="text-light fs-5 px-3">Complaint</Nav.Link>

            {/* Show Login if user is NOT logged in */}
            {!isLoggedIn ? (
              <NavDropdown title="Login" id="login-dropdown" className="fs-5 px-3">
                <NavDropdown.Item href="/adminauth">Admin</NavDropdown.Item>
                <NavDropdown.Item href="/join">User</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button
                onClick={handleLogout}
                className="me-2"
                style={{
                  background: "linear-gradient(45deg, #ff7e5f, #feb47b)", 
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  transition: "background 0.3s ease",
                }}
              >
                Logout
              </Button>
            )}
          </Nav>

          {/* Action Buttons */}
          <div className="d-flex align-items-center ms-3">
            {/* Donate Button */}
            <Button
              href="/donate"
              className="me-2"
              style={{
                background: "linear-gradient(45deg, #4facfe, #00f2fe)", 
                border: "none",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "6px 16px",
                borderRadius: "20px",
                transition: "background 0.3s ease",
              }}
            >
              Donate
            </Button>

            {/* Join Button */}
            {!isLoggedIn && (
              <Button
                href="/join"
                className="me-2"
                style={{
                  background: "linear-gradient(45deg, #ff7e5f, #feb47b)", 
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  transition: "background 0.3s ease",
                }}
              >
                Join
              </Button>
            )}

            {/* Social Media Icons */}
            <div className="d-none d-lg-flex align-items-center ms-3">
              {/* Icons can be added here */}
            </div>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
