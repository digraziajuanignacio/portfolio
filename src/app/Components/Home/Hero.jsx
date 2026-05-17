"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import TypeIt from "typeit-react";
import { useState } from "react";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

export default function Hero({ toggleModal }) {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="container">
        <Fade triggerOnce>
          <div className="hero-content text-center">
            <div className="profile-wrapper mx-auto mb-4">
              <div className="profile-circle">
                <Image
                  src="/images/profilepicture.webp"
                  alt="Juan Ignacio Di Grazia"
                  fill
                  priority
                  className="profile-img"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="ring-animation"></div>
            </div>

            <h1 className="fw-bold display-4 mb-2 text-dark">Juan Ignacio Di Grazia</h1>
            
            <div className="typeit-wrapper mb-4 d-flex flex-column align-items-center">
              <div className="badge-modern bg-green-soft text-success mb-2">
                <TypeIt options={{ cursor: false, afterComplete: () => setShowSecond(true) }}>
                  Full-Stack Developer
                </TypeIt>
              </div>

              {showSecond && (
                <div className="badge-modern bg-blue-soft text-primary mb-2">
                  <TypeIt options={{ cursor: false, afterComplete: () => setShowThird(true) }}>
                    Hardware & IT Specialist
                  </TypeIt>
                </div>
              )}

              {showThird && (
                <div className="badge-modern bg-info-soft text-info">
                  <TypeIt options={{ cursor: false }}>
                    AI & Solutions Consultant
                  </TypeIt>
                </div>
              )}
            </div>

            <p className="lead text-muted mb-5 mx-auto hero-subtitle">
              Ingeniería en Sistemas (UTN) • Transformando ideas complejas en soluciones digitales y físicas de alto impacto.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
              <a href="/docs/DiGraziaCV.pdf" download className="btn-modern btn-primary-gradient">
                <FaDownload /> Descargar CV
              </a>
              <button onClick={toggleModal} className="btn-modern btn-outline-modern">
                <FaPaperPlane /> Contact Me
              </button>
            </div>
          </div>
        </Fade>
      </div>

      <style jsx>{`
        .hero-section { min-height: 80vh; position: relative; padding: 80px 0; background: radial-gradient(circle at 10% 20%, rgba(25, 135, 84, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(13, 110, 253, 0.03) 0%, transparent 40%); }
        .hero-subtitle { max-width: 600px; }
        .profile-wrapper { position: relative; width: 200px; height: 200px; }
        .profile-circle { width: 100%; height: 100%; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: 0 10px 25px rgba(0,0,0,0.1); position: relative; z-index: 2; }
        .profile-img { width: 100% !important; height: 100% !important; object-fit: cover; }
        .ring-animation { position: absolute; top: -12px; left: -12px; right: -12px; bottom: -12px; border-radius: 50%; border: 2px dashed #198754; opacity: 0.2; animation: spin 25s linear infinite; z-index: 1; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .badge-modern { padding: 8px 20px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px; border: 1px solid rgba(0,0,0,0.05); }
        .bg-green-soft { background: rgba(25, 135, 84, 0.08); }
        .bg-blue-soft { background: rgba(13, 110, 253, 0.08); }
        .bg-info-soft { background: rgba(13, 202, 240, 0.08); }
        .btn-modern { padding: 12px 30px; border-radius: 12px; font-weight: 700; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease; text-decoration: none; border: none; cursor: pointer; }
        .btn-primary-gradient { background: linear-gradient(135deg, #198754, #157347); color: white; box-shadow: 0 10px 20px rgba(25, 135, 84, 0.2); }
        .btn-primary-gradient:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(25, 135, 84, 0.3); }
        .btn-outline-modern { background: white; color: #555; border: 1px solid #ddd; }
        .btn-outline-modern:hover { background: #f8f9fa; transform: translateY(-3px); border-color: #bbb; }
        .typeit-wrapper { min-height: 120px; }
      `}</style>
    </section>
  );
}
