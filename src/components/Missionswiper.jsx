import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";

import "../App.css";


import { Link } from "react-router-dom";


const missionData = [
  {
    title: "Food",
    cardGradient: "linear-gradient(135deg, #667eea, #764ba2)" , 
      description:"Food is to provide complete and balanced nutrition to every Indian i.e. men, women and children..                     ",
    titleGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    buttonGradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
  },
  {
    title: "Housing",
    cardGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    description: 
      "Housing To provide a decent housing to every family in India.....                                                                                                                                            ",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },
  {
    title: "Clothing",
    cardGradient: "linear-gradient(135deg, #ff6a00, #ee0979)" ,
  
    description:
      "Clothing To ensure that their clothing is provided according to the regions                                                                    ",
    titleGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
    buttonGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
  },
  {
    title: "Roads",
     cardGradient: "linear-gradient(135deg, #56ab2f, #a8e063)",


    description:
      "Roads Providing roads to every area.....                                                                                       ",
    titleGradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
    buttonGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
  },
  {
    title: "Economy",
cardGradient: "linear-gradient(135deg, #43cea2, #185a9d)",

    description:
    
      "Economy To establish a better economy than any other country in the world. Seeing that the rupee is worth.",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },





  {
    title: "Devolopment",
    cardGradient: "linear-gradient(135deg, #ff4e50, #f9d423)",


    description:
      "Development Setting up factories, cottage industries, to export to world countries....                                                            .",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },






  {
    title: "Agriculture",
    cardGradient: "linear-gradient(135deg, #2193b0, #6dd5ed)" ,

    description:
      "Agriculture Development of agriculture by making land available and providing new support Assembly Con ....",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },



  {
    title: "Employment",
    cardGradient: "linear-gradient(135deg, #ff758c, #ff7eb3)",

    description:
      "Employment Every single employee working in Government, Private and Contract, Outsourcing, ...",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },


  {
    title: "Education",
     cardGradient: "linear-gradient(135deg, #f857a6, #ff5858)",


    description:
      "Education Establishing modern education more than any other country in the world. Paying salar...",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },




  {
    title: "Medical Helath",
    cardGradient: "linear-gradient(135deg, #ff9966, #ff5e62)",

    description:"Medical Health Making the necessary arrangements to ensure that a greater percentage....",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },


  




  {
    title: "Employment",
    cardGradient: "linear-gradient(135deg, #00c6ff, #0072ff)" ,

    description:"Employment To ensure that every single employee (Employees, Asha, Anganwadi teachers, Ayas) w,.",
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },



  {
    title: "WATER MANAGEMENT  ",
    cardGradient: "linear-gradient(135deg, #f12711, #f5af19)",

    description:
      "WATER MANAGEMENT AND SANITATION India has 18 per cent of the world's population but only 4 per cent of ....",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },




  {
    title: "INTERNAL SECURITY",
    cardGradient: "linear-gradient(135deg, #ffc6ff, #0072ff)",

    description:
      "INTERNAL SECURITY In the aftermath of the Mumbai terror attacks in 2008, Congress revamped the internal  ....",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },





  {
    title: "Health",
    cardGradient: "linear-gradient(135deg, #36d1dc, #5b86e5)",


    description:
      "HEALTH KPM Party was the first political party to acknowledge that health of the people and healthcare  ...",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },






  {
    title: "RELIGIOUS & LINGUISTIC ",
    cardGradient: "linear-gradient(135deg, #ff6a88, #ff99ac)",

    description:
      "RELIGIOUS AND LINGUISTIC MINORITIES The plurality of religions represents the history of India. History ...",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },



  {
    title: "INFRASTRUCTURE",
    cardGradient: "linear-gradient(135deg, #ff758c, #dd2476)",

    description:
    "INFRASTRUCTURE The hardware of an economy are roads, railways, ports, airports and electricity. Capital ex ...",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },


  {
    title: "Media",
    cardGradient: "linear-gradient(135deg, #ff512f, #dd2476)",

    description:"MEDIA In the last ten years, significant sections of the media have been robbed of, or surrendered, ....",  
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },






  {
    title: "NORTH EASTERN STATES ",
    cardGradient: "linear-gradient(135deg, #6a11cb, #2575fc)",


    description:"NORTH EASTERN STATES The North Eastern states within the Union of India represent the pluralism and  ...", // Purple-Blue gradient
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #dc0592, #fad0c4)", // Pink-Rose gradient
  },







  {
    title: "TAXATION AND TAX REFORMS ",
    cardGradient: "linear-gradient(135deg, #00c3ff, #ffff1c)",


    description:"The last ten years of the BJP/ NDA government is a case of taxation gone berserk. The share of taxes ....",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff0923, #fad0c4)", // Pink-Rose gradient
  },


  {
    title: "WOMEN'S EMPOWERMENT ",

    description:"Historically, women have been discriminated against and put at great disadvantage. Congress pledges ....",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #99599c, #fad0c4)", // Pink-Rose gradient
  },



  {
    title: "RURAL AND URBAN DEVELOPMENT ",
    cardGradient: "linear-gradient(135deg, #11998e, #38ef7d)",


    description:"RURAL AND URBAN DEVELOPMENT The two realities that India faces are (1) that nearly 60 per cent of the .. ",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },



  {
    title: "Sports ",
    cardGradient: "linear-gradient(135deg, #2c3e50, #3498db)",
    description:" SPORTS No government in India's independent history has politicized sports as much as the present BJP ... ",
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },



  {
    title: "ART, CULTURE AND HERITAGE",
    cardGradient: "linear-gradient(135deg, #00c6ff, #0072ff)",


    description:" RT, CULTURE AND HERITAGE Art, culture and heritage constitute the identity of a people. The BJP/ NDA ...... ",
    titleGradient: "linear-gradient(135deg, #eeaa45, #eadco6)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #672091, #fad0c4)", // Pink-Rose gradient
  },



  {
    title: "UNEMPLOYMENT  ",
    cardGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",


    description:" UNEMPLOYMENT MEETING THE CRY FOR JOBS The most challenging issue today is widespread unemployment...",
    titleGradient: "linear-gradient(110deg, #572349, #fadc04)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #238936, #fad0c4)", // Pink-Rose gradient
  },



  {
    title: "Education ",
    cardGradient: "linear-gradient(135deg, #667eea, #764ba2)",

    description:"EDUCATION: Education is a public good and every student has the right to free, quality education  ...  ",
    titleGradient: "linear-gradient(135deg, #4397bb, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(120deg, #294756, #cad0c4)", // Pink-Rose gradient
  },





];


function MissionSwiper() {
  return (
    <div className="missions-container" style={{ minHeight: "80vh" }}>
      <section className="container-fluid   mt-2 py-4">
        <div
          className="text-center fw-bold fs-1 text-light py-3 mx-auto"
          style={{
            maxWidth: "80%",
            background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            borderRadius: "50%",
            fontSize: "2rem",
            boxShadow: "0 4px 10px rgba(0, 1, 1, 0.2)",
          }}
        >
          KARSHAKA PRAJA MARGH POLITICAL PARTY MISSIONS
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1},
            1024: { slidesPerView: 3},
          }}
          autoplay={{ delay: 2000 }}
          modules={[Pagination, Autoplay]}
          className="py-4"
          style={{ paddingBottom: "5vh" }} // Adjust for different screen sizes
        >
          {missionData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="card shadow-lg text-center mt-5 p-4 mx-auto"
                style={{
                  background: item.cardGradient,
                  height: "clamp(35vh, 45vh, 50vh)", // Adjusts based on screen size
                  borderRadius: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative", // Needed for absolute positioning
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
                  padding: "2rem",
                }}
              >
                <div
                  className="card-body d-flex flex-column"
                  style={{
                    minHeight: "65%", // Ensures text takes consistent space
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: "80%",
                      height: "clamp(7vh, 10vh, 12vh)", // Responsive title height
                      background: item.titleGradient,
                      color: "black",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      borderRadius: "1rem",
                      textAlign: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.title}
                  </div>

                  <p className="card-text text-light fs-5 fw-bold">
                    {item.description}
                  </p>
                </div>

                <Link to="/missions" style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-light fs-4 py-2 px-4"
                    style={{
                      background: item.buttonGradient,
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      height: "clamp(6vh, 7vh, 8vh)", // Button scales properly
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                      position: "absolute",
                      bottom: "15%", // Strictly 15% from bottom
                      left: "50%",
                      transform: "translateX(-50%)", // Centers the button
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(-50%) scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(-50%)";
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Moves Pagination Clickable Dots Below */}
        <div className="text-center mt-3">
          <div className="swiper-pagination position-relative" style={{ marginTop: "30px" }}></div>
        </div>
      </section>
    </div>
  );
}

export default MissionSwiper;