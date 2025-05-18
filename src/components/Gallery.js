import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Screenshot Gallery</h2>
      <p>Take a look at Magen Or in action:</p>
      <div className="screenshot-grid">
        <img src="assets/images/screenshot1.png" alt="Screenshot of Magen Or filtering settings" loading="lazy" />
        <img src="assets/images/screenshot2.png" alt="Screenshot of blocked site notification" loading="lazy" />
        <img src="assets/images/screenshot3.png" alt="Screenshot of Magen Or dashboard overview" loading="lazy" />
      </div>
    </section>
  );
}

export default Gallery;
