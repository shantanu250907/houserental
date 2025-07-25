import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Hand from "./Hand.jpg";
// import ForRent from "../Assets/Images/ForRent.jpg"
// import Home from "./Home.jpg";
import "./FrontPage.css";
import { FaHome, FaStar, FaClipboardCheck } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import vid from './vid.mp4';
import { Link } from "react-router-dom";



const FrontPage = () => {
  const [selectedBHK, setSelectedBHK] = useState('');

  const handleSelect = (type) => {
    setSelectedBHK(type);
  };

  return (
    <>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          top: 0,
          left: 0,
          width: "98.8vw",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source
          src={vid}
          type="video/mp4"
        />
      </video>
      <div className="overlay">
        <center><h1 style={{ fontFamily: 'Arrial', color: 'White', fontSize: '3.5rem', textShadow: '0 8px 8px black' }} className="ab">Find Your Future Dream Home</h1></center>
        <br></br>
        <div class="action-buttons">
          <button class="btn buy-btn" style={{ color: "white" }}>Buy</button>
          <button class="btn rent-btn" style={{ color: "white" }}>Rent</button>
        </div>
        <center>

          <table bgcolor="white" >
            <tbody>
              <tr>
                <td>
                  <div class="dropdown-box">
                    <select>
                      <option>Select City</option>
                      <option
                        checked={selectedBHK === "Nashik"}
                        onChange={() => handleSelect("Nashik")}>Nashik</option>
                      <option>Dhule</option>
                      <option>Mumbai</option>
                    </select>
                  </div>
                </td>
                <td>
                  <input type="text" className="q" placeholder="Search upto 3 localities or landmarks" style={{ width: 400 }} />
                </td>
                <td colspan='3'>
                  <Link to='/Search'>
                    <button class="search-btn">
                      <i class="search"></i><img src="https://assets.nobroker.in/nb-new/public/Home/searchIcon.svg" width={20} height={20} /> Search
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown-box1 ">
                    <select>
                      <option style={{ color: "gray" }}>Availability</option>
                      <option>Immediate</option>
                      <option>Within 15 days</option>
                      <option>Within 30 days</option>
                    </select>
                  </div>
                </td>

                <td >
                  &nbsp;&nbsp;
                  <input className="a" type="radio" id="101" name="family" value="Full House" />&nbsp; Full House &nbsp;&nbsp;
                  <input className="a" type="radio" id="102" name="family" value="Full House" />&nbsp;PG/Hostel &nbsp;&nbsp;
                  <input className="a" type="radio" id="103" name="family" value="Full House" />&nbsp;Flatmates &nbsp;&nbsp;
                  <input className="a" type="radio" id="103" name="family" value="Full House" />&nbsp;Rooms &nbsp;&nbsp;

                </td>
                <td>
                  <div className="dropdown-box1 ">
                    <select>
                      <option >BHK Type</option>
                      <option>1 RK</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>3+ BHK</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Link to='/sell' className="ab1"> ------ Are you a Property Owner ? ------</Link>

        </center>
      </div >

      <div className="features-container">
        <div className="feature">
          <FaHome className="feature-icon" />
          <h5>Find Your Future Dream Home</h5>
          <p>
            Browse verified properties with detailed listings and affordable rent plans.
          </p>
        </div>

        <div className="feature">
          <FaStar className="feature-icon" />
          <h5>Highlighted features or benefits</h5>
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

      <hr />
      <footer className="bg-light text-dark pt-8 pb-2">
        <Container>
          <Row >
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
          <hr className="bg-light my-3" />
          <p className="text-center small">© 2025 nobroker. All rights reserved.</p>
        </Container>
        <div class='Footerp'>

        </div>
        {/* <Container>
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

        </Container> */}
      </footer>

    </>
  );
}

export default FrontPage;