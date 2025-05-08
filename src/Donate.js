import React from 'react';

function Donate() {
  return (
    <section id="donate" className="donate" aria-labelledby="donate-title">
      <h2 id="donate-title">Support & Donate</h2>
      <p>Magen Or is free and open-source. If you find it useful, please consider supporting its development:</p>
      <div className="donation-options">
        <a href="#" className="donation-link paybox" aria-label="Donate via PayBox">Donate via PayBox</a>
        <a href="#" className="donation-link bit" aria-label="Donate via Bit">Donate via Bit</a>
      </div>
      <p className="donation-note">Your contribution helps us improve Magen Or and keep it free for everyone.</p>
    </section>
  );
}

export default Donate;
