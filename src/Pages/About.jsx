import React from 'react';
import { Container, Row, Col, Card, Badge, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = ["React", "Node.js", "PHP", "MongoDB", "PostgreSQL", "Bootstrap", "Git", "HTML", "Python", "JS", "Django"];

  // Core metrics demonstrating development values
  const principles = [
    { icon: "🛡️", title: "Clean Architecture", desc: "Writing testable, decoupled, and maintainable object-oriented codebases." },
    { icon: "⚡", title: "Performance First", desc: "Optimizing database execution times, caching states, and rendering pathways." },
    { icon: "📈", title: "Scalable Logic", desc: "Designing system components explicitly engineered to grow with business workflows." }
  ];

  const timelineData = [
    {
      year: "2026 - Present",
      role: "Independent Full-Stack Engineer",
      company: "Contract & Client Builds",
      description: "Architecting end-to-end web software, automating business internal pipelines, and engineering optimized database structures for local brands and clients."
    },
    {
      year: "2025 - 2026",
      role: "Backend & Systems Focus",
      company: "Open Source / Core Dev",
      description: "Deep-dived into Node.js ecosystems, REST API optimizations, and structured access control systems using PostgreSQL and MongoDB."
    },
    {
      year: "2024 - 2025",
      role: "Frontend Specialist Journey",
      company: "Software Foundation",
      description: "Mastered declarative UI building using React, modern JavaScript frameworks, responsive UI patterns, and styling architectures like Bootstrap."
    }
  ];

  return (
    <div className="min-vh-100 bg-dark text-white pt-5 page-bg d-flex flex-column justify-content-between">
      
      {/* Premium Core Branding Styles */}
      <style>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 229, 255, 0.12) !important;
          border-color: #0dcaf0 !important;
        }
        /* Skill badge enhancements */
        .skill-badge {
          transition: all 0.2s ease;
          border: 1px solid rgba(13, 202, 240, 0.3) !important;
        }
        .skill-badge:hover {
          color: #fff !important;
          background: #0dcaf0 !important;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        /* Custom timeline styles */
        .timeline-container {
          border-left: 2px solid rgba(13, 202, 240, 0.2);
          padding-left: 25px;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -32px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #0dcaf0;
          box-shadow: 0 0 8px #0dcaf0;
        }
        .cv-btn {
          border: 1px solid #0dcaf0;
          color: #0dcaf0;
          background: transparent;
          font-family: monospace;
          transition: all 0.3s ease;
        }
        .cv-btn:hover {
          background: rgba(0, 229, 255, 0.08);
          color: #0dcaf0;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.3);
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
              <Link to="/about" className="nav-link px-3 active text-info">About</Link>
              <Link to="/contact" className="nav-link px-3">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-fade-in mt-5 pt-4 flex-grow-1">
        {/* Section Heading with CV Download Integration */}
        <Row className="mb-5 align-items-end gy-3">
          <Col md={8}>
            <h2 className="display-4 fw-bold border-bottom border-info pb-3 d-inline-block text-glow mb-0">
              About Me
            </h2>
          </Col>
          <Col md={4} className="text-md-end">
            <Button 
              href="/Bello_Abdulmuqtadir_Inuolaji_resume.pdf" 
              download="Bello_Abdulmuqtadir_Inuolaji_resume.pdf"
              className="cv-btn px-4 py-2 fw-bold text-glow"
            >
              DOWNLOAD CV.EXE ↓
            </Button>
          </Col>
        </Row>

        {/* Story & Technical Box Content Block */}
        <Row className="gy-5 align-items-start mb-5">
          <Col lg={7}>
            <div className="pe-lg-5">
              <p className="lead text-info mb-4 font-monospace tracking-wider">
                Full-Stack Developer & Problem Solver
              </p>
              <h3 className="mb-4 text-light">Helping businesses grow through technology.</h3>
              <p className="text-secondary fs-5 mb-4" style={{ lineHeight: '1.7' }}>
                I am a Full-Stack Developer dedicated to building digital solutions 
                that streamline business operations and connect brands with their ideal audience. 
                I turn complex workflows into intuitive web experiences, making it easier 
                for your customers to engage and for your business to scale.
              </p>
              <p className="text-secondary fs-5" style={{ lineHeight: '1.7' }}>
                Whether it's building a robust backend or a responsive frontend, 
                my goal is always the same: to create tools that make work easier 
                to manage and results easier to achieve.
              </p>
            </div>
          </Col>

          <Col lg={5}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 shadow hover-lift">
              <Card.Body>
                <h4 className="text-light mb-4 pb-2 border-bottom border-secondary border-opacity-20">Technical Toolbox</h4>
                <div className="d-flex flex-wrap gap-2 mb-5">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      bg="transparent" 
                      className="skill-badge text-info p-2 px-3 fw-normal font-monospace"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h4 className="text-light mb-3 pb-2 border-bottom border-secondary border-opacity-20">What I Do</h4>
                <ul className="list-unstyled text-secondary fs-6">
                  <li className="mb-3 d-flex align-items-center">
                    <span className="me-2 text-info">🚀</span> Custom Web Applications
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="me-2 text-info">⚙️</span> Backend System Architecture
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="me-2 text-info">📱</span> Responsive UI/UX Design
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="me-2 text-info">🔍</span> Performance Optimization
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* NEW: Core Engineering Principles Strip */}
        <Row className="gy-4 my-5 py-4 border-top border-bottom border-secondary border-opacity-10">
          {principles.map((p, idx) => (
            <Col key={idx} md={4}>
              <div className="p-3">
                <div className="fs-3 mb-2">{p.icon}</div>
                <h5 className="text-info font-monospace fw-bold mb-2">{p.title}</h5>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.5" }}>{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Experience Timeline Section */}
        <Row className="my-5 pt-4">
          <Col lg={12} className="mb-4">
            <span className="font-monospace text-info small tracking-wider uppercase d-block mb-1">CHRONOLOGY</span>
            <h3 className="text-light fw-bold">Engineering Journey</h3>
          </Col>
          
          <Col lg={10} className="mx-auto mt-3">
            <div className="timeline-container">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item position-relative mb-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                    <span className="font-monospace text-info fw-bold small bg-dark border border-secondary border-opacity-30 px-2 py-1 rounded">
                      {item.year}
                    </span>
                    <h5 className="text-light fw-bold m-0 mt-2 mt-sm-0">{item.role}</h5>
                  </div>
                  <h6 className="text-muted font-monospace mb-3 small">{item.company}</h6>
                  <p className="text-secondary small" style={{ lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Branding Wrapper */}
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

export default About;