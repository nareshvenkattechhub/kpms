import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthStore from '../store/authstore';

import Focus from '../components/Focus';


const Userdash = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!user) {
    navigate('/login');
    return null; // Prevent rendering before redirect
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
   <Focus/>
      <button onClick={() => {
        logout();
        navigate('/login'); // Redirect after logout
      }}>
        Logout
      </button>

    </div>
  );
};

export default Userdash;
