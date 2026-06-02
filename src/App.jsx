import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import ProjectDetail from './pages/ProjectDetail';
// import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path="/" means the homepage */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        
        {/* path="/projects" would show your projects page */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;