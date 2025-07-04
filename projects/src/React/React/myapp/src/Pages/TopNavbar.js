import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Rentt from "../Assets/Images/Rentt.webp";


function TopNavbar() {
    return(
        <>
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img 
    src={Rentt}
    alt="logo-left" 
    style={{ width: '70px', height: '70px', marginRight: '10px' }}
  />
  <h1 style={{ 
    color: 'black', 
    fontFamily: 'Aries', 
    fontWeight: 'bolder', 
    textAlign: 'center' 
  }}>
    Online Houses Rental System
  </h1>
  <img 
    src={Rentt}
    alt="logo-right" 
    style={{ width: '70px', height: '70px', marginLeft: '10px' }}
  />
</div> 
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to='/FrontPage'>{<Button variant="secondary">Home</Button>}</Nav.Link></Nav>
        <Nav className="me-auto">

  <NavDropdown
    title={<Button variant="secondary">Authentication</Button>}
    id="auth-nav-dropdown"
  >

    {/* Sign In (with nested dropdown for roles) */}
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
        <NavDropdown.Item as={NavLink} to='/Tenant'>4BHK</NavDropdown.Item></NavDropdown>


          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/about'>{<Button variant="secondary">Tenant</Button>}</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>{<Button variant="secondary">Home Detail Page</Button>}</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>{<Button variant="secondary">Booking System</Button>}</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>{<Button variant="secondary">Payment integration </Button>}</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>{<Button variant="secondary">Dashboard </Button>}</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>{<Button variant="secondary">Admin panel </Button>}</Nav.Link>




                       
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
        </>
    )
}
export default TopNavbar;