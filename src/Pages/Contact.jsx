import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Nav, Navbar, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  // Formspree API endpoint configuration
  const FORMSPREE_URL = "https://formspree.io/f/xgobekel"; 

  // Form and Modal states
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: null });
  const [showModal, setShowModal] = useState(false);

  const presetSubjects = [
    "Full-Stack Build",
    "API Integration",
    "Database Architecture",
    "Consulting/Freelance"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePresetSelect = (subjectText) => {
    setFormData((prev) => ({ ...prev, subject: subjectText }));
  };

  // Async submission pipeline
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, error: null });
        // Trigger our custom styled modal popup
        setShowModal(true);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed. Please verify endpoint configuration.");
      }
    } catch (err) {
      setStatus({ loading: false, error: err.message });
    }
  };

  // Handles closing the modal and refreshing the DOM structure instantly
  const handleModalClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="min-vh-100 bg-dark text-white pt-5 page-bg d-flex flex-column justify-content-between">
      
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
        .network-btn {
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #adb5bd !important;
          font-family: monospace;
          transition: all 0.2s ease;
        }
        .network-btn:hover {
          color: #0dcaf0 !important;
          border-color: #0dcaf0 !important;
          background: rgba(0, 229, 255, 0.03);
        }
        .chip-btn {
          font-family: monospace;
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          color: #adb5bd;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .chip-btn:hover, .chip-btn.active {
          color: #0dcaf0;
          border-color: #0dcaf0;
          background: rgba(0, 229, 255, 0.05);
        }
        /* Custom styled modal aesthetics */
        .cyber-modal .modal-content {
          background-color: #151719 !important;
          border: 1px solid rgba(0, 229, 255, 0.2) !important;
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.15);
        }
      `}</style>

      {/* Navigation Bar */}
      <Navbar fixed="top" variant="dark" expand="lg" className="py-4 px-3 px-lg-5 bg-dark border-b border-secondary border-opacity-10">
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold fs-3 text-info text-glow">
            CodeGhostFolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-uppercase tracking-wide small">
              <Link to="/" className="nav-link px-3">Home</Link>
              <Link to="/project" className="nav-link px-3">Project</Link>
              <Link to="/about" className="nav-link px-3">About</Link>
              <Link to="/contact" className="nav-link px-3 active text-info">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-fade-in mt-5 pt-4 flex-grow-1">
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
          {/* Left Column: Details */}
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
                <Button variant="outline-info" size="sm" href="https://www.linkedin.com/in/bello-inuolaji-637962405" target="_blank" rel="noopener noreferrer" className="network-btn px-3">
                  LinkedIn
                </Button>
                <Button variant="outline-info" size="sm" href="https://github.com/INUOLAJI" target="_blank" rel="noopener noreferrer" className="network-btn px-3">
                  GitHub
                </Button>
                <Button variant="outline-info" size="sm" href="https://x.com/inuolaji68?s=21" target="_blank" rel="noopener noreferrer" className="network-btn px-3">
                  Twitter
                </Button>
              </div>
            </div>
          </Col>

          {/* Right Column: Dynamic Form Module */}
          <Col lg={7}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 shadow hover-lift min-vh-50 d-flex flex-column justify-content-center">
              
              <div className="mb-4">
                <span className="text-muted d-block small font-monospace mb-2">QUICK ARCHITECTURE SELECT:</span>
                <div className="d-flex flex-wrap gap-2">
                  {presetSubjects.map((subj) => (
                    <button 
                      key={subj}
                      type="button"
                      className={`chip-btn ${formData.subject === subj ? 'active' : ''}`}
                      onClick={() => handlePresetSelect(subj)}
                      disabled={status.loading}
                    >
                      // {subj.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {status.error && (
                <div className="alert alert-danger bg-danger bg-opacity-10 text-danger border-danger border-opacity-20 font-monospace small mb-4">
                  ⚠️ ERROR: {status.error}
                </div>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formName">
                      <Form.Label className="text-light small fw-bold">Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={status.loading}
                        className="text-white bg-dark border-secondary border-opacity-50" 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-light small fw-bold">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="name@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={status.loading}
                        className="text-white bg-dark border-secondary border-opacity-50" 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label className="text-light small fw-bold">Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject"
                    placeholder="Project Inquiry or structural needs..." 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={status.loading}
                    className="text-white bg-dark border-secondary border-opacity-50" 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="text-light small fw-bold">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    rows={5} 
                    placeholder="Tell me about your project target specs..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={status.loading}
                    className="text-white bg-dark border-secondary border-opacity-50" 
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="info" size="lg" type="submit" className="fw-bold text-dark text-glow d-flex align-items-center justify-content-center gap-2" disabled={status.loading}>
                    {status.loading ? (
                      <>
                        <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                        <span>COMPILING TRANSMISSION...</span>
                      </>
                    ) : (
                      "Send System Message"
                    )}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Styled Success Pop-out Modal */}
      <Modal 
        show={showModal} 
        onHide={handleModalClose} 
        centered 
        className="cyber-modal text-white"
        backdrop="static" // Prevents clicking outside from missing the reload action
      >
        <Modal.Body className="text-center p-5">
          <div className="display-4 text-info text-glow mb-3">🛸</div>
          <h4 className="fw-bold font-monospace text-glow text-info mb-3">
            TRANSMISSION SECURED
          </h4>
          <p className="text-secondary small mb-4">
            Your connection payload was successfully compiled and dispatched to Formspree hooks. I'll review logs shortly.
          </p>
          <Button 
            variant="info" 
            className="fw-bold text-dark px-4 font-monospace btn-sm w-100" 
            onClick={handleModalClose}
          >
            ACKNOWLEDGE & INITIALIZE REBOOT
          </Button>
        </Modal.Body>
      </Modal>

      {/* Footer Wrapper */}
      <footer className="py-4 border-t border-secondary border-opacity-10 text-center w-100 mt-5">
        <Container>
          <p className="text-secondary small mb-0 font-monospace">
            © {new Date().getFullYear()} CodeGhostFolio. Built by Bello Inuolaji. All Rights Reserved.
          </p>
        </Container>
      </footer>

    </div>
  );
};

export default Contact;