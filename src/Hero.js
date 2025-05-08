import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero section with tagline and download button">
      <div className="hero-content">
        <h1>Magen Or</h1>
        <p className="tagline">Free Web Content Filter for a Safer Internet</p>
        <a href="#download" className="btn btn-primary">Download Now (Free)</a>
      </div>
    </section>
  );
}

export default Hero;
