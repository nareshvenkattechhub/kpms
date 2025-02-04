import React from "react";

import "../App.css"

import Navigation from "../components/Navigation";  // top page navigation


import Partycard from "../components/Partycard_swiper";


import Preamble from "../components/Preamble";

//nav   
//swiper 
//about
//mission//
//suport 
//conern voice 
//footer






import SupportPage from "./Support";



import About from "./About";
import Vision from "../components/Vision";

import Organization from "../components/Organization";

import MissionSwiper from "../components/Missionswiper";

import VoiceYourConcerns from "../components/Complaint";

import Footer from "../components/Footer";


import GoogleTranslate from "../components/GoogleTranslate";


function Homepage(){

    return ( < >


<div className="homepagecolor">


        <Navigation  ></Navigation>
        <div className="gaps"> </div>

        <Partycard></Partycard> 
        
        <div className="visiongap"> </div>

         <Vision/>
        <div className="gaps"> </div>

        <MissionSwiper/>


        <div className="" style={{marginTop:"20vh"}}> </div>


        <Organization/>
        <div className="" style={{marginTop:"7vh"}}> </div>


        <VoiceYourConcerns/>


        <div className="gaps"> </div>


        <SupportPage/>

        <div className="gaps"> </div>


<Footer/>


</div>    


        </>
   
    
    
    
    
    );
};


export default Homepage;