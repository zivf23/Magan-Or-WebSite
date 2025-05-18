import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">What Users Are Saying</h2>
      <div className="testimonial-list">
        <blockquote className="testimonial-item">
          <p>"Magen Or gave me peace of mind knowing my kids are safe online. It's super easy to use and really effective."</p>
          <cite>– Jane D., Parent of Two</cite>
        </blockquote>
        <blockquote className="testimonial-item">
          <p>"As a school IT administrator, Magen Or has been a game-changer in keeping our lab PCs free of harmful content."</p>
          <cite>– John S., School Administrator</cite>
        </blockquote>
        <blockquote className="testimonial-item">
          <p>"I love that Magen Or is open-source. It's transparent, trustworthy, and works like a charm."</p>
          <cite>– Alex P., Security Enthusiast</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonials;
