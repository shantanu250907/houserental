import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'; 


const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <div className="d-flex">
        <div className="p-4 bg-light" style={{ width: "50%" }}>
          <img src="https://assets.nobroker.in/nb-new/public/Signup/signupHome.png"/>
          <h5><b>Login / Sign up</b></h5>
          <ul className="mt-3" style={{ paddingLeft: '1rem' }}>
            <li>Zero Brokerage.</li>
            <li>Thousands of Trust</li>
            <li>Monthly Brokerage Saver</li>
          </ul>
        </div>

        
        <div className="p-4" style={{ width: "50%" }}>
          <h6><b>Enter phone to continue</b></h6>
          <Form.Group className="mt-3">
             <PhoneInput
            country={'in'}
            inputStyle={{ width: '100%' }}
            placeholder="Enter Mobile Number"
          />
          </Form.Group>
          <Button className="w-100 mt-3" variant="danger">Continue</Button>
          <p className="mt-2 text-muted" style={{ fontSize: '0.8rem' }}>
            By continuing, you agree to our <b>Terms & Conditions</b>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
