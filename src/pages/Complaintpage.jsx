import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "bootstrap/dist/css/bootstrap.min.css";

// Supabase Credentials (⚠️ Move this to environment variables for security)
const SUPABASE_URL = "https://fxqizogzyeybioiwpqar.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cWl6b2d6eWV5YmlvaXdwcWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTIwMjMsImV4cCI6MjA1NDA4ODAyM30.WHASrC_EhL4xDp7JJMjtF-IVu9NLgeSV4yKurScD860";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    door_no: "",
    street: "",
    place: "",
    mandal: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
    complaint: "",
    mobile_no: "",
    email: "",
    voter_number: "",
    aadhar_number: "",
  });

  const [status, setStatus] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Complaint to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { data, error } = await supabase.from("complaints").insert([formData]);

    if (error) {
      setStatus("Error submitting complaint. Please try again.");
    } else {
      setStatus("Complaint submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        door_no: "",
        street: "",
        place: "",
        mandal: "",
        district: "",
        state: "",
        country: "",
        pincode: "",
        complaint: "",
        mobile_no: "",
        email: "",
        voter_number: "",
        aadhar_number: "",
      }); // Reset form
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ width: "500px", borderRadius: "10px" }}>
        <h3 className="text-center mb-3">Submit a Complaint</h3>
        {status && <p className="text-center text-info">{status}</p>}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Door No</label>
            <input type="text" className="form-control" name="door_no" value={formData.door_no} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Street</label>
            <input type="text" className="form-control" name="street" value={formData.street} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Place</label>
            <input type="text" className="form-control" name="place" value={formData.place} onChange={handleChange} required />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Mandal</label>
              <input type="text" className="form-control" name="mandal" value={formData.mandal} onChange={handleChange} required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">District</label>
              <input type="text" className="form-control" name="district" value={formData.district} onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">State</label>
            <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Complaint</label>
            <textarea className="form-control" name="complaint" rows="3" value={formData.complaint} onChange={handleChange} required></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile No</label>
            <input type="text" className="form-control" name="mobile_no" value={formData.mobile_no} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Voter ID</label>
            <input type="text" className="form-control" name="voter_number" value={formData.voter_number} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Aadhar Number</label>
            <input type="text" className="form-control" name="aadhar_number" value={formData.aadhar_number} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
