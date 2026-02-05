"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import TypeIt from "typeit-react";
import { useState } from "react";
import { FaDownload, FaPaperPlane } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im"; 

export default function Home() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [empresa, setEmpresa] = useState(""); 
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (isModalVisible) { setError([]); setSuccess(false); }
  };

  const validateForm = () => {
    const errors = [];
    if (fullname.trim().length < 3) errors.push("Nombre muy corto.");
    if (!/^[a-zA-Z\s]+$/.test(fullname.trim())) errors.push("El nombre solo puede tener letras.");
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.trim())) errors.push("Email inválido.");
    if (aboutMe.trim().length < 10) errors.push("Mensaje muy corto.");
    if (aboutMe.trim().length > 500) errors.push("El mensaje excede los 500 caracteres.");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]); setSuccess(false);
    if (empresa) { setSuccess(true); return; } 

    const clientErrors = validateForm();
    if (clientErrors.length > 0) { setError(clientErrors); return; }

    setLoading(true);
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const res = await fetch(`${apiUrl}/API/form`, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ fullname, email, aboutMe }),
        });
        const data = await res.json();
        if (data.success) {
            setSuccess(true); setFullname(""); setEmail(""); setAboutMe(""); setEmpresa("");
        } else {
            setError(Array.isArray(data.msg) ? data.msg : [data.msg]);
        }
    } catch (err) { setError(["Error de conexión."]); } 
    finally { setLoading(false); }
  };

  return (
    <div className="home-container d-flex justify-content-center align-items-center min-vh-100 py-5">
      
      <Fade triggerOnce>
        <div className="hero-card p-4 p-md-5 text-center position-relative">
            
            <div className="bg-decoration"></div>

            <div className="profile-wrapper mx-auto mb-4">
                <div className="profile-circle">
                    <Image
                        src="/profilepicture.png"
                        alt="Juan Ignacio Di Grazia"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="profile-img"
                    />
                </div>
                <div className="ring-animation"></div>
            </div>

            {/* Textos Principales */}
            <h1 className="fw-bold display-6 mb-2 text-dark">Juan Ignacio Di Grazia</h1>
            
            <div className="typeit-wrapper mb-4 d-flex flex-column justify-content-center align-items-center">
                <div className="badge bg-light text-primary px-3 py-2 mb-2 rounded-pill border border-primary-subtle shadow-sm">
                   <TypeIt options={{ cursor: false, afterComplete: () => setShowSecond(true) }}>
                        Frontend & Backend Developer
                   </TypeIt>
                </div>

                {showSecond && (
                    <div className="badge bg-light text-success px-3 py-2 mb-2 rounded-pill border border-success-subtle shadow-sm">
                         <TypeIt options={{ cursor: false, afterComplete: () => setShowThird(true) }}>
                            Software & Hardware Technician
                         </TypeIt>
                    </div>
                )}

                {showThird && (
                    <div className="badge bg-light text-info px-3 py-2 rounded-pill border border-info-subtle shadow-sm">
                        <TypeIt options={{ cursor: false }}>
                            AI Specialist & Consultant
                        </TypeIt>
                    </div>
                )}
            </div>

            <p className="text-muted lead fs-6 mb-4 px-lg-5">
                Ingeniería en Sistemas (UTN) • Creando soluciones tecnológicas integrales.
            </p>

            {/* Botones de Acción */}
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                <a 
                    href="/DiGraziaCV.pdf" 
                    download="/DiGraziaCV.pdf" 
                    className="btn btn-primary btn-lg px-4 shadow-sm d-flex align-items-center gap-2 btn-custom"
                >
                    <FaDownload size={16}/> Descargar CV
                </a>
                
                <button 
                    onClick={toggleModal}
                    className="btn btn-outline-success btn-lg px-4 shadow-sm d-flex align-items-center gap-2 btn-custom"
                >
                    <FaPaperPlane size={16}/> Contact Me
                </button>
            </div>
        </div>
      </Fade>

      {/* --- MODAL DE CONTACTO  --- */}
      {isModalVisible && (
        <div className="custom-modal-overlay" onClick={toggleModal}>
            <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h5 className="modal-title">Contacto</h5>
                    <button type="button" className="btn-close-custom" onClick={toggleModal}>✕</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'none' }}><input type="text" name="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} /></div>
                        <div className="input-group">
                            <label>Nombre</label>
                            <input type="text" placeholder="Ingresa tu nombre" onChange={(e) => setFullname(e.target.value)} value={fullname} />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="correo@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="input-group">
                            <label>Mensaje</label>
                            <textarea placeholder="Hola Juan..." rows="3" onChange={(e) => setAboutMe(e.target.value)} value={aboutMe}></textarea>
                            <span className="char-count">{aboutMe.length}/500</span>
                        </div>
                        {error.length > 0 && <div className="alert-box error"><ul>{error.map((e,i)=><li key={i}>{e}</li>)}</ul></div>}
                        {success && <div className="alert-box success">¡Enviado!</div>}
                        <button type="submit" className="btn-submit" disabled={loading}>{loading ? "..." : "Enviar"}</button>
                    </form>
                </div>
            </div>
        </div>
      )}

      {/* ESTILOS CSS */}
      <style jsx>{`
        .home-container {
            background-color: #f8f9fa; /* Fondo gris muy suave para toda la página */
        }
        
        .hero-card {
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.08);
            width: 100%;
            max-width: 700px;
            z-index: 10;
        }

        .bg-decoration {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            border-radius: 24px;
            background: radial-gradient(circle at top right, rgba(13, 110, 253, 0.05), transparent 40%),
                        radial-gradient(circle at bottom left, rgba(25, 135, 84, 0.05), transparent 40%);
            z-index: -1;
        }

        /* Foto de Perfil */
        .profile-wrapper {
            position: relative;
            width: 180px; height: 180px;
        }
        .profile-circle {
            width: 100%; height: 100%;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid white;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            position: relative;
            z-index: 2;
        }
        .ring-animation {
            position: absolute;
            top: -10px; left: -10px; right: -10px; bottom: -10px;
            border-radius: 50%;
            border: 2px dashed #0d6efd; /* Color primario */
            opacity: 0.3;
            animation: spin 20s linear infinite;
            z-index: 1;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* TypeIt Tags */
        .typeit-wrapper {
            min-height: 120px; /* Evita saltos de altura */
        }

        /* Botones */
        .btn-custom {
            border-radius: 12px;
            font-weight: 600;
            transition: transform 0.2s;
        }
        .btn-custom:hover {
            transform: translateY(-3px);
        }

        /* --- Estilos Modal (Reutilizados del Navbar) --- */
        .custom-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 1rem; backdrop-filter: blur(3px); }
        .custom-modal-content { background: white; width: 100%; max-width: 500px; border-radius: 16px; padding: 0; overflow: hidden; animation: popUp 0.3s ease-out; }
        @keyframes popUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .modal-header { padding: 1rem; border-bottom: 1px solid #eee; display: flex; justify-content: center; position: relative; }
        .modal-title { font-weight: bold; margin: 0; }
        .btn-close-custom { position: absolute; right: 1rem; border: none; background: none; font-size: 1.2rem; color: #999; cursor: pointer; }
        .modal-body { padding: 1.5rem; }
        .char-count { text-align: right; font-size: 0.75rem; color: #aaa; }
        .input-group { margin-bottom: 1rem; text-align: left; }
        .input-group label { display: block; font-size: 0.85rem; font-weight: bold; color: #555; margin-bottom: 0.3rem; }
        .input-group input, .input-group textarea { width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 8px; }
        .btn-submit { width: 100%; padding: 0.7rem; background: #198754; color: white; border: none; border-radius: 8px; font-weight: bold; margin-top: 0.5rem; }
        .alert-box { padding: 0.5rem; border-radius: 6px; margin-bottom: 0.5rem; font-size: 0.9rem; }
        .alert-box.error { background: #f8d7da; color: #842029; }
        .alert-box.success { background: #d1e7dd; color: #0f5132; text-align: center; }
        
      `}</style>
    </div>
  );
}