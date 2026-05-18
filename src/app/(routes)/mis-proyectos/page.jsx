"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaCode, FaTools, FaLayerGroup } from "react-icons/fa";
import ProjectCard from "../../Components/UI/ProjectCard"; 

export default function MyWorks() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "dev",
      title: "Portfolio Personal",
      description: "Mi sitio web personal. Desarrollado con Next.js 16 y React 19, enfocado en el rendimiento y la experiencia de usuario. Implementé un diseño premium con optimización avanzada de imágenes y un backend sólido para el manejo de contactos.",
      images: [
        { url: "/images/trabajos/portafolios_d1.webp", focus: "center" }
      ],
      tags: ["Next.js 16", "React 19", "Bootstrap", "MongoDB"],
      links: [
        { label: "Código", url: "https://github.com/digraziajuanignacio/portfolio", icon: <FaCode /> },
      ]
    },
    {
      id: 2,
      category: "tech",
      title: "Limpieza Hardware",
      description: "Mantenimiento integral de estaciones de trabajo. Realicé limpiezas profundas de componentes críticos, cambios de pasta térmica de alta calidad y una verificación exhaustiva de temperaturas post-mantenimiento para asegurar la estabilidad del sistema.",
      images: [
        { url: "/images/trabajos/suciedad_t1.webp", focus: "center 70%" },
        { url: "/images/trabajos/limpio_t1.webp", focus: "center 90%" },
        { url: "/images/trabajos/pastatermica_t1.webp", focus: "center 65%" }
      ],
      tags: ["Hardware", "Mantenimiento", "Soporte IT"],
      specs: ["Vida Útil: Extendida", "Pasta: Nueva"]
    },
    {
      id: 3,
      category: "tech",
      title: "Recuperación de Accesos",
      description: "Resolución de problemas de acceso a nivel de sistema operativo. Implementé soluciones seguras para la recuperación de sesiones de usuario con contraseñas olvidadas en entornos Windows 10 Pro.",
      images: [
        { url: "/images/trabajos/contrasena_t2.webp", focus: "center 45%" }
      ],
      tags: ["Software", "Contraseñas", "Sysadmin"],
      links: [ { label: "Repo Privado", url: "#", icon: <FaCode /> } ],
      specs: ["Tiempo: 20min", "OS: Win 10 Pro"]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="works-wrapper">
      {/* --- HEADER SECTION (CENTERED) --- */}
      <section className="works-header-full">
        <div className="container py-4">
          <Fade triggerOnce>
            <div className="text-center">
              <h6 className="text-success fw-bold text-uppercase mb-2" style={{ letterSpacing: "2px" }}>Mi Portfolio</h6>
              <h1 className="fw-bold display-4 text-dark mb-3">Mis Proyectos</h1>
              <div className="title-underline mx-auto mb-4"></div>
              <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
                Una colección de mis trabajos más recientes en desarrollo de software y servicios técnicos de IT.
              </p>

              {/* Dynamic Filters */}
              <div className="filter-wrapper mt-5">
                <div className="filter-pills p-1">
                  <button 
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
                    onClick={() => setFilter('all')}
                  >
                    <FaLayerGroup className="me-2" /> Todo
                  </button>
                  <button 
                    className={`filter-btn ${filter === 'dev' ? 'active' : ''}`} 
                    onClick={() => setFilter('dev')}
                  >
                    <FaCode className="me-2" /> Desarrollo
                  </button>
                  <button 
                    className={`filter-btn ${filter === 'tech' ? 'active' : ''}`} 
                    onClick={() => setFilter('tech')}
                  >
                    <FaTools className="me-2" /> Hardware
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
              {filteredProjects.map((project, index) => (
                 <div key={project.id} className="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
                   <Fade delay={index * 100} triggerOnce cascade style={{ width: '100%' }}>
                     <ProjectCard project={project} />
                   </Fade>
                 </div>
              ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .works-wrapper { background-color: transparent; }
        
        .works-header-full { 
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 20px;
          background: radial-gradient(circle at top right, rgba(25, 135, 84, 0.03), transparent 30%), 
                      radial-gradient(circle at top left, rgba(13, 110, 253, 0.03), transparent 30%);
        }

        .title-underline { width: 80px; height: 5px; background: #198754; border-radius: 5px; }
        .filter-wrapper { display: inline-flex; justify-content: center; width: 100%; }
        .filter-pills { background: white; border-radius: 16px; display: flex; gap: 5px; box-shadow: 0 10px 30px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.05); padding: 6px !important; }
        .filter-btn { border: none; padding: 10px 25px; border-radius: 12px; font-weight: 700; font-size: 0.9rem; color: #666; background: transparent; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; cursor: pointer; }
        .filter-btn.active { background-color: #198754; color: white; box-shadow: 0 8px 20px rgba(25, 135, 84, 0.25); }
        .filter-btn:hover:not(.active) { background-color: rgba(25, 135, 84, 0.05); color: #198754; }

        @media (max-width: 991px) {
          .works-header-full { min-height: auto; padding-top: 120px; }
          .filter-pills { flex-direction: column; width: 100%; max-width: 250px; }
          .filter-btn { width: 100%; justify-content: center; }
          .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
