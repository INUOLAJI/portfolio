import React from 'react';
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/WhatsApp Image 2026-06-02 at 9.30.34 PM.jpeg'; // Adjust this import path based on your folder structure

const Home = () => {
  return (
    /* Added pt-5 (padding-top) to ensure content starts below the fixed navbar */
    <div className="min-vh-100 bg-dark text-white page-bg pt-5">
      
      {/* Inline Styles for slick animations & branding glow */}
      <style>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .gradient-box {
          background: linear-gradient(135deg, rgba(33, 37, 41, 0.9) 0%, rgba(0, 229, 255, 0.05) 100%);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .gradient-box:hover {
          transform: scale(1.02);
          border-color: #0dcaf0 !important;
        }
        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
      
      {/* Navigation Bar - Fixed at top */}
      <Navbar fixed="top" variant="dark" expand="lg" className="py-4 px-3 px-lg-5 bg-dark border-b border-secondary border-opacity-10">
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold fs-3 text-info text-glow">
            CodeGhostFolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-uppercase tracking-wide small">
              {/* Fixed: Stripped trailing whitespace characters from path URLs */}
              <Link to="/" className="nav-link px-3 active text-info">Home</Link>
              <Link to="/project" className="nav-link px-3">Project</Link>
              <Link to="/about" className="nav-link px-3">About</Link>
              <Link to="/contact" className="nav-link px-3">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="py-5 mt-lg-5 pt-5 content-fade-in">
        <Row className="align-items-center gy-5">
          {/* Left Column: Text */}
          <Col xs={12} md={7} className="text-center text-md-start">
            <p className="text-info font-monospace mb-2 tracking-wider">Hi, my name is</p>
            <h1 className="display-2 fw-bold text-light mb-3">
              Bello Inuolaji.
            </h1>
            <h2 className="display-5 fw-semibold text-secondary mb-4">
              I build things for the web.
            </h2>
            <p className="lead text-secondary mb-5 m-auto ms-md-0" style={{ maxWidth: '500px', lineHeight: '1.7' }}>
              I am a Full-Stack Developer dedicated to building digital solutions that streamline business operations and connect brands with their ideal audience.
            </p>
            
            {/* CTA Linked directly to projects page */}
            <Link to="/project">
              <Button 
                variant="outline-info" 
                size="lg" 
                className="px-4 py-3 fw-bold shadow-sm text-glow"
              >
                Check out my work!
              </Button>
            </Link>
          </Col>

          {/* Right Column: Visual */}
          <Col xs={12} md={5} className="d-flex justify-content-center">
            <div 
              className="rounded-3 border border-secondary overflow-hidden gradient-box"
              style={{ width: '320px', height: '320px', borderStyle: 'solid' }}
            >
              <img 
                src={myPhoto} 
                alt="Bello Inuolaji" 
                className="portfolio-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;