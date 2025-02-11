import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import useAuthStore from "../store/authstore";

import axios from "axios";

const translations = [
  { title: "House", description: "Providing a 2BHK house to every family in India." },
  { title: "Finance", description: "Making every house in India loan-free (0 finance)." },
  { title: "Farmers", description: "Supporting farmers in every stage, from planting to harvesting." },
  { title: "Pension", description: "Implementing the old pension scheme for government, contract, outsourcing, and honorarium workers upon retirement." },
  { title: "Private Company", description: "Providing proper salary and pension schemes for employees in recognized private organizations." },
  { title: "Students", description: "Education creates many jobs and employment opportunities for students." },
  { title: "Food", description: "Providing nutritious food to the general public, mothers, and children." },
  { title: "Global Needs", description: "Addressing global needs and India's role in fulfilling them." },
  { title: "Govt Jobs & Industry", description: "One government job per household and small-scale industry support." }
];






function Focus() {
  const navigate = useNavigate();
 
  const handleFileComplaint = () => {
      navigate("/complaint");
    } 


 
  
  return (
    
<>





<Swiper 
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 2 } }}
        >
          {translations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex align-items-center justify-content-center" style={{ height: "30vh" }}>
                <div className="card shadow-lg text-center p-3 w-100 text-white" style={{ borderRadius: "15px", height: "100%", background: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)" }}>
                  <div className="mx-auto px-4 py-2 fs-2 mb-2 bg-primary text-white rounded-pill" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {item.title}
                  </div>
                  <p className="px-3  fs-4  py-3 text-center" style={{ fontSize: "1.2rem" }}>
                    {item.description}
                  </p>
                  <button className="btn btn-danger  position-absolute start-50 translate-middle-x w-75 rounded-pill" style={{ bottom: "6%", height: "65px", fontSize: "1.2rem" }} onClick={handleFileComplaint}>
                    🚨 File a Complaint
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


</>
  );
}

export default Focus;
