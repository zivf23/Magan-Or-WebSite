import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Us</h2>
      <p>If you have any questions, feedback, or need support, feel free to reach out to us. Fill in the form below or send us an email.</p>
      <form className="contact-form" aria-label="Contact form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required aria-required="true" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required aria-required="true" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required aria-required="true"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <p className="contact-email">Or email us at <a href="mailto:support@magenor.org">support@magenor.org</a></p>
      {/* Newsletter sign-up call-to-action (also covered by pop-up in App.js) */}
      <div className="newsletter-cta">
        <h3>Stay in the Loop</h3>
        <p>Subscribe to our newsletter to get the latest updates on Magen Or.</p>
        <form className="newsletter-form" aria-label="Newsletter subscription form">
          <label htmlFor="subscribe-email" className="visually-hidden">Email:</label>
          <input type="email" id="subscribe-email" placeholder="Enter your email" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
