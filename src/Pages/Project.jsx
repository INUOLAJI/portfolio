import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "E-Commerce Admin Dashboard",
      description: "A full-stack tool that helps shop owners manage inventory and track sales in real-time.",
      tech: ["Node.js", "React", "MongoDB"],
      liveLink: "https://marvelous-store-front.vercel.app",
      github: "https://github.com/INUOLAJI/frontend-ecommerce.git"
    },
    {
      id: 2,
      title: "Client Connect Portal",
      description: "Streamlined business operations by allowing clients to book appointments and sign documents digitally.",
      tech: ["Express", "PostgreSQL", "Bootstrap"],
      liveLink: "#",
      github: "https://github.com"
    },
    {
      id: 3,
      title: "Analytics Engine",
      description: "Automated data collection to help brands reach their ideal audience through targeted insights.",
      tech: ["Python", "React", "AWS"],
      liveLink: "#",
      github: "https://github.com"
    }
  ];

  return (
    <div className="min-vh-100 bg-dark text-white pt-5 page-bg">
      {/* Inline Styles to patch hover animations smoothly */}
      <style>{`
        .hover-lift {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 229, 255, 0.1) !important;
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
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
              {/* Fixed: Removed trailing whitespace characters from path urls */}
              <Link to="/" className="nav-link px-3">Home</Link>
              <Link to="/project" className="nav-link px-3 active text-info">Project</Link>
              <Link to="/about" className="nav-link px-3">About</Link>
              <Link to="/contact" className="nav-link px-3">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-fade-in mt-5 pt-4">
        <Row className="mb-5">
          <Col>
            <h2 className="display-4 fw-bold border-bottom border-info pb-3 d-inline-block text-glow">
              Featured Projects
            </h2>
            <p className="text-secondary mt-3 fs-5">
              Digital solutions built to scale businesses and simplify workflows.
            </p>
          </Col>
        </Row>

        <Row className="gy-4">
          {projectList.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <Card className="h-100 bg-secondary bg-opacity-10 border-secondary hover-lift shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <h4 className="text-info mb-3">{project.title}</h4>
                  <Card.Text className="text-secondary flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} bg="dark" className="me-2 mb-2 border border-secondary fw-normal text-light">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* Dynamic Action Buttons */}
                  <div className="mt-auto">
                    <Row className="gx-2 mb-2">
                      {project.liveLink !== "#" && (
                        <Col>
                          <Button 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            variant="info" 
                            className="w-100 btn-sm fw-bold text-dark"
                          >
                            Live Demo
                          </Button>
                        </Col>
                      )}
                      <Col>
                        <Button 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          variant="outline-secondary" 
                          className="w-100 btn-sm text-white border-secondary"
                        >
                          GitHub
                        </Button>
                      </Col>
                    </Row>

                    <Link to={`/projects/${project.id}`} className="btn btn-outline-info w-100 fw-bold btn-sm">
                      View Case Study →
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;