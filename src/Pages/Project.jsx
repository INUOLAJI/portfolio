import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import your project mockups or screenshots here:
// import ecommerceImg from '../assets/ecommerce-dashboard.png';
// import portalImg from '../assets/client-portal.png';
// import analyticsImg from '../assets/analytics-engine.png';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "E-Commerce Admin Dashboard",
      category: "fullstack",
      scope: "Enterprise Build",
      metrics: "12+ API Endpoints",
      description: "A full-stack tool that helps shop owners manage inventory and track sales in real-time.",
      tech: ["Node.js", "React", "PostgreSQL"],
      liveLink: "https://marvelous-store-front.vercel.app",
      github: "https://github.com/INUOLAJI/frontend-ecommerce.git",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" // Replace with your imported file variable (e.g., ecommerceImg)
    },
    {
      id: 2,
      title: "Client Connect Portal",
      category: "backend",
      scope: "Internal Tool",
      metrics: "8 Database Tables",
      description: "Streamlined business operations by allowing clients to book appointments and sign documents digitally.",
      tech: ["Express", "PostgreSQL", "Bootstrap"],
      liveLink: "#",
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80" // Replace with your imported file variable
    },
    {
      id: 3,
      title: "Analytics Engine",
      category: "data",
      scope: "Microservice",
      metrics: "Sub-second Sync",
      description: "Automated data collection to help brands reach their ideal audience through targeted insights.",
      tech: ["Python", "React", "AWS"],
      liveLink: "#",
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500&q=80" // Replace with your imported file variable
    }
  ];

  // Search and Filter States
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Dual-filtering mechanism
  const filteredProjects = projectList.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-vh-100 bg-dark text-white pt-5 page-bg d-flex flex-column justify-content-between">
      
      {/* Premium System Styles */}
      <style>{`
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0, 229, 255, 0.15) !important;
          border-color: #0dcaf0 !important;
        }
        .hover-lift:hover .card-img-wrapper img {
          transform: scale(1.05);
        }
        .hover-lift:hover .card-img-overlay-mesh {
          background: rgba(33, 37, 41, 0.4);
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .premium-search {
          background-color: rgba(33, 37, 41, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #fff !important;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .premium-search:focus {
          border-color: #0dcaf0 !important;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.2) !important;
        }
        /* Custom premium framing for your project image */
        .card-img-wrapper {
          position: relative;
          height: 180px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .card-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        /* Dark gradient tint to match your dark web framework styling */
        .card-img-overlay-mesh {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(33, 37, 41, 1) 0%, rgba(33, 37, 41, 0.4) 60%, rgba(33, 37, 41, 0.2) 100%);
          z-index: 1;
          transition: background 0.3s ease;
        }
        .card-meta-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1rem;
        }
        .filter-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #adb5bd;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          font-family: monospace;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
        }
        .filter-btn:hover, .filter-btn.active {
          color: #0dcaf0;
          border-color: #0dcaf0;
          background: rgba(0, 229, 255, 0.03);
        }
        .meta-text {
          font-size: 0.75rem;
          letter-spacing: 0.5px;
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
              <Link to="/project" className="nav-link px-3 active text-info">Project</Link>
              <Link to="/about" className="nav-link px-3">About</Link>
              <Link to="/contact" className="nav-link px-3">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="content-fade-in mt-5 pt-4 flex-grow-1">
        {/* Header Introduction Block */}
        <Row className="mb-5 align-items-end gy-4">
          <Col lg={7}>
            <h2 className="display-4 fw-bold border-bottom border-info pb-3 d-inline-block text-glow">
              Featured Projects
            </h2>
            <p className="text-secondary mt-3 fs-5 mb-0">
              Digital solutions built to scale businesses and simplify workflows.
            </p>
          </Col>
          
          <Col lg={5}>
            <InputGroup>
              <Form.Control
                placeholder="Search projects or stack (e.g., React)..."
                aria-label="Search portfolio projects"
                className="premium-search py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Live Filtering Tabs Strip */}
        <Row className="mb-5">
          <Col>
            <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>// ALL ARCHITECTURES</button>
              <button className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setActiveFilter('fullstack')}>FULL-STACK</button>
              <button className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`} onClick={() => setActiveFilter('backend')}>BACKEND APIs</button>
              <button className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`} onClick={() => setActiveFilter('data')}>DATA SYSTEMS</button>
            </div>
          </Col>
        </Row>

        {/* Dynamic Showcase Grid */}
        <Row className="gy-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <Card className="h-100 bg-secondary bg-opacity-10 border-secondary border-opacity-25 hover-lift shadow-sm overflow-hidden d-flex flex-column">
                  
                  {/* Dynamic Image Container Layout with Floating Meta Badges */}
                  <div className="card-img-wrapper">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="card-img-overlay-mesh"></div>
                    
                    <div className="card-meta-content">
                      <div className="font-monospace text-muted small">
                        <span className="text-info d-block meta-text fw-bold">{project.scope.toUpperCase()}</span>
                        <span className="text-white-50 opacity-75 small">&lt;{project.category}/&gt;</span>
                      </div>
                      <div className="font-monospace text-secondary small">
                        <span className="d-block text-glow tracking-normal border border-info border-opacity-30 px-2 py-1 rounded bg-dark bg-opacity-70 extra-small" style={{ fontSize: '0.75rem', color: '#0dcaf0' }}>
                          {project.metrics}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Card.Body className="d-flex flex-column pt-3 position-relative" style={{ zIndex: 2 }}>
                    <h4 className="text-info fw-bold mb-3">{project.title}</h4>
                    <Card.Text className="text-secondary flex-grow-1 small mb-4" style={{ lineHeight: '1.6' }}>
                      {project.description}
                    </Card.Text>
                    
                    <div className="mb-4">
                      {project.tech.map((t) => (
                        <Badge key={t} bg="dark" className="me-2 mb-2 border border-secondary border-opacity-40 fw-normal text-light font-monospace opacity-90 p-2">
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

                      <Link to={`/projects/${project.id}`} className="btn btn-outline-info w-100 fw-bold btn-sm text-glow font-monospace tracking-wide">
                        ANALYZE CASE STUDY →
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <h5 className="text-secondary font-monospace">No active architectures match your filter criteria.</h5>
            </Col>
          )}
        </Row>
      </Container>

      {/* Let's Connect CTA Strip */}
      <div className="bg-secondary bg-opacity-10 py-5 border-t border-secondary border-opacity-10 mt-5 w-100">
        <Container className="text-center py-2">
          <h4 className="fw-bold text-light mb-2">Need a tailored web architecture solution?</h4>
          <p className="text-secondary small mb-4">Let's coordinate on structural designs to build out your target workflows.</p>
          <Link to="/contact">
            <Button variant="info" className="fw-bold text-dark text-glow px-4 py-2">
              Start A Project Connection
            </Button>
          </Link>
        </Container>
      </div>

    </div>
  );
};

export default Projects;