import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Hand from "./Hand.jpg";
import ForRent from "../Assets/Images/ForRent.jpg"
import Home from "./Home.jpg";
import "./FrontPage.css";
import { FaHome, FaStar, FaClipboardCheck } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FrontPage = () => {
    
  return (
    <>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hand}
          alt="First slide"
          width='50%'
          height='600px'
          
         /> 
         <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home}
          alt="Second slide"
          width='100%'
          height='600px'
          
          
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ForRent}
          alt="Third slide"
          width='50%'
          height='600px'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

<div className="features-container">
      <div className="feature">
        <FaHome className="feature-icon"  /> {/* replaced icon here */}
        <h5>Find Your Future Dream Home</h5>
        <p>
        Browse verified properties with detailed listings and affordable rent plans.
        </p>
      </div>

      <div className="feature">
        <FaStar className="feature-icon" />
        <h5>Highlighted features or benefits</h5>
        <h1>Sahil Sonar </h1>
        <p>
        Highlight premium or top-rated homes
        </p>
      </div>

      <div className="feature">
        <FaClipboardCheck className="feature-icon" />
        <h5>Important tasks or verifications</h5>
        <p>
        Builds trust by marking verified/approved properties.</p>
      </div>
    </div>

      <hr></hr>
    <footer className="bg-light text-dark pt-8 pb-2">
      <Container>
        <Row>
          <Col md={3}>
            <h6>Contact Information:</h6>
            <ul className="list-unstyled">              
              <li>*Email address for general inquiries and support.</li>
              <li>*Phone number for direct communication, especially for urgent matters.</li>
              <li>*Physical address (if applicable), especially for businesses with a physical location.</li>
              
            </ul>
          </Col>
          <Col md={3}>
            <h6>Site Navigation & Key Links:</h6>
            <ul className="list-unstyled">
              <li>Sitemap: A structured overview of the website's content, aiding in navigation.</li>
              <li>FAQ: Answers to common questions about the rental process  </li>
              <li>About Us: A link to a page about the company or platform.</li>
              <li>Privacy Policy: Information on how user data is handled.</li>
              
            </ul>
          </Col>
          <Col md={3}>
            <h6>Social Media Links:</h6>
            <ul className="list-unstyled">
              <li>Icons: Include links to your social media profiles (Facebook, Instagram, Twitter, etc.).</li>
              <li>Engagement: Encourage users to connect and follow your brand on social media</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Design Considerations:</h6>
            <ul className="list-unstyled">
              <li>Mobile-Friendly: Ensure the footer is responsive and works well on all devices</li>
              <li>Clean and Organized: Use a clear layout with appropriate spacing and visual hierarchy.</li>
              <li>Branding: Incorporate your brand colors and logo for consistent branding.</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light"/>
        <p className="text-center small">© 2025 Online House Rental System. All rights reserved.</p>
      </Container>
        <div class='Footerp'>
           
        </div>
          <Container>
            <Row className="text-center">
              <Col xs={12} md={6}>
                <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', marginRight: '20px', textDecoration: 'none' }}>
                  <FaWhatsapp size={30} /> Chat on WhatsApp
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', textDecoration: 'none' }}>
                  <FaInstagram size={30} /> Follow on Instagram
                </a>
              </Col>
            </Row>
            
          </Container>
        </footer> 
           
    </>
  );
}

export default FrontPage;