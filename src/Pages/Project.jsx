import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button, Badge, Nav, Navbar, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

// Import your project mockups or screenshots here:
// import ecommerceImg from '../assets/ecommerce-dashboard.png';
// import portalImg from '../assets/client-portal.png';

const Projects = () => {
  const projectList = projectsData.map(project => {
    let category = "fullstack";
    let scope = "Enterprise Build";
    let metrics = "Real-time Sync";
    let liveLink = "#";

    if (project.id === 1) {
      category = "fullstack";
      scope = "Enterprise Build";
      metrics = "Socket.io Core";
      liveLink = "https://marvelous-store-front.vercel.app";
    } else if (project.id === 2) {
      category = "fullstack";
      scope = "Client Portal";
      metrics = "Stripe Secured";
      liveLink = "https://client-portal-psi-umber.vercel.app/"
    // } else if (project.id === 3) {
    //   category = "data";
    //   scope = "Microservice";
    //   metrics = "AWS Serverless";
    } else if (project.id === 3) {
      category = "backend";
      scope = "Routing Engine";
      metrics = "301 Redirects";
      liveLink = "https://url-shortenener.onrender.com";
    } else if (project.id === 4) {
      category = "backend";
      scope = "REST Engine";
      metrics = "JWT Auth Verified";
      liveLink= "https://blogs-api-w90z.onrender.com/api/schema/swagger/"
    } else if (project.id === 5) {
      category = "fullstack";
      scope = "Real-Time Chat";
      metrics = "WebSocket Live";
      liveLink = "https://talkbox-git-main-inuolajis-projects.vercel.app";
    }

    return {
      id: project.id,
      title: project.title,
      category: category,
      scope: scope,
      metrics: metrics,
      description: project.solution,
      tech: project.tech,
      liveLink: liveLink,
      github: project.github,
      image: project.image
    };
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const filteredProjects = projectList.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleFilter = (f) => { setActiveFilter(f); setActiveIndex(0); };
  const handleSearch = (e) => { setSearchQuery(e.target.value); setActiveIndex(0); };

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
        .carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .carousel-slide {
          flex: 0 0 100%;
          max-width: 100%;
          padding: 0 8px;
        }
        @media (min-width: 768px) {
          .carousel-slide { flex: 0 0 50%; max-width: 50%; }
        }
        @media (min-width: 992px) {
          .carousel-slide { flex: 0 0 33.333%; max-width: 33.333%; }
        }
        .carousel-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none; padding: 0; cursor: pointer;
          transition: all 0.2s ease;
        }
        .carousel-dot.active {
          background: #0dcaf0;
          width: 24px;
          border-radius: 4px;
        }
        .carousel-arrow {
          width: 42px; height: 42px; border-radius: 50%;
          background: rgba(13, 202, 240, 0.08);
          border: 1px solid rgba(13, 202, 240, 0.3);
          color: #0dcaf0; font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s ease;
        }
        .carousel-arrow:hover {
          background: rgba(13, 202, 240, 0.18);
          border-color: #0dcaf0;
        }
        .carousel-arrow:disabled {
          opacity: 0.25; cursor: not-allowed;
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
              Digital solutions built to scale businesses and simplify backend workflows.
            </p>
          </Col>

          <Col lg={5}>
            <InputGroup>
              <Form.Control
                placeholder="Search projects or stack (e.g., PHP, React)..."
                aria-label="Search portfolio projects"
                className="premium-search py-2"
                value={searchQuery}
                onChange={handleSearch}
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Live Filtering Tabs Strip */}
        <Row className="mb-5">
          <Col>
            <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>// ALL ARCHITECTURES</button>
              <button className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`} onClick={() => handleFilter('fullstack')}>FULL-STACK</button>
              <button className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`} onClick={() => handleFilter('backend')}>BACKEND APIs & ENGINEs</button>
              <button className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`} onClick={() => handleFilter('data')}>DATA SYSTEMS</button>
            </div>
          </Col>
        </Row>

        {/* Carousel Showcase */}
        {filteredProjects.length > 0 ? (() => {
          // slides per view based on screen — we compute max index
          const slidesPerView = typeof window !== 'undefined'
            ? window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1
            : 3;
          const maxIndex = Math.max(0, filteredProjects.length - slidesPerView);
          const clampedIndex = Math.min(activeIndex, maxIndex);
          const translateX = clampedIndex * (100 / slidesPerView);

          return (
            <>
              <div style={{ overflow: 'hidden' }}>
                <div
                  ref={trackRef}
                  className="carousel-track"
                  style={{ transform: `translateX(-${translateX}%)` }}
                >
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="carousel-slide">
                      <Card className="h-100 bg-secondary bg-opacity-10 border-secondary border-opacity-25 hover-lift shadow-sm overflow-hidden d-flex flex-column">
                        <div className="card-img-wrapper">
                          <img src={project.image} alt={project.title} loading="lazy" />
                          <div className="card-img-overlay-mesh"></div>
                          <div className="card-meta-content">
                            <div className="font-monospace text-muted small">
                              <span className="text-info d-block meta-text fw-bold">{project.scope.toUpperCase()}</span>
                              <span className="text-white-50 opacity-75 small">&lt;{project.category}/&gt;</span>
                            </div>
                            <div className="font-monospace text-secondary small">
                              <span className="d-block text-glow border border-info border-opacity-30 px-2 py-1 rounded bg-dark bg-opacity-70" style={{ fontSize: '0.75rem', color: '#0dcaf0' }}>
                                {project.metrics}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Card.Body className="d-flex flex-column pt-3">
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
                          <div className="mt-auto">
                            <Row className="gx-2 mb-2">
                              {project.liveLink !== '#' && (
                                <Col>
                                  <Button href={project.liveLink} target="_blank" rel="noopener noreferrer" variant="info" className="w-100 btn-sm fw-bold text-dark">
                                    Live Demo
                                  </Button>
                                </Col>
                              )}
                              <Col>
                                <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="outline-secondary" className="w-100 btn-sm text-white border-secondary">
                                  GitHub Source
                                </Button>
                              </Col>
                            </Row>
                            <Link to={`/projects/${project.id}`} className="btn btn-outline-info w-100 fw-bold btn-sm text-glow font-monospace">
                              ANALYZE CASE STUDY →
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
                <button
                  className="carousel-arrow"
                  onClick={() => setActiveIndex(i => Math.max(0, i - 1))}
                  disabled={clampedIndex === 0}
                >
                  &#8592;
                </button>

                <div className="d-flex gap-2">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot ${clampedIndex === i ? 'active' : ''}`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>

                <button
                  className="carousel-arrow"
                  onClick={() => setActiveIndex(i => Math.min(maxIndex, i + 1))}
                  disabled={clampedIndex === maxIndex}
                >
                  &#8594;
                </button>
              </div>
            </>
          );
        })() : (
          <div className="text-center py-5">
            <h5 className="text-secondary font-monospace">No active architectures match your filter criteria.</h5>
          </div>
        )}
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