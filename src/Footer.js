import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-credit">
          <p>&copy; {currentYear} Magen Or. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
