import React from 'react';
import { Container, Row, Col, Card, Badge, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = ["React", "Node.js", "PHP", "MongoDB", "PostgreSQL", "Bootstrap", "Git", "HTML", "Python", "JS"];

  return (
    /* Added pt-5 to offset the fixed navbar height */
    <div className="min-vh-100 bg-dark text-white pt-5 page-bg">
      
      {/* Inline Styles for cohesive branding */}
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
              <Link to="/about" className="nav-link px-3 active text-info">About</Link>
              <Link to="/contact" className="nav-link px-3">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-fade-in mt-5 pt-4">
        {/* Section Heading */}
        <Row className="mb-5">
          <Col>
            <h2 className="display-4 fw-bold border-bottom border-info pb-3 d-inline-block text-glow">
              About Me
            </h2>
          </Col>
        </Row>

        <Row className="gy-5 align-items-center">
          {/* Left Side: Your Story */}
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

          {/* Right Side: Skills & Details */}
          <Col lg={5}>
            <Card className="bg-secondary bg-opacity-10 border-secondary p-4 shadow hover-lift">
              <Card.Body>
                <h4 className="text-light mb-4 pb-2 border-bottom border-secondary border-opacity-20">Technical Toolbox</h4>
                <div className="d-flex flex-wrap gap-2 mb-5">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      bg="transparent" 
                      className="skill-badge border border-info text-info p-2 px-3 fw-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h4 className="text-light mb-3 pb-2 border-bottom border-secondary border-opacity-20">What I Do</h4>
                <ul className="list-unstyled text-secondary fs-6">
                  <li className="mb-3 d-flex align-items-center">
                    <span className="me-2">🚀</span> Custom Web Applications
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="me-2">⚙️</span> Backend System Architecture
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <span className="me-2">📱</span> Responsive UI/UX Design
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="me-2">🔍</span> Performance Optimization
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;