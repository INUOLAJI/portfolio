import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { projectsData } from '../data/projectsData'; // Import the data

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // Safely find the project by converting the URL parameter string to a matching ID
  const project = projectsData ? projectsData.find(p => p.id === parseInt(projectId)) : null;

  // Safety check: If the user types a random ID in the URL or project doesn't exist
  if (!project) {
    return (
      <div className="bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
        <Container className="py-5 text-center">
          <h2 className="display-5 fw-bold text-danger mb-3">Project Not Found</h2>
          <p className="text-secondary mb-4">The case study you are looking for does not exist or has been moved.</p>
          <Link to="/project" className="btn btn-outline-info fw-bold px-4 py-2">
            ← Back to Projects
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      {/* Inline Styles for cohesive look across detail pages */}
      <style>{`
        .text-glow {
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .gradient-mesh {
          background: linear-gradient(135deg, rgba(33, 37, 41, 0.9) 0%, rgba(0, 229, 255, 0.05) 100%);
        }
      `}</style>

      <Container className="content-fade-in mt-5 pt-4">
        <Link to="/project" className="text-info text-decoration-none mb-4 d-inline-block fw-bold font-monospace">
          ← Back to All Projects
        </Link>

        <Row className="gy-5">
          {/* Left Column: Visual Showcase Placeholder */}
         <Col lg={7}>
          <img
          src={project.image}
          alt={project.title}
          className="rounded-3 shadow-lg w-100"
          style={{ height: '400px', objectFit: 'cover' }}
         />
</Col>

          {/* Right Column: Case Study Data */}
          <Col lg={5}>
            <h1 className="display-4 fw-bold text-glow text-light mb-3">{project.title}</h1>
            
            <h5 className="text-info mt-4 font-monospace small tracking-wider">THE CHALLENGE</h5>
            <p className="text-secondary fs-6" style={{ lineHeight: '1.6' }}>{project.challenge || "No description provided."}</p>

            <h5 className="text-info mt-4 font-monospace small tracking-wider">THE SOLUTION</h5>
            <p className="text-light fs-6" style={{ lineHeight: '1.6' }}>{project.solution || "No description provided."}</p>

            <h5 className="text-info mt-4 font-monospace small tracking-wider">TECH STACK</h5>
            <div className="d-flex flex-wrap gap-2">
              {project.tech && project.tech.map(t => (
                <Badge key={t} bg="transparent" className="border border-info text-info p-2 px-3 fw-normal">
                  {t}
                </Badge>
              ))}
            </div>

            {project.impact && (
              <div className="mt-4 p-4 bg-info bg-opacity-10 rounded border-start border-info border-4 shadow-sm">
                <h6 className="text-info mb-2 font-monospace tracking-wide">BUSINESS IMPACT</h6>
                <p className="small mb-0 text-light opacity-90" style={{ lineHeight: '1.5' }}>{project.impact}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetail;