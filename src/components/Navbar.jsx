import React from 'react'
import './Navbar.css'
import Logo from '../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='header'>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" style={{ width: '50px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='Nav-list' style={{ fontweight:"400",
    marginRight: "5rem"}}>
            <Nav.Link href="#home" style={{ color: '#242d49',letterSpacing: '3px' }} className='text-decoration-none'>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#242d49',letterSpacing: '3px' }} className='text-decoration-none'>About</Nav.Link>
            <Nav.Link href="#projects" style={{ color: '#242d49',letterSpacing: '3px' }} className='text-decoration-none'>Projects</Nav.Link>
            <Nav.Link href="mailto:mohammedasifk29@gmail.com" style={{ color: '#242d49',letterSpacing: '3px' }} className='text-decoration-none'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header