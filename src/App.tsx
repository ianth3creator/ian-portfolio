import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import FullTechStack from './components/FullTechStack/FullTechStack';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Homepage */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TechStack />
              <Portfolio />
              <Blog />
              <Contact />
            </>
          } />

          {/* Full Tech Stack Page — loads as a separate page */}
          <Route path="/full-tech-stack" element={<FullTechStack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;