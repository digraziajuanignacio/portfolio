"use client";
import Image from "next/image";
import { useState } from "react";
import { FaLaptopMedical, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoHardwareChipSharp } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="project-card h-100 d-flex flex-column">
      {/* WRAPPER PRINCIPAL DE IMAGEN */}
      <div className="card-img-wrapper">
        <div className={`category-badge ${project.category}`}>
          {project.category === 'dev' ? <FaCode /> : <FaLaptopMedical />}
        </div>

        {/* EL "TREN" (TRACK) DE IMÁGENES */}
        <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
            {/* AQUI ESTA EL CAMBIO: imgData ahora es un objeto {url, focus} */}
            {project.images.map((imgData, index) => (
                <div key={index} className="carousel-image-item">
                     <Image
                       src={imgData.url} // Accedemos a la URL
                       alt={`${project.title} - imagen ${index + 1}`}
                       layout="fill"
                       objectFit="cover"
                       // Usamos el foco específico de ESTA imagen, o "center" si no tiene
                       objectPosition={imgData.focus || "center"} 
                       className="card-img"
                     />
                </div>
            ))}
        </div>

        {project.images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevImage}><FaChevronLeft /></button>
            <button className="carousel-btn next" onClick={nextImage}><FaChevronRight /></button>
            <div className="carousel-indicators-custom">
                {project.images.map((_, idx) => (
                    <span key={idx} className={`indicator-dot ${idx === currentImageIndex ? 'active' : ''}`}></span>
                ))}
            </div>
          </>
        )}
      </div>

      {/* CONTENIDO DE TEXTO */}
      <div className="card-body p-4 d-flex flex-column flex-grow-1">
        <h4 className="fw-bold text-dark mb-2 title-clamp">{project.title}</h4>
        
        <p className="text-muted small flex-grow-1 description-clamp">
            {project.description}
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3 mt-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="tech-pill">{tag}</span>
          ))}
        </div>

        <div className="mt-auto pt-3 border-top w-100">
          {project.category === 'dev' ? (
            <div className="d-flex gap-3">
              {project.links && project.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="minimal-link">
                  {link.icon}<span>{link.label}</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              {project.specs && project.specs.map((spec, i) => (
                <div key={i} className="spec-item text-success fw-bold small">
                  <IoHardwareChipSharp className="me-1" /> {spec}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .card-img-wrapper { position: relative; width: 100%; height: 250px; background-color: #f8f9fa; flex-shrink: 0; overflow: hidden; }
        .carousel-track { display: flex; height: 100%; transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .carousel-image-item { min-width: 100%; height: 100%; position: relative; flex-shrink: 0; }
        .project-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; height: 100%; }
        .project-card:hover { transform: translateY(-5px); }
        .title-clamp { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; min-height: 1.5em; }
        .description-clamp { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; }
        .carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0, 0, 0, 0.5); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 20; transition: background 0.2s; font-size: 0.8rem; }
        .carousel-btn:hover { background: rgba(0, 0, 0, 0.8); }
        .carousel-btn.prev { left: 10px; }
        .carousel-btn.next { right: 10px; }
        .carousel-indicators-custom { position: absolute; bottom: 10px; left: 0; right: 0; display: flex; justify-content: center; gap: 5px; z-index: 20; }
        .indicator-dot { width: 6px; height: 6px; background: rgba(255,255,255,0.5); border-radius: 50%; transition: all 0.3s; }
        .indicator-dot.active { background: white; transform: scale(1.2); }
        .category-badge { position: absolute; top: 15px; right: 15px; width: 35px; height: 35px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white; z-index: 10; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .category-badge.dev { background: linear-gradient(45deg, #0d6efd, #0dcaf0); }
        .category-badge.tech { background: linear-gradient(45deg, #198754, #20c997); }
        .tech-pill { font-size: 0.75rem; font-weight: 600; padding: 4px 10px; border-radius: 6px; background-color: #f1f3f5; color: #495057; }
        .minimal-link { display: flex; align-items: center; gap: 8px; padding: 6px 14px; border: 1px solid #dee2e6; border-radius: 8px; text-decoration: none; color: #333; font-size: 0.8rem; font-weight: 600; background: #fff; transition: all 0.2s; }
        .minimal-link:hover { border-color: #0d6efd; background-color: #f8f9fa; color: #0d6efd; }
        .spec-item { background-color: rgba(25, 135, 84, 0.1); padding: 5px 10px; border-radius: 6px; }
      `}</style>
    </div>
  );
};

export default ProjectCard;