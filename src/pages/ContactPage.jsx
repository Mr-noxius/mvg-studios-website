import React from 'react';
import { ArrowRight } from 'lucide-react';
import contentData from '../content.json';
import './ContactPage.css';

const ContactPage = () => {
  const { contact } = contentData;

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-grid-cinematic">
          
          <div className="contact-brand">
            <h1 className="massive-title">
              LET'S <br/>
              <span className="text-outline">CRAFT</span><br/>
              THIS.
            </h1>
            <p className="contact-mission">
              {contact.mission}
            </p>
            <div className="contact-links">
              <a href={`mailto:${contact.email.toLowerCase()}`}>{contact.email}</a>
              <a href={contact.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
              <a href={contact.vimeo} target="_blank" rel="noreferrer">VIMEO</a>
            </div>
          </div>
          
          <div className="contact-form-minimal">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="minimal-input">
                <input type="text" placeholder="YOUR NAME" required />
              </div>
              <div className="minimal-input">
                <input type="email" placeholder="YOUR EMAIL" required />
              </div>
              <div className="minimal-input">
                <select required defaultValue="">
                  <option value="" disabled>PROJECT TYPE</option>
                  <option value="festival">FESTIVAL AFTERMOVIE</option>
                  <option value="corporate">BUSINESS PROMOTION</option>
                  <option value="other">OTHER MISSION</option>
                </select>
              </div>
              <div className="minimal-input">
                <textarea rows="4" placeholder="PROJECT DETAILS" required></textarea>
              </div>
              
              <button className="btn-cinematic" type="submit">
                INITIATE PROJECT <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
