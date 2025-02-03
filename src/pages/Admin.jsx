import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SUPABASE_URL = "https://fxqizogzyeybioiwpqar.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cWl6b2d6eWV5YmlvaXdwcWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTIwMjMsImV4cCI6MjA1NDA4ODAyM30.WHASrC_EhL4xDp7JJMjtF-IVu9NLgeSV4yKurScD860";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const AdminAuth = () => {
  // isLogin: true = login mode, false = signup mode
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  // useNavigate hook from react-router-dom to navigate programmatically
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit for login/signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (isLogin) {
      // ----------- LOGIN -----------
      // Query the admins table by email
      const { data, error } = await supabase
        .from("admins")
        .select("*")
        .eq("email", form.email)
        .single();

      if (error || !data) {
        setMessage("Admin not found or an error occurred.");
        return;
      }

      // Compare the password (plain text comparison for demo purposes)
      if (data.password !== form.password) {
        setMessage("Invalid password.");
        return;
      }

      setMessage(`Welcome, ${data.name}!`);
      // Navigate to the admin dashboard if login is successful
      navigate("/admindashboard");
    } else {
      // ----------- SIGNUP -----------
      // Check if an admin with the same email already exists
      const { data: existingAdmin } = await supabase
        .from("admins")
        .select("*")
        .eq("email", form.email)
        .single();

      if (existingAdmin) {
        setMessage("An admin with this email already exists.");
        return;
      }

      // Insert the new admin into the admins table
      const { data: newAdmin, error: insertError } = await supabase
        .from("admins")
        .insert([
          {
            name: form.name,
            email: form.email,
            password: form.password, // In production, NEVER store plain text passwords.
          },
        ])
        .single();

      if (insertError) {
        setMessage("Error during signup. Please try again.");
        return;
      }

      setMessage("Signup successful! Please log in.");
      // Clear the form and switch to login mode
      setForm({ name: "", email: "", password: "" });
      setIsLogin(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">{isLogin ? "Admin Login" : "Admin Signup"}</h3>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          {/* Only show the name field during signup */}
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="text-center mt-3">
          {isLogin ? (
            <>
              <span>Don't have an account? </span>
              <button
                className="btn btn-link"
                onClick={() => {
                  setIsLogin(false);
                  setMessage("");
                }}
              >
                Signup
              </button>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <button
                className="btn btn-link"
                onClick={() => {
                  setIsLogin(true);
                  setMessage("");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
