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
        <img
          src={broker}
          alt="logo-left"
          style={{ width: '250px', height: '70px', marginRight: '10px' }}
        />
        <div className="H">
          <Link to='/Owner'>
            <button type="button" className="btn btn-success" style={{ width: '100px', height: 30 }}>For Owner</button>
          </Link>
          <h6 style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)}>Signup</h6>
          <h6 style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)}>Login</h6>
          <h6>Menu</h6>
        </div>

        <div className="dropdown">
          <button className="menu-toggle">☰</button>
          <ul className="dropdown-menu small-menu">
            <li><Link to="/">Post Property</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/">History</Link></li>
            <li><Link to="/">Feedback</Link></li>
            <li><Link to="/">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Navbar */}
      <section>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to='/FrontPage'>
                  <Button variant="secondary">Home</Button>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <NavDropdown title={<Button variant="secondary">Authentication</Button>} id="auth-nav-dropdown">
                  <NavDropdown title="Sign In" id="signin-nav-dropdown" drop="end">
                    <NavDropdown.Item as={NavLink} to="/Owner">Owner</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/Tenant">Tenant</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
              </Nav>

              <Nav className="me-auto">
                <NavDropdown title={<Button variant="secondary">HomeListing</Button>} id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to='/PropertyListing'>1BHK</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to='/Tenant'>2BHK</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to='/Tenant'>3BHK</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to='/Tenant'>4BHK</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={NavLink} to='/about'>
                  <Button variant="secondary">Tenant</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/about'>
                  <Button variant="secondary">Home Detail Page</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/about'>
                  <Button variant="secondary">Booking System</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/about'>
                  <Button variant="secondary">Payment integration</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/about'>
                  <Button variant="secondary">Dashboard</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/about'>
                  <Button variant="secondary">Admin panel</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      {/* ✅ Login Modal Component */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
}

export default TopNavbar;
