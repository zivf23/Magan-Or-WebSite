import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Download from './components/Download';
import Donate from './components/Donate';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // State for controlling the visibility of the newsletter pop-up modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show newsletter sign-up modal after 15 seconds (unobtrusive pop-up)
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navigation Bar (fixed at top) */}
      <NavBar />

      {/* All sections of the one-page site */}
      <Hero />
      <Features />
      <HowItWorks />
      <Gallery />
      <Download />
      <Donate />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />

      {/* Newsletter Sign-up Modal Pop-up (appears after delay) */}
      {showModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="newsletter-modal-title">
          <div className="modal-content">
            <h2 id="newsletter-modal-title">Join Our Newsletter</h2>
            <p>Stay updated with the latest news and updates from Magen Or.</p>
            <form aria-label="Newsletter sign-up form" onSubmit={(e) => { e.preventDefault(); /* handle subscription */ setShowModal(false); }}>
              <label>
                <span className="visually-hidden">Email address</span>
                <input type="email" name="email" placeholder="Enter your email" required aria-label="Email address" />
              </label>
              <button type="submit">Subscribe</button>
            </form>
            <button className="modal-close" aria-label="Close" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
