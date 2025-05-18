import React from 'react';

function Features() {
  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <h2 id="features-title">Main Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Real-Time Protection</h3>
          <p>Filters harmful content (like adult or violent sites) instantly as you browse, preventing it from ever reaching your screen.</p>
        </div>
        <div className="feature-item">
          <h3>Cross-Platform Support</h3>
          <p>Works seamlessly on Windows, macOS, and Linux, so all your devices stay protected with the same level of security.</p>
        </div>
        <div className="feature-item">
          <h3>Easy to Use</h3>
          <p>Simple setup and an intuitive dashboard make it easy for anyone to configure and use, from parents to IT admins.</p>
        </div>
        <div className="feature-item">
          <h3>Secure & Private</h3>
          <p>All filtering happens on your device. Magen Or never sends your browsing data to the cloud, ensuring your privacy.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
