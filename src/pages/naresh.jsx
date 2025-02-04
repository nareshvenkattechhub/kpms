import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const InputForm = () => {
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
    profession: "",
    company_name: "",
    company_address: "",
    employer_contact: "",
    company_pincode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="mt-4 p-4" style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)", borderRadius: "10px" }}>
      <Form onSubmit={handleSubmit}>
        <Row>
          {Object.keys(formData).map((key) => (
            key !== "profession" && key !== "company_name" && key !== "company_address" && key !== "employer_contact" && key !== "company_pincode" ? (
              <Col md={6} sm={12} key={key}>
                <Form.Group className="mb-3" controlId={key}>
                  <Form.Label>{key.replace("_", " ").toUpperCase()}</Form.Label>
                  <Form.Control type="text" name={key} value={formData[key]} onChange={handleChange} required />
                </Form.Group>
              </Col>
            ) : null
          ))}
        </Row>

        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Profession</Form.Label>
              <Form.Select name="profession" value={formData.profession} onChange={handleChange} required>
                <option value="">Select Profession</option>
                <option value="Farmer">Farmer</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Accountant">Accountant</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Company Name (if applicable)</Form.Label>
              <Form.Control type="text" name="company_name" value={formData.company_name} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Company Address</Form.Label>
              <Form.Control type="text" name="company_address" value={formData.company_address} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Employer Contact Number</Form.Label>
              <Form.Control type="text" name="employer_contact" value={formData.employer_contact} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Company Address Pincode</Form.Label>
              <Form.Control type="text" name="company_pincode" value={formData.company_pincode} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="dark" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default InputForm;
