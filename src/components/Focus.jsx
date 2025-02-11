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
  const { user, checkSubscription } = useAuthStore();

  const [subscriptionStatus, setSubscriptionStatus] = useState(localStorage.getItem("subscriptionStatus") || "inactive");
  const [showSubscriptionMessage, setShowSubscriptionMessage] = useState(false);
  const hasFetched = useRef(false);





  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchSubscriptionStatus = async () => {
      const userId = localStorage.getItem("userid");
      if (!userId) {
        console.error("User ID not found in local storage");
        return;
      }

      await checkSubscription(userId);
      setSubscriptionStatus(localStorage.getItem("subscriptionStatus") || "inactive");
    
    };


    

    fetchSubscriptionStatus();
  }, []);






  const handleFileComplaint = () => {
    if (subscriptionStatus === "active") {
      navigate("/complaint");
    } else {
      setShowSubscriptionMessage(true);
    }
  };

  const handleSubscribe = async () => {
    navigate("/subscribe");

   
   
  };

  return (
    <div className="container py-5 position-relative">
      {subscriptionStatus !== "active" && (
        <div className="alert text-center d-flex justify-content-center align-items-center p-3 bg-info text-dark fw-bold">
          ❌ You are not subscribed. Please subscribe to file a complaint.
          <button className="btn btn-primary ms-3" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      )}

      {!showSubscriptionMessage ? (
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
                  <div className="mx-auto px-4 py-2 mb-2 bg-primary text-white rounded-pill" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {item.title}
                  </div>
                  <p className="px-3 text-center" style={{ fontSize: "1.2rem" }}>
                    {item.description}
                  </p>
                  <button className="btn btn-danger position-absolute start-50 translate-middle-x w-75 rounded-pill" style={{ bottom: "6%", height: "65px", fontSize: "1.2rem" }} onClick={handleFileComplaint}>
                    🚨 File a Complaint
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <div className="card shadow-lg p-5 text-center bg-warning" style={{ borderRadius: "20px", maxWidth: "400px" }}>
            <h2 className="fs-1 text-danger">Please Subscribe</h2>
            <p className="fs-5">Subscription is required to file a complaint.</p>
            <div className="d-flex justify-content-around mt-4">
              <button className="btn btn-success px-4 py-2" onClick={handleSubscribe}>
                Subscribe
              </button>
              <button className="btn btn-secondary px-4 py-2" onClick={() => setShowSubscriptionMessage(false)}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Focus;
