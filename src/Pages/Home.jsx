import React from 'react';
import { Container, Row, Col, Button, Nav, Navbar, Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/WhatsApp Image 2026-06-02 at 9.30.34 PM.jpeg'; 

const Home = () => {
  // const toolkit = [
  //   { name: "React", rating: 90 },
  //   { name: "Node.js", rating: 85 },
  //   { name: "JavaScript (ES6+)", rating: 90 },
  //   { name: "Bootstrap", rating: 95 },
  //   { name: "MongoDB", rating: 80 },
  //   { name: "PostgreSQL", rating: 90 },
  //   { name: "Git", rating: 85 },
  //   { name: "Python", rating: 80 },
  //   { name: "PHP", rating: 75 },
  //   {name : "Django", rating: 85}
  // ];

  return (
    <div className="min-vh-100 bg-dark text-white page-bg pt-5">
      
      {/* Inline Styles */}
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
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: rgba(33, 37, 41, 0.5);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 229, 255, 0.1);
          border-color: #0dcaf0 !important;
        }
        .custom-progress {
          height: 8px;
          background-color: rgba(255, 255, 255, 0.05) !important;
          border-radius: 4px;
          overflow: hidden;
        }
        .custom-progress .progress-bar {
          background-color: #0dcaf0 !important;
          box-shadow: 0 0 8px rgba(0, 229, 255, 0.6);
        }
        .process-step {
          border-left: 2px dashed rgba(13, 202, 240, 0.3);
          position: relative;
        }
        .process-badge {
          position: absolute;
          left: -14px;
          top: 0;
          background: #0dcaf0;
          color: #212529;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.8rem;
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
            
            <Link to="/project">
              <Button variant="outline-info" size="lg" className="px-4 py-3 fw-bold shadow-sm text-glow">
                Check out my work!
              </Button>
            </Link>
          </Col>

          <Col xs={12} md={5} className="d-flex justify-content-center">
            <div className="rounded-3 border border-secondary overflow-hidden gradient-box" style={{ width: '320px', height: '320px', borderStyle: 'solid' }}>
              <img src={myPhoto} alt="Bello Inuolaji" className="portfolio-img" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Core Services Section */}
      <Container className="py-5 my-5">
        <Row className="mb-4 text-center text-md-start">
          <Col>
            <h3 className="text-light fw-bold mb-2">What I Focus On</h3>
            <p className="text-secondary">Engineering reliable applications from the database up to the user interface.</p>
          </Col>
        </Row>
        
        <Row className="g-4">
          <Col xs={12} md={4}>
            <Card className="h-100 border-secondary border-opacity-25 feature-card p-3 text-white">
              <Card.Body>
                <div className="text-info fs-3 mb-3">⚙️</div>
                <Card.Title className="fw-bold text-light">Robust Backends</Card.Title>
                <Card.Text className="text-secondary small">
                  Building secure RESTful APIs, handling asynchronous architectures, and automating complex workflows using Node.js and Python.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100 border-secondary border-opacity-25 feature-card p-3 text-white">
              <Card.Body>
                <div className="text-info fs-3 mb-3">📱</div>
                <Card.Title className="fw-bold text-light">Dynamic Frontends</Card.Title>
                <Card.Text className="text-secondary small">
                  Crafting fast, intuitive, and fully responsive user interfaces using React, JavaScript, and Bootstrap that prioritize smooth user journeys.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="h-100 border-secondary border-opacity-25 feature-card p-3 text-white">
              <Card.Body>
                <div className="text-info fs-3 mb-3">📊</div>
                <Card.Title className="fw-bold text-light">Database Management</Card.Title>
                <Card.Text className="text-secondary small">
                  Designing optimized schemas and query layouts for both relational and non-relational storage layers like PostgreSQL and MongoDB.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Percentage Rating Toolkit Layout */}
      {/* <div className="bg-secondary bg-opacity-10 py-5 border-y border-secondary border-opacity-10">
        <Container>
          <Row className="gy-4">
            <Col lg={3} className="text-center text-lg-start">
              <span className="font-monospace text-info small tracking-wider uppercase d-block mb-1">THE TOOLKIT</span>
              <h4 className="fw-bold text-light mb-0">Technical Proficiency</h4>
            </Col>
            <Col lg={9}>
              <Row className="gy-4">
                {toolkit.map((tech) => (
                  <Col xs={12} md={6} key={tech.name}>
                    <div className="mb-2 d-flex justify-content-between align-items-center">
                      <span className="font-monospace text-light fw-bold small">{tech.name}</span>
                      <span className="font-monospace text-info small fw-bold">{tech.rating}%</span>
                    </div>
                    <ProgressBar now={tech.rating} className="custom-progress" />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* NEW SECTION 3: Featured Work Spotlight */}
      <Container className="py-5 my-5">
        <Row className="align-items-end mb-4 text-center text-md-start">
          <Col md={8}>
            <span className="font-monospace text-info small tracking-wider uppercase d-block mb-1">PROOFS OF WORK</span>
            <h3 className="text-light fw-bold mb-0">Featured Project Showcase</h3>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Link to="/project" className="text-info text-decoration-none fw-bold font-monospace small">
              View All Case Studies →
            </Link>
          </Col>
        </Row>

        <Row className="g-4">
          <Col xs={12} md={6}>
            <Card className="border-secondary border-opacity-25 feature-card p-3 text-white h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <span className="font-monospace text-info extra-small d-block mb-2">&lt; FULL-STACK SYSTEM /&gt;</span>
                  <Card.Title className="fw-bold text-light fs-4 mb-3">Enterprise Resource Planner</Card.Title>
                  <Card.Text className="text-secondary small">
                    An internal automation system designed to unify inventory data streams, manage corporate access levels, and optimize tracking metrics.
                  </Card.Text>
                </div>
                <div className="mt-4">
                  <Link to="/project" className="btn btn-sm btn-outline-info text-glow">Explore Build</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="border-secondary border-opacity-25 feature-card p-3 text-white h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <span className="font-monospace text-info extra-small d-block mb-2">&lt; API INTEGRATION /&gt;</span>
                  <Card.Title className="fw-bold text-light fs-4 mb-3">Real-time Data Sync Engine</Card.Title>
                  <Card.Text className="text-secondary small">
                    A multi-threaded Node.js database connector providing sub-second webhook execution patterns between distributed microservices.
                  </Card.Text>
                </div>
                <div className="mt-4">
                  <Link to="/project" className="btn btn-sm btn-outline-info text-glow">Explore Build</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* NEW SECTION 4: My Workflow Process */}
      <div className="bg-secondary bg-opacity-10 py-5 border-t border-secondary border-opacity-10">
        <Container className="my-4">
          <Row className="mb-5 text-center">
            <Col>
              <span className="font-monospace text-info small tracking-wider uppercase d-block mb-1">DEVELOPMENT PIPELINE</span>
              <h3 className="text-light fw-bold">How I Bring Ideas To Life</h3>
            </Col>
          </Row>

          <Row className="gy-4 px-3 px-md-0">
            <Col xs={12} md={4} className="process-step ps-4">
              <div className="process-badge">1</div>
              <h5 className="text-light fw-bold">Blueprint & Schema</h5>
              <p className="text-secondary small mb-0">Mapping structural app requirements into robust architectural systems, endpoints, and secure database relationships before writing raw logic.</p>
            </Col>
            
            <Col xs={12} md={4} className="process-step ps-4">
              <div className="process-badge">2</div>
              <h5 className="text-light fw-bold">Clean & Fast Iteration</h5>
              <p className="text-secondary small mb-0">Writing responsive frontend UI components and performance-optimized backend routes backed by scalable state management paradigms.</p>
            </Col>

            <Col xs={12} md={4} className="process-step ps-4" style={{borderLeft: 'none'}}>
              <div className="process-badge">3</div>
              <h5 className="text-light fw-bold">Deploy & Monitor</h5>
              <p className="text-secondary small mb-0">Launching applications onto server instances with rigorous performance configurations, solid testing, and continuous deployment optimizations.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* NEW SECTION 5: Footer */}
      <footer className="py-4 border-t border-secondary border-opacity-10 text-center">
        <Container>
          <p className="text-secondary small mb-0 font-monospace">
            © {new Date().getFullYear()} CodeGhostFolio. Built by Bello Inuolaji. All Rights Reserved.
          </p>
        </Container>
      </footer>

    </div>
  );
};

export default Home;