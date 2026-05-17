"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import TypeIt from "typeit-react";
import { useState } from "react";
import { FaDownload, FaPaperPlane, FaUniversity, FaUserCheck, FaMicrochip } from "react-icons/fa";
import ContactForm from "./Components/ContactForm";
import Modal from "./Components/Modal";

export default function Home() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const featuredProjects = [
    {
      title: "Portfolio Premium",
      category: "Desarrollo Full-Stack",
      description: "Desarrollé esta plataforma utilizando Next.js 15 y React 19 para garantizar un rendimiento óptimo. Implementé una arquitectura de componentes reutilizables, optimización de imágenes avanzada y un sistema de contacto seguro con validación anti-spam y notificaciones automáticas vía email.",
      image: "/trabajos/portafolios_d1.webp",
      tech: ["Next.js", "MongoDB", "Nodemailer", "Sharp"]
    },
    {
      title: "Soporte Técnico Avanzado",
      category: "Hardware & Optimización",
      description: "Especialista en mantenimiento crítico de estaciones de trabajo. Realizo limpiezas profundas, aplicaciones de pasta térmica de alto rendimiento y diagnósticos de hardware. Mi enfoque se centra en extender la vida útil del equipo y maximizar su eficiencia térmica y operativa.",
      image: "/trabajos/pastatermica_t1.webp",
      tech: ["Troubleshooting", "Thermal Mgmt", "Hardware Upgrade"]
    }
  ];

  return (
    <div className="home-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="hero-section d-flex align-items-center justify-content-center">
        <div className="container">
          <Fade triggerOnce>
            <div className="hero-content text-center">
                <div className="profile-wrapper mx-auto mb-4">
                    <div className="profile-circle">
                        <Image
                            src="/profilepicture.webp"
                            alt="Juan Ignacio Di Grazia"
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="profile-img"
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
                    <a href="/DiGraziaCV.pdf" download className="btn-modern btn-primary-gradient">
                        <FaDownload /> Descargar CV
                    </a>
                    <button onClick={toggleModal} className="btn-modern btn-outline-modern">
                        <FaPaperPlane /> Contact Me
                    </button>
                </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* --- CURRENT STATUS SECTION --- */}
      <section className="current-status-section py-5">
        <div className="container">
            <Fade triggerOnce>
                <div className="status-card mx-auto">
                    <div className="row align-items-center g-4">
                        <div className="col-12 col-md-auto text-center">
                            <div className="status-icon-box">
                                <FaUniversity />
                            </div>
                        </div>
                        <div className="col-12 col-md text-center text-md-start">
                            <h6 className="text-success fw-bold text-uppercase mb-1" style={{ letterSpacing: "1px", fontSize: "0.8rem" }}>Actualidad</h6>
                            <h3 className="fw-bold mb-2">Soporte Técnico @ UTN FRBA</h3>
                            <p className="text-muted mb-0">
                                Me desempeño actualmente brindando soporte técnico integral a usuarios en la <strong>Universidad Tecnológica Nacional</strong> (Facultad Regional Buenos Aires). Gestiono infraestructura de laboratorios, resuelvo incidencias críticas y aseguro la continuidad tecnológica para alumnos y docentes de la facultad.
                            </p>
                        </div>
                        <div className="col-12 col-md-auto text-center">
                            <div className="status-badge">
                                <span className="status-dot"></span>
                                Activo
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
      </section>

      {/* --- FEATURED PROJECTS SECTION --- */}
      <section className="featured-section py-5">
        <div className="container">
            <Fade triggerOnce>
                <div className="text-center mb-5">
                    <h2 className="fw-bold section-title">Proyectos Destacados</h2>
                    <div className="title-bar mx-auto"></div>
                    <p className="text-muted mt-3">Una breve mirada a mi metodología y resultados.</p>
                </div>
            </Fade>

            <div className="row g-5">
                {featuredProjects.map((project, idx) => (
                    <div className="col-12 col-lg-6" key={idx}>
                        <Fade delay={idx * 200} triggerOnce>
                            <div className="featured-card">
                                <div className="card-image-box">
                                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                                    <div className="card-category-tag">{project.category}</div>
                                </div>
                                <div className="card-content-box p-4">
                                    <h3 className="fw-bold mb-3">{project.title}</h3>
                                    <p className="text-muted small mb-4">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <a href="/mis-proyectos" className="view-more-link">
                    Ver todos los proyectos <span className="arrow">→</span>
                </a>
            </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <Modal isVisible={isModalVisible} onClose={toggleModal} title="Contacto">
        <ContactForm />
      </Modal>

      <style jsx>{`
        .home-wrapper { background-color: #fcfcfc; }
        
        /* Hero Section */
        .hero-section { min-height: 80vh; position: relative; padding: 80px 0; background: radial-gradient(circle at 10% 20%, rgba(25, 135, 84, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(13, 110, 253, 0.03) 0%, transparent 40%); }
        .hero-subtitle { max-width: 600px; }
        
        .profile-wrapper { position: relative; width: 200px; height: 200px; }
        .profile-circle { width: 100%; height: 100%; border-radius: 50%; overflow: hidden; border: 6px solid white; box-shadow: 0 20px 40px rgba(0,0,0,0.1); position: relative; z-index: 2; }
        .ring-animation { position: absolute; top: -12px; left: -12px; right: -12px; bottom: -12px; border-radius: 50%; border: 2px dashed #198754; opacity: 0.2; animation: spin 25s linear infinite; z-index: 1; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Badges */
        .badge-modern { padding: 8px 20px; border-radius: 50px; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px; border: 1px solid rgba(0,0,0,0.05); }
        .bg-green-soft { background: rgba(25, 135, 84, 0.08); }
        .bg-blue-soft { background: rgba(13, 110, 253, 0.08); }
        .bg-info-soft { background: rgba(13, 202, 240, 0.08); }

        /* Buttons */
        .btn-modern { padding: 12px 30px; border-radius: 12px; font-weight: 700; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease; text-decoration: none; border: none; cursor: pointer; }
        .btn-primary-gradient { background: linear-gradient(135deg, #198754, #157347); color: white; box-shadow: 0 10px 20px rgba(25, 135, 84, 0.2); }
        .btn-primary-gradient:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(25, 135, 84, 0.3); }
        .btn-outline-modern { background: white; color: #555; border: 1px solid #ddd; }
        .btn-outline-modern:hover { background: #f8f9fa; transform: translateY(-3px); border-color: #bbb; }

        /* Current Status Section */
        .status-card { background: white; border-radius: 24px; padding: 2rem; max-width: 900px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); position: relative; overflow: hidden; }
        .status-card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: #198754; }
        .status-icon-box { width: 60px; height: 60px; background: rgba(25, 135, 84, 0.1); color: #198754; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto; }
        .status-badge { display: inline-flex; align-items: center; gap: 8px; background: #f1f3f5; padding: 6px 16px; border-radius: 50px; font-size: 0.75rem; font-weight: 800; color: #495057; text-transform: uppercase; }
        .status-dot { width: 8px; height: 8px; background: #198754; border-radius: 50%; box-shadow: 0 0 8px #198754; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }

        /* Featured Section */
        .section-title { font-size: 2.5rem; color: #1a1a1a; }
        .title-bar { width: 60px; height: 4px; background: #198754; border-radius: 2px; margin-top: 15px; }
        
        .featured-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.03); transition: all 0.4s ease; height: 100%; }
        .featured-card:hover { transform: translateY(-10px); box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        
        .card-image-box { position: relative; width: 100%; height: 280px; overflow: hidden; }
        .card-category-tag { position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.9); padding: 5px 15px; border-radius: 50px; font-size: 0.75rem; font-weight: 800; color: #198754; box-shadow: 0 4px 10px rgba(0,0,0,0.1); z-index: 10; }
        
        .tech-tag { background: #f1f3f5; color: #495057; padding: 4px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; }
        
        .view-more-link { font-weight: 700; color: #198754; text-decoration: none; font-size: 1.1rem; transition: all 0.3s; }
        .view-more-link .arrow { transition: transform 0.3s; display: inline-block; }
        .view-more-link:hover .arrow { transform: translateX(8px); }

        @media (max-width: 768px) {
            .section-title { font-size: 2rem; }
            .card-image-box { height: 200px; }
            .status-card { padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
