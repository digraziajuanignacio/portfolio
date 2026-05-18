"use client";
import { Fade } from "react-awesome-reveal";
import { FaUniversity } from "react-icons/fa";

export default function CurrentStatus() {
  return (
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
                  Me encuentro trabajando en el mantenimiento de la infraestructura de la facultad y colaborando en proyectos de innovación para la mejora institucional. Mis tareas del día a día incluyen el <strong>cableado de redes</strong>, manejo de <strong>racks y switches</strong>, soporte IT integral y la reparación de <strong>notebooks y PCs</strong>.
                </p>
              </div>
              <div className="col-12 col-md-auto text-center">
                <div className="status-badge">
                  <span className="status-dot"></span>
                  En actividad
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <style jsx>{`
        .status-card { background: var(--card-bg); border-radius: 24px; padding: 2rem; max-width: 900px; box-shadow: 0 10px 40px rgba(0,0,0,0.04); border: 1px solid var(--border-color); position: relative; overflow: hidden; }
        .status-card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: var(--primary-color); }
        .status-icon-box { width: 60px; height: 60px; background: rgba(32, 201, 151, 0.1); color: var(--primary-color); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto; }
        .status-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.05); padding: 6px 16px; border-radius: 50px; font-size: 0.75rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; }
        [data-theme='dark'] .status-badge { background: rgba(255,255,255,0.05); }
        .status-dot { width: 8px; height: 8px; background: var(--primary-color); border-radius: 50%; box-shadow: 0 0 8px var(--primary-color); animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
        @media (max-width: 768px) { .status-card { padding: 1.5rem; } }
      `}</style>
    </section>
  );
}
