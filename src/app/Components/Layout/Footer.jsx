"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-gradient-line"></div>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="brand-text mb-1">Di Grazia Tech</h5>
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com/digraziajuanignacio" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/digraziajuanignacio/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="https://www.instagram.com/digrazia.tech/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="mailto:digraziatech@gmail.com" className="social-icon"><IoMailOutline /></a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section { 
          background-color: var(--card-bg); 
          position: relative; 
          width: 100%; 
          padding-top: 3rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        
        /* Efecto de transición suave */
        .footer-section::before {
          content: "";
          position: absolute;
          top: -2rem;
          left: 0;
          width: 100%;
          height: 2rem;
          background: linear-gradient(to bottom, transparent, var(--card-bg));
          pointer-events: none;
        }

        .footer-gradient-line { 
          width: 100%; 
          height: 1px; 
          background: linear-gradient(90deg, transparent, rgba(13, 110, 253, 0.2), rgba(13, 110, 253, 0.2), transparent); 
          position: absolute; 
          top: 0; 
          left: 0; 
        }

        .brand-text { font-weight: 800; color: var(--text-dark); }
        .social-links { display: inline-flex; gap: 1.5rem; }
        .social-icon { font-size: 1.5rem; color: var(--text-muted); transition: all 0.3s ease; display: flex; align-items: center; }
        .social-icon:hover { transform: translateY(-3px); }
        .social-icon:hover :global(svg) { filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); }
        .social-icon:nth-child(1):hover { color: var(--text-dark); }
        .social-icon:nth-child(2):hover { color: #0077b5; }
        .social-icon:nth-child(3):hover { color: #e1306c; }
        .social-icon:nth-child(4):hover { color: #ea4335; }
      `}</style>
    </footer>
  );
};

export default Footer;
