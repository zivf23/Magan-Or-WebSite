import React, { useState } from 'react';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        {/* Brand Logo and Name */}
        <div className="brand">
          <img src="assets/images/logo.png" alt="Magen Or logo" className="logo" />
          <span className="brand-name">Magen Or</span>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="menu-toggle" aria-label="Toggle navigation menu" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </button>

        {/* Navigation Links (collapsible on mobile) */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Screenshots</a></li>
          <li><a href="#download" onClick={() => setMenuOpen(false)}>Download</a></li>
          <li><a href="#donate" onClick={() => setMenuOpen(false)}>Donate</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
          <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
