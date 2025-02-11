import React from "react";
import { Navbar, Nav, Container, Card, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuthStore from "../store/authstore";

function Knav() {
  const { user, logout } = useAuthStore(); // Get user and logout function from Zustand store

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Container fluid>
        {/* Brand Section */}
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <Card className="rounded-pill px-3 py-2 me-2 shadow-sm" style={{ backgroundColor: "#32CD32", border: "none" }}>
            <span className="text-white text-uppercase fw-bold" style={{ fontSize: "22px", letterSpacing: "1px" }}>
              KPMPP
            </span>
          </Card>
          <span className="text-warning text-uppercase fw-bold" style={{ fontSize: "22px" }}>
            KARSHAKA PRAJA MARG
          </span>
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          {/* Navigation Links */}
          <Nav className="fs-3 text-light">
  <Nav.Link as={Link} to="/home" className="text-light fs-5 px-3">Home</Nav.Link>

  {/* About Dropdown */}
  <NavDropdown 
  title={<span className="text-light">About</span>} 
  id="about-dropdown" 
  className="fs-5 px-3" 
  menuVariant="dark"
>
  <NavDropdown.Item as={Link} to="/about" className="text-light fs-5 px-3">About Us</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/organization" className="text-light fs-5 px-3">Organization</NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/objectives" className="text-light fs-5 px-3">Objectives</NavDropdown.Item>
</NavDropdown>


  <Nav.Link as={Link} to="/complaint" className="text-light fs-5 px-3">Complaint</Nav.Link>
  <Nav.Link as={Link} to="/media" className="text-light fs-5 px-3">Media</Nav.Link>
</Nav>


          {/* User Authentication Buttons */}
          {user ? (
            <>
              <Button
                as={Link}
                to="/dashboard"
                className="ms-3"
                style={{
                  background: "linear-gradient(45deg, #36D1DC, #5B86E5)",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  transition: "background 0.3s ease",
                }}
              >
                Dashboard
              </Button>

              <Button
                onClick={logout}
                className="ms-3"
                style={{
                  background: "linear-gradient(45deg, #ff4b2b, #ff416c)", 
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
            </>
          ) : (
            <Button
              as={Link}
              to="/login"
              className="ms-3"
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

          {/* Donate Button */}
          <Button
            as={Link}
            to="/donate"
            className="me-2"
            style={{
              background: "linear-gradient(45deg, #4facfe, #00f2fe)", 
              margin: "1%",
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Knav;
