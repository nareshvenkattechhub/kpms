import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "bootstrap/dist/css/bootstrap.min.css";

const SUPABASE_URL = "https://fxqizogzyeybioiwpqar.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cWl6b2d6eWV5YmlvaXdwcWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1MTIwMjMsImV4cCI6MjA1NDA4ODAyM30.WHASrC_EhL4xDp7JJMjtF-IVu9NLgeSV4yKurScD860";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Container style for the whole page
const containerStyle = {
  minHeight: "100vh",
  padding: "2rem",
  background: "#f8f9fa", // Light background for contrast
};

// Header card style with rounded corners and gradient background
const headerCardStyle = {
  background: "linear-gradient(45deg, #2193b0, #6dd5ed)",
  borderRadius: "1rem",
  padding: "1.5rem",
  color: "#fff",
  marginBottom: "2rem",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
};

// Unique button styles (excluding table buttons)

// Show Complaints Button now uses a green-related gradient
const showComplaintsBtnStyle = {
  background: "linear-gradient(45deg, #00b09b, #96c93d)", // green gradient
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  borderRadius: "0.5rem",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease-in-out",
};

// Add Users Button uses a sunset sleek gradient
const addUsersBtnStyle = {
  background: "linear-gradient(45deg, #ff7e5f, #feb47b)", // Sunset gradient
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  borderRadius: "0.5rem",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease-in-out",
};

// Filter Button (vibrant blue gradient)
const filterBtnStyle = {
  background: "linear-gradient(45deg, #00c6ff, #0072ff)",
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  borderRadius: "0.5rem",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease-in-out",
};

// Reset Button (orange-yellow gradient)
const resetBtnStyle = {
  background: "linear-gradient(45deg, #f7971e, #ffd200)",
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  borderRadius: "0.5rem",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease-in-out",
};

// Download PDF Button uses a purple gradient
const downloadPdfBtnStyle = {
  background: "linear-gradient(45deg, #8e2de2, #4a00e0)", // Purple gradient
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  borderRadius: "0.5rem",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease-in-out",
};

// Add Admin Button (teal/green gradient)
const addAdminBtnStyle = {
  background: "linear-gradient(45deg, #11998e, #38ef7d)",
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  borderRadius: "0.5rem",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  transition: "transform 0.2s ease-in-out",
};

const AdminDashboard = () => {
  // View state: "complaints" or "addUser"
  const [view, setView] = useState("complaints");

  // -------------------- Complaints Section --------------------
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter state for complaints view
  const [filters, setFilters] = useState({
    pincode: "",
    mobile_no: "",
    mandal: "",
    district: "",
    place: "", // representing "City"
    country: "",
  });

  const fetchComplaints = async (filterParams = {}) => {
    setLoading(true);
    let query = supabase.from("complaints").select("*");

    if (filterParams.pincode) {
      query = query.eq("pincode", filterParams.pincode);
    }
    if (filterParams.mobile_no) {
      query = query.eq("mobile_no", filterParams.mobile_no);
    }
    if (filterParams.mandal) {
      query = query.ilike("mandal", `%${filterParams.mandal}%`);
    }
    if (filterParams.district) {
      query = query.ilike("district", `%${filterParams.district}%`);
    }
    if (filterParams.place) {
      query = query.ilike("place", `%${filterParams.place}%`);
    }
    if (filterParams.country) {
      query = query.ilike("country", `%${filterParams.country}%`);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching complaints:", error);
      setComplaints([]);
    } else {
      setComplaints(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (view === "complaints") {
      fetchComplaints();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchComplaints(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      pincode: "",
      mobile_no: "",
      mandal: "",
      district: "",
      place: "",
      country: "",
    });
    fetchComplaints();
  };

  const downloadPDF = () => {
    const doc = new jsPDF("l", "mm", "a4");
    doc.setFont("helvetica", "bold");
    doc.text("Complaint Report", 14, 15);
    doc.autoTable({
      startY: 20,
      styles: {
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.5,
      },
      headStyles: {
        fillColor: [0, 0, 0],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      head: [[
        "First Name",
        "Last Name",
        "Door No",
        "Street",
        "Place",
        "Mandal",
        "District",
        "State",
        "Country",
        "Pincode",
        "Mobile No",
        "Email",
        "Voter ID",
        "Aadhar Number",
        "Complaint",
      ]],
      body: complaints.map((c) => [
        c.first_name,
        c.last_name,
        c.door_no,
        c.street,
        c.place,
        c.mandal,
        c.district,
        c.state,
        c.country,
        c.pincode,
        c.mobile_no,
        c.email,
        c.voter_number,
        c.aadhar_number,
        c.complaint,
      ]),
      margin: { top: 20, bottom: 20 },
      pageBreak: "auto",
      theme: "striped",
    });
    doc.save("complaints_report.pdf");
  };

  // -------------------- Add Users Section --------------------
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [newAdminMessage, setNewAdminMessage] = useState("");

  const handleNewAdminChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewAdminSubmit = async (e) => {
    e.preventDefault();
    setNewAdminMessage("");

    const { data: existingAdmin } = await supabase
      .from("admins")
      .select("*")
      .eq("email", newAdmin.email)
      .single();

    if (existingAdmin) {
      setNewAdminMessage("An admin with this email already exists.");
      return;
    }

    const { data: insertedAdmin, error } = await supabase
      .from("admins")
      .insert([
        {
          name: newAdmin.name,
          email: newAdmin.email,
          password: newAdmin.password, // In production, always hash passwords!
        },
      ])
      .single();

    if (error) {
      setNewAdminMessage("Error adding new admin. Please try again.");
    } else {
      setNewAdminMessage("New admin added successfully!");
      setNewAdmin({ name: "", email: "", password: "" });
    }
  };

  return (
    <div style={containerStyle} className="container-fluid">
      {/* Header Card */}
      <div style={headerCardStyle} className="mx-auto">
        <h2 className="mb-0">Admin Dashboard</h2>
      </div>

      {/* Top Navigation Buttons */}
      <div className="mb-3 text-center">
        <button
          style={showComplaintsBtnStyle}
          className="btn me-2"
          onClick={() => setView("complaints")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Show Complaints
        </button>
        <button
          style={addUsersBtnStyle}
          className="btn"
          onClick={() => setView("addUser")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Add Users
        </button>
      </div>

      {view === "complaints" && (
        <>
          {/* Filter Form */}
          <form className="row g-3 mb-4" onSubmit={handleFilterSubmit}>
            <div className="col-12 col-md-2">
              <label htmlFor="pincode" className="form-label">
                Pincode
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                value={filters.pincode}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12 col-md-2">
              <label htmlFor="mobile_no" className="form-label">
                Mobile No
              </label>
              <input
                type="text"
                className="form-control"
                id="mobile_no"
                name="mobile_no"
                value={filters.mobile_no}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12 col-md-2">
              <label htmlFor="mandal" className="form-label">
                Mandal
              </label>
              <input
                type="text"
                className="form-control"
                id="mandal"
                name="mandal"
                value={filters.mandal}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12 col-md-2">
              <label htmlFor="district" className="form-label">
                District
              </label>
              <input
                type="text"
                className="form-control"
                id="district"
                name="district"
                value={filters.district}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12 col-md-2">
              <label htmlFor="place" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="place"
                name="place"
                value={filters.place}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12 col-md-2">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12">
              <button
                style={filterBtnStyle}
                type="submit"
                className="btn me-2"
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Filter
              </button>
              <button
                style={resetBtnStyle}
                type="button"
                className="btn"
                onClick={handleResetFilters}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Reset
              </button>
            </div>
          </form>

          {loading ? (
            <p className="text-center">Loading complaints...</p>
          ) : (
            <>
              <div className="mb-3 text-center">
                <button
                  style={downloadPdfBtnStyle}
                  className="btn"
                  onClick={downloadPDF}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Download PDF
                </button>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Door No</th>
                      <th>Street</th>
                      <th>Place</th>
                      <th>Mandal</th>
                      <th>District</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Pincode</th>
                      <th>Mobile No</th>
                      <th>Email</th>
                      <th>Voter ID</th>
                      <th>Aadhar Number</th>
                      <th>Complaint</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.length > 0 ? (
                      complaints.map((c, index) => (
                        <tr key={index}>
                          <td>{c.first_name}</td>
                          <td>{c.last_name}</td>
                          <td>{c.door_no}</td>
                          <td>{c.street}</td>
                          <td>{c.place}</td>
                          <td>{c.mandal}</td>
                          <td>{c.district}</td>
                          <td>{c.state}</td>
                          <td>{c.country}</td>
                          <td>{c.pincode}</td>
                          <td>{c.mobile_no}</td>
                          <td>{c.email}</td>
                          <td>{c.voter_number}</td>
                          <td>{c.aadhar_number}</td>
                          <td>{c.complaint}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="15" className="text-center">
                          No complaints found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}

      {view === "addUser" && (
        <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-center mb-4">Add New Admin</h3>
          {newAdminMessage && <div className="alert alert-info">{newAdminMessage}</div>}
          <form onSubmit={handleNewAdminSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newAdmin.name}
                onChange={handleNewAdminChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={newAdmin.email}
                onChange={handleNewAdminChange}
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
                value={newAdmin.password}
                onChange={handleNewAdminChange}
                required
              />
            </div>
            <button
              style={addAdminBtnStyle}
              type="submit"
              className="btn w-100"
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Add Admin
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
