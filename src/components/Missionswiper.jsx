import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";

import "../App.css";

const missionData = [
  {
    title: "Food",
    description:
      "Food is to provide complete and balanced nutrition to every Indian i.e. men, women, and children.",
    cardGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
    titleGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    buttonGradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
  },
  {
    title: "Housing",
    description:
      "Ensuring every Indian has access to safe, affordable, and comfortable housing.",
    cardGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },
  {
    title: "Education",
    description:
      "Providing quality education and skill development for a stronger future.",
    cardGradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan gradient
    titleGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
    buttonGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
  },
  {
    title: "Healthcare",
    description:
      "Making healthcare accessible and affordable for all citizens of India.",
    cardGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    titleGradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
    buttonGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
  },
  {
    title: "Economic Growth",
    description:
      "Strengthening India's economy through global trade and innovation.",
    cardGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },
];

function MissionSwiper() {
  return (
    <div className="missions-container" style={{ height: "70vh",}}>
      <section
        className="container-fluid bg-dark mt-2 my-5 py-4"
        style={{ height: "70vh", position: "relative" }}
      >
        <div
          className="text-center mt-4 fw-bold text-light py-3 px-4 mx-auto"
          style={{
            maxWidth: "80vh",
            background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            borderRadius: "50%",
            fontSize: "2.5rem",
            boxShadow: "0 4px 10px rgba(0, 1, 1, 0.2)",
          }}
        >
          Our Mission
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="py-4"
          style={{ height: "90%" }}
        >
          {missionData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="card shadow-lg text-center p-4"
                style={{
                  background: item.cardGradient,
              
                  height:"40vh",
                  borderRadius: "8vh",
                  marginLeft:"5vh",
                  marginTop:"3vh",
                  display: "flex",
                  width:"50vh",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="card-body  d-flex flex-column">
                  <div
                    className="ms-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "30vh",
                      height: "10vh",
                      background: item.titleGradient,
                      color: "black",
                      fontSize: "3vh",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      textAlign: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      marginBottom: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    className="card-text fs-5 text-dark fw-bold"
                    style={{ lineHeight: "40px", fontWeight: "400" }}
                  >
                    {item.description}
                  </p>
                  <button
                    className="btn btn-light mt-auto fs-5 py-2 px-4"
                    style={{
                      background: item.buttonGradient,
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      height:"7vh",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "background 0.3s ease, transform 0.3s ease",
                      padding: "12px 30px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Centered "View All" Button */}
        <Button
          className="btn text-black missionviewall fs-3 btn-light"
          style={{
            background: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
            color: "white",
            borderRadius: "25px",
            marginLeft:"90vh",

            padding: "12px 30px",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            
            bottom: "20px", // Adjusted position
            left: "50%",
            transform: "translateX(-50%)",
            transition: "background 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          View All
        </Button>
      </section>
    </div>
  );
}

export default MissionSwiper;
