import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';



function navigation() {


  return (
<>
  <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="darker">
    <Container >
      <Navbar.Brand href="/">
      <Image id="logo" className='img-fluid circle-rounded   justify-center pull-left' src='images/logo-icon.jpg' width={100} height="auto" alt='tdm logo' />
       <div className="text-muted">All <b>Steel</b> Works (Pty) Ltd</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="responsive-navbar-nav">
      <Nav className="me-2 my-2  flex-lg-shrink-1 text-capitalize">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About-us</Nav.Link>
      <Nav.Link href="/portfolio">Gallery</Nav.Link>
      <Nav.Link href='/service'>Services</Nav.Link>
      <Nav.Link href="/contact">Get-In-Touch</Nav.Link>
      </Nav>            
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  )
}

export default navigation
