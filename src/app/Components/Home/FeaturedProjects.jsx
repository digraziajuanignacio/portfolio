"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "Portfolio Premium",
      category: "Desarrollo Full-Stack",
      description: "Desarrollé esta plataforma utilizando Next.js 15 y React 19 para garantizar un rendimiento óptimo. Implementé una arquitectura de componentes reutilizables, optimización de imágenes avanzada y un sistema de contacto seguro con validación anti-spam y notificaciones automáticas vía email.",
      image: "/images/trabajos/portafolios_d1.webp",
      tech: ["Next.js", "MongoDB", "Nodemailer", "Sharp"]
    },
    {
      title: "Soporte Técnico Avanzado",
      category: "Hardware & Optimización",
      description: "Especialista en mantenimiento crítico de estaciones de trabajo. Realizo limpiezas profundas, aplicaciones de pasta térmica de alto rendimiento y diagnósticos de hardware. Mi enfoque se centra en extender la vida útil del equipo y maximizar su eficiencia térmica y operativa.",
      image: "/images/trabajos/pastatermica_t1.webp",
      tech: ["Troubleshooting", "Thermal Mgmt", "Hardware Upgrade"]
    }
  ];

  return (
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
                    <Image src={project.image} alt={project.title} width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
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

      <style jsx>{`
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
        @media (max-width: 768px) { .section-title { font-size: 2rem; } .card-image-box { height: 200px; } }
      `}</style>
    </section>
  );
}
