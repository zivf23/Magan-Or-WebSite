import React from 'react';

function FAQ() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>What content does Magen Or filter?</h3>
          <p>Magen Or blocks access to pornography, extreme violence, and other inappropriate content categories. You can customize which categories to filter in the settings.</p>
        </div>
        <div className="faq-item">
          <h3>Is Magen Or really free?</h3>
          <p>Yes, Magen Or is completely free to use. It's an open-source project maintained by volunteers dedicated to a safer internet.</p>
        </div>
        <div className="faq-item">
          <h3>Will Magen Or slow down my internet or device?</h3>
          <p>No, Magen Or is lightweight and runs efficiently in the background. You likely won't even notice it's there, except for the content it filters out!</p>
        </div>
        <div className="faq-item">
          <h3>Can I unblock a site that Magen Or filtered by mistake?</h3>
          <p>Absolutely. You can whitelist any site via the Magen Or dashboard, or temporarily disable filtering if needed. The power is in your hands.</p>
        </div>
        <div className="faq-item">
          <h3>What platforms are supported?</h3>
          <p>Magen Or currently supports Windows, macOS, and Linux. Mobile versions (iOS and Android) are in development, so stay tuned.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
