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
              <a href="https://github.com/digraziajuanignacio" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="mailto:digraziatech@gmail.com" className="social-icon">
                <IoMailOutline />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: #ffffff; /* Fondo blanco limpio */
          position: relative;
          width: 100%;
          /* Eliminamos margin-top para borrar la franja blanca */
          margin-top: 0; 
          padding-top: 2rem; /* Usamos padding interno en su lugar */
        }

        /* Línea de gradiente sutil arriba para separar del contenido */
        .footer-gradient-line {
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
        }

        .brand-text {
          font-weight: 800;
          background: -webkit-linear-gradient(45deg, #333, #666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-links {
          display: inline-flex;
          gap: 1.5rem;
        }

        .social-icon {
          font-size: 1.5rem;
          color: #6c757d; /* Gris suave por defecto */
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .social-icon:hover {
          transform: translateY(-3px); /* Efecto de flotar */
        }

        /* Colores específicos al pasar el mouse */
        .social-icon:hover :global(svg) {
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
        }
        
        /* Ejemplo de color al hover (opcional, ajusta si quieres colores específicos) */
        .social-icon:nth-child(1):hover { color: #333; } /* Github */
        .social-icon:nth-child(2):hover { color: #0077b5; } /* Linkedin */
        .social-icon:nth-child(3):hover { color: #e1306c; } /* Instagram */
        .social-icon:nth-child(4):hover { color: #ea4335; } /* Mail */

      `}</style>
    </footer>
  );
};

export default Footer;