import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Be an ARMY and get ready to go on a fun adventure
        </p>
        <p className="footer-subscription-text">
          You won't be bored, that's a promise
        </p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
