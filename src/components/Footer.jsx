import React from 'react';
import { Globe, MessageSquare, MessagesSquare, Share2 } from 'lucide-react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Digital Polymath <span className="logo-accent">Academy</span></h2>
            <p className="footer-desc">
              Revolutionizing IT education through high-end editorial experiences and rigorous technical depth.
            </p>
            <div className="social-links">
              <a href="#" className="btn-icon"><Globe size={18} /></a>
              <a href="#" className="btn-icon"><MessageSquare size={18} /></a>
              <a href="#" className="btn-icon"><MessagesSquare size={18} /></a>
              <a href="#" className="btn-icon"><Share2 size={18} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Skill Assessments</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Digital Polymath Academy. High-End Editorial IT Education.</p>
          <div className="status-indicator">
            <span className="dot"></span> All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
