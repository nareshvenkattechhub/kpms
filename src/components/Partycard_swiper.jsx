import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";


import { Link } from "react-router-dom";


const cardBackgroundColors = [
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
  "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)"
];

const translations = [
  { lang: "en", partyName: "KPM", slogan: "KARSHIKA PRAJA MARG", joinButton: "Join the Party" },
  { lang: "as", partyName: "কে পি এম", slogan: "কৃষক প্ৰজা মাৰ্গ", joinButton: "পাৰ্টিত যোগ দিন" },
  { lang: "bn", partyName: "কে পি এম", slogan: "কৃষক প্ৰজা মাৰ্গ", joinButton: "পাটিত যোগ দিন" },
  { lang: "gu", partyName: "કે પી એમ", slogan: "કૃષક પ્રજા માર્ગ", joinButton: "પાર્ટીમાં જોડાઓ" },
  { lang: "kn", partyName: "ಕೆ ಪಿ ಎಂ", slogan: "ಕೃಷಿಕ ಪ್ರಜಾ ಮಾರ್ಗ", joinButton: "ಪಾರ್ಟಿಗೆ ಸೇರಿ" },
  { lang: "ml", partyName: "കെ പി എം", slogan: "കർഷക പ്രജാ മാർഗ്", joinButton: "പാർട്ടിയിൽ ചേരൂ" },
  { lang: "mr", partyName: "के पी एम", slogan: "कृषक प्रजा मार्ग", joinButton: "पार्टीमध्ये सामील व्हा" },
  { lang: "ne", partyName: "के पी एम", slogan: "कृषक प्रजाका मार्ग", joinButton: "पार्टीमा सामेल हुनुहोस्" },
  { lang: "or", partyName: "କେ ପି ଏମ", slogan: "କୃଷକ ପ୍ରଜା ମାର୍ଗ", joinButton: "ପାର୍ଟିକୁ ଯୋଗ ଦିଅ" },
  { lang: "pa", partyName: "ਕੇ ਪੀ ਐਮ", slogan: "ਕ੍ਰਿਸ਼ਕ ਪ੍ਰਜਾ ਮਾਰਗ", joinButton: "ਪਾਰਟੀ ਵਿਚ ਸ਼ਾਮਲ ਹੋਵੋ" },
  { lang: "ta", partyName: "கே பி எம்", slogan: "கிருஷி பிரஜா பாதை", joinButton: "பார்ட்டியில் சேருங்கள்" },
  { lang: "te", partyName: "కె పి ఎం", slogan: "కర్ష్క ప్రజా మార్గ్", joinButton: "పార్టీలో చేరండి" }
];

function Partycard_swiper() {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={true}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1},
        768: { slidesPerView: 1 },
        1200: { slidesPerView: 2 }
      }}
    >
      {translations.map((item, i) => (
        <SwiperSlide key={i} className="card-slide">
          <div
            className="card shadow-lg border-0 h-100 text-center"
            style={{
              background: cardBackgroundColors[i % cardBackgroundColors.length],
              borderRadius: "30px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              padding: "20px"
            }}
          >


            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "20vh",
                  height: "6vh",
                  backgroundColor: "blue",
                  color: "white",
                  fontSize: "4vh",
                  fontWeight: "bold",
                  borderRadius: "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase"
                }}
              >
                {item.partyName}
              </div>
              <h5 className="card-subtitle fs-3 fw-bold text-muted">{item.slogan}</h5>
           
<Link
  to="/login"
  className="btn btn-success btn-lg mt-3 px-4"
  style={{
    fontSize: "4vh",
    fontWeight: "bold",
    borderRadius: "25px",
    transition: "background 0.3s ease",
  }}
>
  {item.joinButton}
</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Partycard_swiper;
