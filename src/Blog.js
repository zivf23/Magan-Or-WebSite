import React from 'react';

function Blog() {
  return (
    <section id="blog" className="blog" aria-labelledby="blog-title">
      <h2 id="blog-title">Latest News</h2>
      <ul className="blog-list">
        <li className="blog-post">
          <h3>Magen Or 2.0 Released – New Features & Improvements</h3>
          <p className="post-meta">January 15, 2025</p>
          <p>We are excited to announce the release of Magen Or 2.0, which comes with enhanced filtering capabilities and a revamped user interface. <a href="#">Read more...</a></p>
        </li>
        <li className="blog-post">
          <h3>How Magen Or Protects Your Privacy While Filtering</h3>
          <p className="post-meta">December 2, 2024</p>
          <p>A deep dive into the technology behind Magen Or that ensures your browsing data stays private and secure. <a href="#">Read more...</a></p>
        </li>
        <li className="blog-post">
          <h3>Community Spotlight: Magen Or in Schools</h3>
          <p className="post-meta">November 10, 2024</p>
          <p>Discover how local schools are implementing Magen Or to create a safer learning environment for students online. <a href="#">Read more...</a></p>
        </li>
      </ul>
    </section>
  );
}

export default Blog;
