import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Travel from './components/Travel';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Travel />
      <Footer />
    </div>
  );
}

export default App;
