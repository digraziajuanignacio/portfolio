"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTools } from "react-icons/fa";
import ProjectCard from "../../Components/ProjectCard"; 

export default function MyWorks() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "dev",
      title: "Portfolio Personal",
      description: "Este sitio web. Desarrollado con Next.js 14, React y Bootstrap. Cuenta con validaciones anti-spam y diseño responsivo.",
      images: [
        { url: "/images/trabajos/portafolios_d1.webp", focus: "center" }
      ],
      tags: ["Next.js", "React", "Bootstrap", "MongoDB"],
      links: [
        { label: "Código", url: "https://github.com/digraziajuanignacio/portfolio", icon: <FaGithub /> },
        { label: "Demo", url: "#", icon: <FaExternalLinkAlt /> }
      ]
    },
    {
      id: 2,
      category: "tech",
      title: "Limpieza Hardware",
      description: "Mantenimiento integral: Limpieza profunda de ventiladores, cambio de pasta térmica. Verificación de temperaturas post-mantenimiento.",
      images: [
        { url: "/images/trabajos/suciedad_t1.webp", focus: "center 70%" },
        { url: "/images/trabajos/limpio_t1.webp", focus: "center 90%" },
        { url: "/images/trabajos/pastatermica_t1.webp", focus: "center 65%" }
      ],
      tags: ["Hardware", "Mantenimiento", "Upgrade"],
      specs: ["Vida Útil: Extendida", "Pasta: Nueva"]
    },
    {
      id: 3,
      category: "tech",
      title: "Cambio de Contraseña",
      description: "Recuperación de sesión de usuario con contraseña olvidada.",
      images: [
        { url: "/images/trabajos/contrasena_t2.webp", focus: "center 45%" }
      ],
      tags: ["Software", "Contraseñas", "Express"],
      links: [ { label: "Repo Privado", url: "#", icon: <FaGithub /> } ],
      specs: ["Tiempo: 20min", "OS: Win 10 Pro"]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="works-section py-5 min-vh-100 bg-light-gray">
      <div className="container">
        <Fade triggerOnce>
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5 text-dark">Mis Proyectos</h1>
            <div className="title-underline"></div>
            <p className="text-muted mt-3">Colección de desarrollos en software y trabajos técnicos.</p>

            <div className="filter-container d-inline-flex gap-2 p-1 rounded-pill bg-white shadow-sm mt-3 border">
              <button className={`btn btn-filter rounded-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todo</button>
              <button className={`btn btn-filter rounded-pill ${filter === 'dev' ? 'active' : ''}`} onClick={() => setFilter('dev')}><FaCode className="me-2"/> Desarrollo</button>
              <button className={`btn btn-filter rounded-pill ${filter === 'tech' ? 'active' : ''}`} onClick={() => setFilter('tech')}><FaTools className="me-2"/> Hardware</button>
            </div>
          </div>
        </Fade>

        <div className="row g-4">
            {filteredProjects.map((project, index) => (
               <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                 <Fade delay={index * 100} triggerOnce style={{ width: '100%', height: '100%' }}>
                   <ProjectCard project={project} />
                 </Fade>
               </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        .bg-light-gray { background-color: #f8f9fa; }
        .title-underline { width: 60px; height: 4px; background: linear-gradient(90deg, #0d6efd, #198754); margin: 0 auto; border-radius: 2px; }
        .btn-filter { border: none; padding: 0.5rem 1.5rem; font-weight: 600; color: #6c757d; transition: all 0.3s; }
        .btn-filter.active { background-color: #0d6efd; color: white; box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3); }
        .btn-filter:hover:not(.active) { background-color: #e9ecef; }
      `}</style>
    </section>
  );
}
