"use client";
import Image from "next/image";
import { BiMapAlt } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section className="about-section py-5">
      <Fade triggerOnce>
        <div className="container">
          <div className="about-card p-4 p-md-5">
            
            <div className="text-center mb-5 position-relative">
              <h1 className="fw-bold display-5 text-dark">Sobre Mí</h1>
              <div className="title-underline"></div>
            </div>

            <div className="row justify-content-center">
              
              <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                <h3 className="fw-bold mb-3 text-primary-gradient">Juan Ignacio</h3>
                <p className="text-muted lead fs-6 mb-4" style={{ lineHeight: "1.8" }}>
                  Extensa experiencia en soluciones informáticas. Me especializo en 
                  <strong> mantenimiento de hardware</strong>, <strong>optimización de software</strong> y 
                  en el <strong>desarrollo web</strong>. Busco ampliar mi experiencia laboral combinando 
                  la resolución práctica de problemas con la innovación.
                </p>
                
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="icon-box bg-light text-primary"><BiMapAlt /></span>
                    <span className="text-dark">Buenos Aires, CABA</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon-box bg-light text-danger"><IoMailUnreadOutline /></span>
                    <span className="text-dark">digraziatech@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon-box bg-light text-info"><TbWorldCode /></span>
                    <span className="text-dark">www.digraziajuanignacio.netlify.app</span>
                  </div>
                </div>
              </div>

              {/* --- COLUMNA 2: FOTO --- */}
              <div className="col-12 col-lg-4 mb-5 mb-lg-0 d-flex justify-content-center align-items-start">
                <div className="profile-wrapper">
                  <div className="profile-img-container">
                    <Image
                      src="/profilepicture.png"
                      alt="Juan Ignacio"
                      layout="fill"
                      objectFit="cover"
                      priority
                      className="profile-img"
                    />
                  </div>
                  <div className="decorative-circle"></div>
                </div>
              </div>

              {/* --- COLUMNA 3: SKILLS --- */}
              <div className="col-12 col-lg-4">
                <h3 className="fw-bold mb-3 text-primary-gradient">Skills Profesionales</h3>
                <p className="text-muted small mb-4">
                  Ingeniería en Sistemas (UTN) + Soporte Técnico + Full Stack Dev.
                </p>

                {/* DEVELOPMENT */}
                <div className="skill-group mb-4">
                  <h6 className="text-uppercase text-secondary fw-bold small mb-3">Development</h6>
                  
                  <div className="skill-item mb-3">
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>Javascript</span>
                      <span>75%</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: "8px" }}>
                      <div className="progress-bar gradient-blue" role="progressbar" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item mb-3">
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>React & Next.js</span>
                      <span>85%</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: "8px" }}>
                      <div className="progress-bar gradient-blue" role="progressbar" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>MongoDB</span>
                      <span>65%</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: "8px" }}>
                      <div className="progress-bar gradient-blue" role="progressbar" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>

                {/* IT SUPPORT */}
                <div className="skill-group">
                  <h6 className="text-uppercase text-secondary fw-bold small mb-3">IT Support & Hardware</h6>
                  
                  <div className="skill-item mb-3">
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>Reparación & Armado</span>
                      <span>95%</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: "8px" }}>
                      <div className="progress-bar gradient-green" role="progressbar" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item mb-3">
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>Optimización Software</span>
                      <span>90%</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: "8px" }}>
                      <div className="progress-bar gradient-green" role="progressbar" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="d-flex justify-content-between small fw-bold mb-1">
                      <span>Troubleshooting</span>
                      <span>85%</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: "8px" }}>
                      <div className="progress-bar gradient-green" role="progressbar" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ESTILOS CSS PERSONALIZADOS */}
      <style jsx>{`
        .about-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08); /* Sombra suave y moderna */
          border: 1px solid rgba(0,0,0,0.02);
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          margin: 10px auto 0;
          border-radius: 2px;
        }

        .text-primary-gradient {
          background: -webkit-linear-gradient(45deg, #0d6efd, #0a58ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Iconos de contacto */
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .icon-box {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        /* Foto de Perfil */
        .profile-wrapper {
          position: relative;
          width: 280px;
          height: 280px;
        }
        .profile-img-container {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 2;
          border: 5px solid white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .decorative-circle {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(45deg, #0d6efd, #0dcaf0);
          opacity: 0.2;
          z-index: 1;
          filter: blur(15px);
          transform: scale(0.95);
        }

        /* Barras de Progreso */
        .progress {
          background-color: #e9ecef;
          overflow: visible; /* Para efectos si quisieras agregar tooltips */
        }
        .gradient-blue {
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          border-radius: 50px;
          box-shadow: 0 2px 5px rgba(13, 110, 253, 0.3);
        }
        .gradient-green {
          background: linear-gradient(90deg, #198754, #20c997);
          border-radius: 50px;
          box-shadow: 0 2px 5px rgba(25, 135, 84, 0.3);
        }
        
        /* Efecto Hover sutil en skills */
        .skill-item:hover .progress-bar {
          filter: brightness(1.1);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}