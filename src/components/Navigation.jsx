import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="shadow-sm">
      <Container fluid className="d-flex justify-content-between">
        
        {/* Left Section: Party Logo & Name */}
        <Navbar.Brand href="/" className="fw-bold text-light d-flex align-items-center">
          <img
            src="kpm.png"
            alt="Party Logo"
            width="120"
            height="120"
            className="d-inline-block align-top me-2 rounded-circle"
          />
          <span className="text-warning fs-1 text-uppercase">
            KARSHAKA PRAJA MARG 
          </span>
        </Navbar.Brand>

        {/* SEO Hidden H1 (For Better Search Ranking) */}
        <h1 className="visually-hidden">KARSHAKA PRAJA MARG POLITICAL PARTY - KPMPP Official Website</h1>

        {/* Center Section: Navbar Links */}
        <Navbar.Toggle aria-controls="navigation-menu" />
        <Navbar.Collapse id="navigation-menu" className="justify-content-center">
          <Nav>
            <Nav.Link href="/home" className="text-light fs-3">Home</Nav.Link>
            <Nav.Link href="/about" className="text-light fs-3">About</Nav.Link>
            <Nav.Link href="/organization" className="text-light fs-3">Organization</Nav.Link>
            <Nav.Link href="/media" className="text-light fs-3">Media</Nav.Link>
            
            <Nav.Link href="/adminauth" className="text-light fs-3">admin</Nav.Link>

          </Nav>






          <Button
            href="/donate"
             className="me-2 ms-3"
            style={{
              background: "linear-gradient(45deg, #4facfe, #00f2fe)", 
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "25px",
              transition: "background 0.3s ease",
            }}
          >
            Donate
          </Button>

          <Button
            href="/join"
            className="me-2 ms-3"
            style={{
              background: "linear-gradient(45deg, #ff7e5f, #feb47b)", 
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "25px",
              transition: "background 0.3s ease",
            }}
          >
            Join
          </Button>


          {/* Social Media Icons (Colorful) */}
          <div className="d-none d-lg-flex align-items-center m-5">
            <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} style={{ color: "#1877F2" }} /> {/* Facebook Blue */}
            </a>
            <a href="https://twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} style={{ color: "#1DA1F2" }} /> {/* Twitter Blue */}
            </a>
            <a href="https://instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} style={{ color: "#E4405F" }} /> {/* Instagram Pink/Red */}
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={40} style={{ color: "#FF0000" }} /> {/* YouTube Red */}
            </a>
          </div>



          
        </Navbar.Collapse>

        {/* Join and Donate Buttons */}
        <div className="d-flex align-items-center">
         
      
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
