import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";  // Top page navigation
import Partycard from "../components/Partycard_swiper";
import Preamble from "../components/Preamble";
import GoogleTranslate from "../components/GoogleTranslate";

import Supportcomponnet from "../components/Supportcomponent";

import Vision from "../components/Vision";
import Organization from "../components/Organization";
import MissionSwiper from "../components/Missionswiper";
import VoiceYourConcerns from "../components/voice_concern";
import Footer from "../components/Footer";

import Down from "../components/Buttons/Down";



import Focus from "../components/Focus";


import Keyfocus from "../components/Keyfocus";

function Homepage() {
    return (
      <>
        <Container fluid className="bg-dark">
  
          {/* Google Translate */}
          <Row className="mb-4  bg-dark justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <GoogleTranslate />
            </Col>
          </Row>



          <div
  style={{
    background: "linear-gradient(135deg, rgb(47, 51, 48), rgb(72, 78, 75))", // Subtle gradient
    padding: "1.5rem",
    borderRadius: "12px",
  }}
>

  {/* Party Card Swiper */}
  <Row className="mb-5 justify-content-center p-3 rounded">
    <div>
        
    </div>
    <Col xs={12} md={10} lg={10}>
      <Partycard />
    </Col>


    
  </Row>






  {/* Vision Section */}
  <Row className="mb-5 justify-content-center">
    <Col xs={12} md={10} lg={10}>
      <Vision />
    </Col>
  </Row>

  


</div>






  
       {/* Mission Swiper Section */}
<div
  style={{
    background: "linear-gradient(135deg, rgb(59, 54, 42), rgb(90, 83, 65))",
    padding: "1.5rem",
    borderRadius: "12px",
    marginTop: "1.5rem",
  }}
>
  <Row className="mb-5   mt-5 justify-content-center">
    <Col xs={12} md={10} lg={10}>
      <MissionSwiper />
    </Col>
  </Row>
</div>










{/* key focus  Section */}
<div className="mt-4"
  style={{
    background: "linear-gradient(135deg, rgb(35, 37, 38), rgb(65, 67, 69))",
    padding: "1.5rem",
    borderRadius: "12px",
    marginTop: "1.5rem",
  }} 
>
<Row className="mb-5  py-3    mt-0 justify-content-center">
  
  <div   style={{
    background: "linear-gradient(135deg, rgb(10, 0, 38), rgb(65, 0, 69))",
    padding: "1.5rem",
    borderRadius: "30%",
    height:"8vh",
    
    width:"30%",
    marginLeft:"0px",
    marginTop: "1.5rem",
  }} >    

<h2>  KEY FOCUS TITLE</h2>


  </div>
  </Row>


  <Row className="mb-5    py-5  mt-3 justify-content-center">



    <Col xs={12} md={10} lg={10}>
      <Keyfocus/>
    </Col>
  </Row>
</div>



{/* Organization Section */}
<div
  style={{
    background: "linear-gradient(135deg, rgb(35, 37, 38), rgb(65, 67, 69))",
    padding: "1.5rem",
    borderRadius: "12px",
    marginTop: "1.5rem",
  }} 
>
  <Row className="mb-5  py-5 mt-5 justify-content-center">
    <Col xs={12} md={10} lg={10}>
      <Organization />
    </Col>
  </Row>
</div>









          {/* Complaint Section */}
          <Row className="mb-5 mt-4 justify-content-center">
            <Col xs={12} md={10} lg={12}>
              <VoiceYourConcerns />
            </Col>
          </Row>




  
          {/* Support Section */}
          <Row className="mb-5 justify-content-center">
            <Col xs={12} md={10} lg={12}>\
            <Supportcomponnet/>
            </Col>

          </Row>
  
          <Footer />
        </Container>
      </>
    );
  }
  
  export default Homepage;