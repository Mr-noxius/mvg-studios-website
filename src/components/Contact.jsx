import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title text-gradient">Let's Create.</h2>
            <p className="contact-desc">
              Ready to take your festival, event, or business to the next level? 
              Drop us a message and let's discuss your next video production.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:hello@mvgstudios.com" className="detail-value">hello@mvgstudios.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Amsterdam, NL / Worldwide</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Social</span>
                <div className="social-links">
                  <a href="#">Instagram</a>
                  <a href="#">Vimeo</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="interest">Interest</label>
              <select id="interest" defaultValue="festival">
                <option value="festival">Festival / Event Aftermovie</option>
                <option value="corporate">Business Promotion / Company Movie</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
