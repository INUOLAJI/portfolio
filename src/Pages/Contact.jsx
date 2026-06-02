import React from 'react';
import { Container, Row, Col, Form, Button, Card, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., Formspree, EmailJS, or API)
    alert("Message template hooked up! Configure your backend handler to receive submissions.");
  };

  return (
    /* Added pt-5 to prevent content from being hidden under the fixed navbar */
    <div className="min-vh-100 bg-dark text-white pt-5 page-bg">
      
      {/* Inline Styles for slick layout visuals */}
      <style>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .hover-lift {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 229, 255, 0.1) !important;
        }
        /* Custom placeholder color override for dark inputs */
        .form-control::placeholder {
          color: #6c757d !important;
          opacity: 0.8;
        }
        .form-control:focus {
          background-color: #1a1d20 !important;
          color: #fff !important;
          border-color: #0dcaf0 !important;
          box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.25) !important;
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
              <Link to="/" className="nav-link px-3">Home</Link>
              <Link to="/project" className="nav-link px-3">Project</Link>
              <Link to="/about" className="nav-link px-3">About</Link>
              <Link to="/contact" className="nav-link px-3 active text-info">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-fade-in mt-5 pt-4">
        <Row className="mb-5">
          <Col>
            <h2 className="display-4 fw-bold border-bottom border-info pb-3 d-inline-block text-glow">
              Get In Touch
            </h2>
            <p className="text-secondary mt-3 fs-5">
              Have a project in mind? Let's build something that makes your work easier.
            </p>
          </Col>
        </Row>

        <Row className="gy-4">
          {/* Contact Information */}
          <Col lg={5}>
            <div className="pe-lg-5">
              <h3 className="mb-4 text-light">Contact Details</h3>
              <div className="mb-4">
                <h5 className="text-info font-monospace small">EMAIL</h5>
                <p className="text-secondary fs-5">belloinuolaji@gmail.com</p>
              </div>
              <div className="mb-4">
                <h5 className="text-info font-monospace small">LOCATION</h5>
                <p className="text-secondary fs-5">Iju-Ota, Ogun state, Nigeria</p>
              </div>
              
              <h5 className="text-info font-monospace small mt-5 mb-3">NETWORKS</h5>
              <div className="d-flex flex-wrap gap-2">
                <Button 
                  variant="outline-info" 
                  size="sm" 
                  href="https://www.linkedin.com/in/bello-inuolaji-637962405" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-lift px-3 text-white border-secondary"
                >
                  LinkedIn
                </Button>

                <Button 
                  variant="outline-info" 
                  size="sm" 
                  href="https://github.com/INUOLAJI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-lift px-3 text-white border-secondary"
                >
                  GitHub
                </Button>

                <Button 
                  variant="outline-info" 
                  size="sm" 
                  href="https://x.com/inuolaji68?s=21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-lift px-3 text-white border-secondary"
                >
                  Twitter
                </Button>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Card className="bg-secondary bg-opacity-10 border-secondary p-4 shadow hover-lift">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formName">
                      <Form.Label className="text-light small fw-bold">Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="John Doe" 
                        required
                        className="text-white bg-dark border-secondary" 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-light small fw-bold">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        required
                        className="text-white bg-dark border-secondary" 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label className="text-light small fw-bold">Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Project Inquiry" 
                    required
                    className="text-white bg-dark border-secondary" 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="text-light small fw-bold">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Tell me about your project..." 
                    required
                    className="text-white bg-dark border-secondary" 
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="info" size="lg" type="submit" className="fw-bold text-dark text-glow">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;