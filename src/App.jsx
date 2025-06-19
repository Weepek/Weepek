import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Service from './component/service';
import LandingPage2 from './component/Landingpage2';
import Features from './component/Features';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Faq from './component/Faq';
import Servicenewpage from './component/servicenewpage';
import ScrollToTop from './component/ScrollToTop';
import WhatsAppButton from './component/WhatsAppButton';

const Home = () => (
  <main>
    <section id="home" className="scroll-mt-20">
      <LandingPage2 />
    </section>
   
    <section id="project" className="scroll-mt-20">
      <Project />
    </section>
     <section id="about" className="scroll-mt-20">
      <Servicenewpage />
    </section>
    <section id="Faq" className="scroll-mt-20">
      <Faq />
    </section>
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/weepek" element={<Home />} />
          <Route path="/weepek/Contact" element={<Contact />} />
          <Route path="/weepek/About" element={<Features />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;