import React from 'react';

function Download() {
  return (
    <section id="download" className="download" aria-labelledby="download-title">
      <h2 id="download-title">Download Magen Or</h2>
      <p>Available for all major platforms. Get Magen Or for your device:</p>
      <div className="download-buttons">
        <a href="#" className="btn download-btn" aria-label="Download for Windows">Download for Windows</a>
        <a href="#" className="btn download-btn" aria-label="Download for Mac">Download for macOS</a>
        <a href="#" className="btn download-btn" aria-label="Download for Linux">Download for Linux</a>
      </div>
      <p className="download-note">*Mobile versions for iOS and Android coming soon.</p>
    </section>
  );
}

export default Download;
