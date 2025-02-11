import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const professions = {
  "IT & Software": ["Software Engineer", "Data Scientist", "UI/UX Designer", "Cloud Engineer", "Cybersecurity Analyst", "AI/ML Engineer"],
  "Healthcare & Medicine": ["Doctor / Surgeon", "Nurse / Paramedic", "Pharmacist", "Medical Lab Technician", "Physiotherapist", "Radiologist"],
  "Engineering & Core Industries": ["Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Chemical Engineer", "Aerospace Engineer", "Petroleum Engineer"],
  "Finance & Business": ["Chartered Accountant (CA)", "Investment Banker", "Financial Analyst", "Stock Trader", "Business Consultant", "Marketing Manager"],
  "Law & Governance": ["Lawyer", "Judge", "Legal Consultant", "Police Officer", "Forensic Expert"],
  "Media & Entertainment": ["Journalist / News Anchor", "Film Director / Producer", "Actor / Model", "Photographer / Videographer", "Graphic Designer"],
  "Education & Research": ["Teacher", "Professor", "Research Scientist", "Librarian", "Educational Consultant"],
  "Government & Public Services": ["IAS Officer", "IPS Officer", "IFS Officer", "Bank Clerk", "PO", "Railway Employee", "Post Office Staff"],
  "Sales & Marketing": ["Sales Executive", "Digital Marketer", "SEO Specialist", "Social Media Manager"],
  "Hospitality & Tourism": ["Hotel Manager", "Chef", "Travel Agent", "Event Planner"],
  "Skilled Trades & Labor": ["Electrician", "Plumber", "Carpenter", "Mechanic"],
};

const educationCategories = ["Primary", "Secondary", "Graduation", "Masters", "PhD"];
const problemsList = ["Health", "Food", "Crop", "Job", "Roads", "Startup", "House", "Global Needs", "Other"];
const statesOfIndia = ["Andhra Pradesh", "Telangana", "Karnataka", "Maharashtra", "Tamil Nadu"];

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastname:"",
    adhar:"",
    voter:"",
    phno:"",
    hno:"",
    city:"",
    mandal:"",
    district:"",
    state:"",
    country:"",
    
    professionCategory: "",
    mainProfession: "",
    subProfession: "",

    organization: { name: "", city: "", phone: "", pincode: "", email: "" },

    business: { name: "", city: "", phone: "", pincode: "", email: "" },

    farming: { land: "", buffalo: 0, ox: 0, cows: 0 },

    student: { category: "", institution: { name: "", city: "", phone: "", pincode: "" } },

    problemCategories: [],
    problemDescriptions: {},
  });








  const handleSubmitss = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      const response = await fetch("http://localhost:3000/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Complaint submitted successfully!");
        setFormData({
          fullName: "",
          lastname: "",
          adhar:"",
          voter:"",
          phno:"",
          hno: "",
          city: "",
          mandal: "",
          district: "",
          state: "",
          country: "",
          professionCategory: "",
          mainProfession: "",
          subProfession: "",
          organization: { name: "", city: "", phone: "", pincode: "", email: "" , sourceType: "" },
          business: { name: "", city: "", phone: "", pincode: "", email: "" },
          farming: { land: "", buffalo: 0, ox: 0, cows: 0 },
          student: { category: "", institution: { name: "", city: "", phone: "", pincode: "" } },
          problemCategories: [],
          problemDescriptions: {},
        });
      } else {
        throw new Error("Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    }
  };
  


  const handleSubmit = (event) => {
    console.log("Form Data Submitted:", formData);
  }




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProblemCheck = (problem) => {
    let updatedProblems = [...formData.problemCategories];
    if (updatedProblems.includes(problem)) {
      updatedProblems = updatedProblems.filter((p) => p !== problem);
      delete formData.problemDescriptions[problem];
    } else {
      updatedProblems.push(problem);
    }
    setFormData({ ...formData, problemCategories: updatedProblems });
  };

  return (
    <Container className="mt-4 p-4 rounded" style={{ background: "linear-gradient(to right, #00a000, #00a000)" }}>
      <h2 className="mb-3 text-white">Complaint Form</h2>
      <Form>
        <h4 className="text-white">Personal Details</h4>
     



        <Form.Group className="mb-4">
  <h5>Personal Details</h5>
  <Row>
    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="Full Name" name="fullName" onChange={handleChange} />
    </Col>

    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="Last Name" name="lastname" onChange={handleChange} />
    </Col>


    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="voter card number" name="voter" onChange={handleChange} />
    </Col>


    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="adhar card number" name="adhar" onChange={handleChange} />
    </Col>



    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="Phone number" name="phno" onChange={handleChange} />
    </Col>



    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="House No." name="hno" onChange={handleChange} />
    </Col>

    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="City" name="city" onChange={handleChange} />
    </Col>

    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="Mandal" name="mandal" onChange={handleChange} />
    </Col>

    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="District" name="district" onChange={handleChange} />
    </Col>

    <Col md={4} className="py-2">
      <Form.Control as="select" name="state" onChange={handleChange}>
        <option>Select State</option>
        {statesOfIndia.map(state => <option key={state}>{state}</option>)}
      </Form.Control>
    </Col>

    <Col md={4} className="py-2">
      <Form.Control type="text" placeholder="Country" name="country" onChange={handleChange} />
    </Col>
  </Row>
</Form.Group>



<h4 className="text-white mt-4">Professional Details</h4>
<Row>
  {['Job', 'Business', 'Farming', 'Student'].map(category => (
    <Col md={3} key={category} className="py-2">
      <Form.Check 
        type="radio" 
        label={category} 
        name="professionCategory" 
        value={category} 
        onChange={handleChange} 
      />
    </Col>
  ))}
</Row>

{formData.professionCategory === "Job" && (
  <Form.Group className="mt-3">
    <h5>Job Details</h5>

    {/* Main Profession Selection */}
    <Form.Control as="select" name="mainProfession" onChange={handleChange} className="py-2">
      <option>Select Profession</option>
      {Object.keys(professions).map(prof => (
        <option key={prof}>{prof}</option>
      ))}
    </Form.Control>

    {/* Sub-Profession Selection (Shown if a profession is selected) */}
    {formData.mainProfession && (
      <Form.Control as="select" name="subProfession" onChange={handleChange} className="py-2 mt-2">
        <option>Select Sub-Profession</option>
        {professions[formData.mainProfession].map(sub => (
          <option key={sub}>{sub}</option>
        ))}
      </Form.Control>
    )}

    {/* Organization Details */}
    <h6 className="mt-3">Organization Details</h6>
    <Form.Control type="text" placeholder="Organization Name" name="organization.name" onChange={handleChange} className="py-2 mt-2" />
    <Form.Control type="text" placeholder="Organization City" name="organization.city" onChange={handleChange} className="py-2 mt-2" />
    <Form.Control type="text" placeholder="Organization Phone" name="organization.phone" onChange={handleChange} className="py-2 mt-2" />
    <Form.Control type="text" placeholder="Organization Pincode" name="organization.pincode" onChange={handleChange} className="py-2 mt-2" />
    <Form.Control type="text" placeholder="Organization Email" name="organization.email" onChange={handleChange} className="py-2 mt-2" />

    {/* Organization Source Type */}
    <Form.Control as="select" name="organization.sourceType" onChange={handleChange} className="py-2 mt-2">
      <option>Select Source Type</option>
      <option value="Contact">Contact</option>
      <option value="Outsource">Outsource</option>
      <option value="Private">Private</option>
      <option value="Government">Government</option>
    </Form.Control>
  </Form.Group>
)}





{formData.professionCategory === "Business" && (
  <Form.Group className="mt-3">
    <h5>Business Details</h5>

    <Form.Control 
      type="text" 
      placeholder="Business Name" 
      name="business.name" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="text" 
      placeholder="Business City" 
      name="business.city" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="text" 
      placeholder="Business Phone" 
      name="business.phone" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="text" 
      placeholder="Business Pincode" 
      name="business.pincode" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="text" 
      placeholder="Business Email" 
      name="business.email" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />
  </Form.Group>
)}





{/* Farming Details Section */}
{formData.professionCategory === "Farming" && (
  <Form.Group className="mt-3">
    <h5>Farming Details</h5>

    <Form.Control 
      type="number" 
      placeholder="Land Details" 
      name="farming.land" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="number" 
      placeholder="Buffalo" 
      name="farming.buffalo" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="number" 
      placeholder="Ox" 
      name="farming.ox" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="number" 
      placeholder="Cows" 
      name="farming.cows" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />
  </Form.Group>
)}

{/* Student Details Section */}
{formData.professionCategory === "Student" && (
  <Form.Group className="mt-3 ">
    <h5>Student Details</h5>

    {/* Education Category Selection */}
    <Form.Control as="select" name="student.category" onChange={handleChange} className="py-2">
      <option>Select Education Category</option>
      {educationCategories.map(cat => (
        <option key={cat}>{cat}</option>
      ))}
    </Form.Control>

    {/* Institution Details */}
    <h6 className="mt-3">Institution Details</h6>
    <Form.Control 
      type="text" 
      placeholder="Institution Name" 
      name="student.institution.name" 
      onChange={handleChange} 
      className="py-2 mt-2"  
    />

    <Form.Control 
      type="text" 
      placeholder="City" 
      name="student.institution.city" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="tel" 
      placeholder="Phone" 
      name="student.institution.phone" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />

    <Form.Control 
      type="text" 
      placeholder="Pincode" 
      name="student.institution.pincode" 
      onChange={handleChange} 
      className="py-2 mt-2" 
    />
  </Form.Group>
)}





        <h4 className="text-white mt-4">Problem Categories</h4>
        <Row>
          {problemsList.map(problem => (
            <Col md={3} key={problem}>
              <Form.Check type="checkbox" label={problem} checked={formData.problemCategories.includes(problem)} onChange={() => handleProblemCheck(problem)} />
              {formData.problemCategories.includes(problem) && (
                <Form.Control as="textarea" rows={2} placeholder={`Describe ${problem} issue`} name={problem} onChange={(e) => setFormData({ ...formData, problemDescriptions: { ...formData.problemDescriptions, [problem]: e.target.value } })} />
              )}
            </Col>
          ))}
        </Row>

        <Button variant="dark" className="mt-3" onClick={handleSubmit}>
  Submit
</Button>
      </Form>
    </Container>
  );
};

export default ComplaintForm;
