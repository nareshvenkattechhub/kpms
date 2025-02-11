import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../components/Navigation";  // Top page navigation


import GoogleTranslate from "../components/GoogleTranslate";

const projectUrl = "https://fxqizogzyeybioiwpqar.supabase.co";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cWl6b2d6eWV5YmlvaXdwcWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTIwMjMsImV4cCI6MjA1NDA4ODAyM30.WHASrC_EhL4xDp7JJMjtF-IVu9NLgeSV4yKurScD860";


const supabase = createClient(projectUrl,apiKey);

const AdminAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (isLogin) {
      const { data, error } = await supabase
        .from("admins")
        .select("*")
        .eq("email", form.email)
        .single();

      if (error || !data) {
        setMessage("Admin not found or an error occurred.");
        return;
      }

      if (data.password !== form.password) {
        setMessage("Invalid password.");
        return;
      }

      setMessage(`Welcome, ${data.name}!`);
      navigate("/admindashboard");
    } else {
      const { data: existingAdmin } = await supabase
        .from("admins")
        .select("*")
        .eq("email", form.email)
        .single();

      if (existingAdmin) {
        setMessage("An admin with this email already exists.");
        return;
      }

      const { error: insertError } = await supabase.from("admins").insert([
        { name: form.name, email: form.email, password: form.password },
      ]);

      if (insertError) {
        setMessage("Error during signup. Please try again.");
        return;
      }

      setMessage("Signup successful! Please log in.");
      setForm({ name: "", email: "", password: "" });
      setIsLogin(true);
    }
  };

  return (



<>




    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#000" }}>
<GoogleTranslate/>

      <div className="card p-4 shadow-lg" style={{ width: "60vh", height: "50vh", backgroundColor: "#222", borderRadius: "12px", color: "#fff" }}>
        <h3 className="text-center mb-4">🔑 Admin Panel</h3>
        {message && <div className="alert alert-info text-center">{message}</div>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-0"
                style={{ borderBottom: "2px solid lightblue", borderRadius: "0" }}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="mb-3 fs-">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-0"
              style={{ borderBottom: "2px solid lightblue", borderRadius: "0" }}
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-0"
              style={{ borderBottom: "2px solid lightblue", borderRadius: "0" }}
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
            <span>
              Don't have an account? {" "}
              <button className="btn btn-link text-white" onClick={() => { setIsLogin(false); setMessage(""); }}>
                Signup
              </button>
            </span>
          ) : (
            <span>
              Already have an account? {" "}
              <button className="btn btn-link text-white" onClick={() => { setIsLogin(true); setMessage(""); }}>
                Login
              </button>
            </span>
          )}
        </div>
      </div>
    </div>


    </>
  );
};

export default AdminAuth;
