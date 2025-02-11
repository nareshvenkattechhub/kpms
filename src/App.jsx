import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import useAuthStore from './store/authstore';
import Login from './pages/Login';
import Userdash from './pages/Userdash';
import ComplaintForm from './pages/Complaint';
import Subscribe from './pages/Subscribe';

import Homepage from './pages/Home'; 

import Knav from './components/Knav';



import Org from './pages/org';



// Other pages
import Media from "./pages/Media";
import About from "./pages/About";
import Objectives from "./pages/Objectives";
//import ComplaintForm from "./pages/Complaintpage";
import DonationForm from "./pages/Donation";






const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();
  return user ? children : <Navigate to="/login" replace />;
};


const SubscriptionProtectedRoute = ({ children }) => {
  const isSubscribed = localStorage.getItem("subscriptionStatus") === "active";
  return isSubscribed ? children : <Navigate to="/subscribe" replace />;
};



function App() { 
  return (
    <Router>
       <Knav /> 
       

      <Routes>


        {/* 🚫 Public Routes (No Authentication Required) */}


      <Route path="*" element={<Navigate to="/home" replace />} />


        {/* ❌ Unprotected Routes */}
        <Route path="/complaint" element={<ComplaintForm />} />



 
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />

        <Route path="/about" element={<About />} />  

        <Route path="/objectives" element={<Objectives />} />   


        <Route path="/media" element={<Media/>} /> 

        <Route path="/organization" element={<Org/>} /> 









        

          {/* ✅ protected routes   login required */}

        <Route path="/dashboard" element={<ProtectedRoute><Userdash /></ProtectedRoute>} />
      
        <Route path="/subscribe" element={<ProtectedRoute><Subscribe /></ProtectedRoute>} />

        <Route path="/donate" element={<ProtectedRoute><DonationForm  /></ProtectedRoute>} />


        

          {/* ✅ protected routes   login and subscription  required */}


        <Route path="/complaint" element={<SubscriptionProtectedRoute><ComplaintForm /></SubscriptionProtectedRoute>} />


      </Routes>
    </Router>
  );
}

export default App;
