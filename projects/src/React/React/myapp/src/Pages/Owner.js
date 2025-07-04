// import React from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from 'react-bootstrap';



function Tenant(){
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      address: '',
      contact: '',
      city: '',
      state: '',
      pincode: '',
      password: '',
      checkbox: false
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };
  
    const handleCancel = () => {
      setFormData({
        fullName: '',
        email: '',
        address: '',
        contact: '',
        city: '',
        state: '',
        pincode: '',
        password: '',
        checkbox: false
      });
      setSubmitted(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      // You can also send formData to backend here
    };
  
    return (
      <>
      <h2 className="text-center my-4">Owner Sign Up Form</h2>
  <Form onSubmit={handleSubmit}></Form>
      <Form onSubmit={handleSubmit}>
        {/* Full Name */}
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Full Name.</Form.Text>
        </Form.Group>
  
        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        {/* Address */}
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Home address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Home address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Enter the proper address.</Form.Text>
        </Form.Group>
  
        {/* Contact & City */}
        <Form.Group as={Row} className="mb-3" controlId="formContactCity">
  <Col sm={6}>
    <Form.Label>Contact No.</Form.Label>
    <Form.Control
      type="tel"
      placeholder="Contact no."
      name="contact"
      value={formData.contact}
      maxLength={10} // restrict to 10 digits
      onChange={(e) => {
        const value = e.target.value;
        // Allow only digits
        if (/^\d*$/.test(value)) {
          handleChange(e);
        }
      }}
    />
  </Col>
     
          <Col sm={6}>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
  
        {/* State & Pincode */}
        <Form.Group as={Row} className="mb-3" controlId="formStatePincode">
          <Col sm={6}>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
  
        {/* Password */}
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Form.Text muted>
            Your password must be 8–20 characters, contain letters and numbers,
            and not include spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
  
        {/* Checkbox */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </Form.Group>
  
        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button variant="secondary" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
  
        {/* Success Message */}
        {submitted && (
          <Alert variant="success" className="mt-3">
            Form submitted successfully!
          </Alert>
        )}
      </Form>
      </>   
  );
}
export default Tenant;
