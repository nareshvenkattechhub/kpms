import { create } from "zustand";
import axios from "axios";

const apiUrl = "https://web-production-55db.up.railway.app";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,

  // Sign Up
  signUp: async (username, email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/signup`, 
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Sign-up failed";
      console.error("Sign-up error:", errorMessage);
      set({ error: errorMessage });
    }
  },

  // Login
  login: async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, 
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const userData = response.data.user;

      console.log(userData);

      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("userid", userData.id);
        set({ user: userData, error: null });
      } else {
        throw new Error("Invalid login response from server");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      console.error("Login error:", errorMessage);
    
      set({ error: errorMessage });
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    localStorage.setItem("subscriptionStatus", "inactive");
    set({ user: null });
  },

  // Check Subscription
  checkSubscription: async (userId) => {
    try {
      if (!userId) {
        console.error("User ID is missing.");
        return;
      }

      const response = await axios.get(`${apiUrl}/checksubscribe?user_id=${userId}`);
      const subscriptionStatus = response.data?.status || "inactive";

      localStorage.setItem("subscriptionStatus", subscriptionStatus);

      set({ subscriptionStatus, error: null });
    } catch (error) {
      console.error("Subscription check error:", error);
      localStorage.setItem("subscriptionStatus", "inactive");
      set({ subscriptionStatus: "inactive", error: "Subscription check failed" });
    }
  },

///recheck compiant subscription to prevnt from the webtools ststs data steaaling

 complaintsSubscription: async (userId) => {
  if (!userId) {
    console.error("User ID is missing.");
    return "inactive"; // Return 'inactive' if userId is not provided
  }

  try {
    const response = await axios.get(`${apiUrl}/checksubscribe?user_id=${userId}`);
    const subscriptionStatus = response.data?.status || "inactive";

    // Store in localStorage if needed
    localStorage.setItem("subscriptionStatus", subscriptionStatus);

    return subscriptionStatus; // Return the subscription status
  } catch (error) {
    console.error("Subscription check error:", error);

    // Store 'inactive' status in case of error
    localStorage.setItem("subscriptionStatus", "inactive");

    return "inactive"; // Return 'inactive' in case of error
  }
}


,



// Handle Subscription
handleSubscribe: async (totalAmount, years, loadRazorpayScript) => {
  try {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Failed to load payment gateway. Please try again.");
      return;
    }

    const userId = localStorage.getItem("userId");  // Retrieve user ID
    const plan = `${years} Year(s)`;  // Subscription plan

    const response = await axios.post(`${apiUrl}/subscribe`, 
      { amount: totalAmount, userId, plan },  // Send userId & plan to backend
      { headers: { "Content-Type": "application/json" } }
    );

    const order = response.data;

    const options = {
      key: "rzp_test_lIViua73ZlKVhi",
      amount: order.amount,
      currency: "INR",
      name: "KPMPP",
      description: `Subscription Plan - ${years} Year(s)`,
      order_id: order.id,
      notes: { user_id: userId, plan: plan },  // Attach user data
      handler: function () {
        localStorage.setItem("subscriptionStatus", "active");
        window.location.href = "/dashboard";
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed. Please try again.");
  }
},






}));

export default useAuthStore;
