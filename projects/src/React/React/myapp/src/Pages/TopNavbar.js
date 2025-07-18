import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import broker from "./nb_logo_trans-min.png";
import './TopNavbar.css';
import LoginModal from "./LoginModal";

function TopNavbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
        <img src={broker} alt="logo-left" style={{ width: '250px', height: '70px', marginRight: '10px', marginLeft: '10px' }} />
        <div className="H">
          <div class="btn-group" role="group"></div>
          <Nav.Link as={NavLink} to='/FrontPage'>
            <Button variant="outline-secondary rounded-pill px-4" style={{ width: '90px', height: '40px' }}>Home</Button>
          </Nav.Link>
          <div class="btn-group" >
            <Link to='/Owner'>
              <button class="btn btn-success rounded-pill px-4" style={{ width: '95px', height: '40px' }}>Owner</button>
            </Link>
            <button class="btn btn-outline-danger rounded-pill px-4" style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)} style={{ width: '100px', height: '40px' }}>Log In</button>
            <button class="btn btn-danger rounded-pill px-4" style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)} style={{ width: '110px', height: '40px' }} >Sign Up</button>
            <div className="dropdown">
              <button class="btn btn-outline-dark rounded-pill px-4" style={{ width: '85px', height: '40px' }}>Menu</button>
              <ul className="dropdown-menu small-menu">
                <li><Link to="/">Post Property</Link></li>
                <li><Link to="/">Gallery</Link></li>
                <li><Link to="/">History</Link></li>
                <li><Link to="/">Feedback</Link></li>
                <li><Link to="/">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>


      </div>

      {/* Bottom Navbar */}
      <section>

        <Navbar className="bg-body-tertiary x">
          <Container>
            
              <Nav className="me-auto ">
                <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">HouseListing</Button>
              </Nav.Link>
              
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">Tenant</Button>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">Home Detail Page</Button>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">Booking System</Button>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">Payment integration</Button>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">Dashboard</Button>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link as={NavLink} to='/about'>
                <Button variant="secondary">Admin panel</Button>
              </Nav.Link>
              </Nav>
            
          </Container>
        </Navbar>

      </section>

      {/* ✅ Login Modal Component */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
}

export default TopNavbar;
