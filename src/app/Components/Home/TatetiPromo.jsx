"use client";
import { Fade } from "react-awesome-reveal";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";

export default function TatetiPromo() {
  return (
    <section className="tateti-promo-section py-5">
      <div className="container">
        <Fade triggerOnce>
          <div className="promo-card mx-auto">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-7 text-center text-lg-start">
                <h2 className="fw-bold mb-3">¿Te animas a un desafío?</h2>
                <p className="text-muted mb-4">
                  He desarrollado una <strong>IA estratégica</strong> para jugar al Ta-Te-Ti. Es una demostración divertida de lógica algorítmica y manejo de estados en tiempo real. ¿Crees que puedes ganarme?
                </p>
                <Link href="/ta-te-ti" className="btn-modern btn-accent-gradient d-inline-flex">
                  <FaRobot className="me-2" /> Jugar Ta-Te-Ti AI
                </Link>
              </div>
              <div className="col-12 col-lg-5 text-center">
                <div className="game-preview-box">
                  <div className="preview-grid">
                    <div className="preview-sq X">X</div>
                    <div className="preview-sq"></div>
                    <div className="preview-sq O">O</div>
                    <div className="preview-sq"></div>
                    <div className="preview-sq X">X</div>
                    <div className="preview-sq"></div>
                    <div className="preview-sq O">O</div>
                    <div className="preview-sq"></div>
                    <div className="preview-sq"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <style jsx>{`
        .promo-card { background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 30px; padding: 3rem; max-width: 1000px; box-shadow: 0 20px 60px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.03); position: relative; overflow: hidden; }
        .promo-card::after { content: ""; position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(25, 135, 84, 0.05) 0%, transparent 70%); border-radius: 50%; }
        
        :global(.btn-modern) { padding: 12px 30px; border-radius: 12px; font-weight: 700; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease; text-decoration: none; border: none; cursor: pointer; }
        :global(.btn-accent-gradient) { background: linear-gradient(135deg, #212529, #343a40); color: white; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        :global(.btn-accent-gradient:hover) { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,0,0,0.2); color: white; opacity: 0.9; }

        .game-preview-box { background: rgba(0,0,0,0.02); padding: 20px; border-radius: 20px; display: inline-block; border: 1px dashed #ddd; }
        .preview-grid { display: grid; grid-template-columns: repeat(3, 40px); gap: 8px; }
        .preview-sq { width: 40px; height: 40px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.2rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .preview-sq.X { color: #0d6efd; }
        .preview-sq.O { color: #198754; }
      `}</style>
    </section>
  );
}
