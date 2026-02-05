"use client";
import { useState, useEffect } from 'react';
import { ImLinkedin } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';

function NavBar() {
    // --- ESTADOS ---
    const [isVisible, setIsVisible] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [empresa, setEmpresa] = useState(""); // Honeypot
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    // --- LÓGICA MODAL ---
    const toggleOffcanvas = () => {
        setIsVisible((prev) => !prev);
        if (isVisible) { setError([]); setSuccess(false); }
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        toggleOffcanvas();
    };

    // --- LÓGICA ENVÍO ---
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
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
                <div className="container-fluid px-4">
                    <Link className="navbar-brand d-block d-lg-none fw-bold text-success fs-3" href="/">DTech</Link>
                    <Link className="navbar-brand d-none d-lg-block fw-bold text-success fs-3" href="/">DTech</Link>
                    
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div className="navbar-nav mx-auto align-items-center">
                            <ul className="navbar-nav gap-4 align-items-center">
                                <li className="nav-item">
                                    <Link className="nav-link custom-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link custom-link" href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-link" href="#" onClick={handleContactClick}>
                                        Contact
                                    </a>
                                </li>
                                
                                <li className="nav-item tooltip-container">
                                    <Link className="nav-link custom-link disabled" href="/mis-proyectos" aria-disabled="true">
                                        My Works
                                    </Link>
                                    <span className="tooltip-text">En Desarrollo 🛠️</span>
                                </li>
                            </ul>
                        </div>
                        
                        <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-3 mt-3 mt-lg-0">
                            <li className="nav-item"><a className="nav-link social-icon" target="_blank" href="https://www.linkedin.com/in/digraziajuanignacio/"><ImLinkedin size={22}/></a></li>
                            <li className="nav-item"><a className="nav-link social-icon" target="_blank" href="https://www.instagram.com/digrazia.tech/"><FiInstagram size={24}/></a></li>
                            <li className="nav-item"><a className="nav-link social-icon" target="_blank" href="https://github.com/digraziajuanignacio"><IoLogoGithub size={24}/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* MODAL */}
            {isVisible && (
                <div className="custom-modal-overlay" onClick={toggleOffcanvas}>
                    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h5 className="modal-title">Contacto</h5>
                            <button type="button" className="btn-close-custom" onClick={toggleOffcanvas}>✕</button>
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
                                    <textarea placeholder="Cuéntame brevemente..." rows="3" onChange={(e) => setAboutMe(e.target.value)} value={aboutMe}></textarea>
                                    <span className="char-count">{aboutMe.length}/500</span>
                                </div>
                                {error.length > 0 && <div className="alert-box error"><ul>{error.map((e,i)=><li key={i}>{e}</li>)}</ul></div>}
                                {success && <div className="alert-box success">¡Enviado correctamente!</div>}
                                <button type="submit" className="btn-submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                /* Estilos Generales */
                .custom-link { font-weight: 500; color: #555; position: relative; transition: color 0.3s; }
                .custom-link:hover { color: #198754; }
                .social-icon { color: #555; transition: transform 0.2s, color 0.2s; }
                .social-icon:hover { color: #198754; transform: translateY(-3px); }

                /* --- NUEVO: TOOLTIP ESTILO "EN DESARROLLO" --- */
                .tooltip-container {
                    position: relative; /* Necesario para posicionar el cartelito */
                }
                
                .tooltip-text {
                    visibility: hidden;
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    border-radius: 6px;
                    padding: 5px 10px;
                    font-size: 0.75rem;
                    
                    /* Posicionamiento */
                    position: absolute;
                    z-index: 1;
                    top: 100%; /* Justo debajo del texto */
                    left: 50%;
                    transform: translateX(-50%); /* Centrado perfecto */
                    margin-top: 10px;
                    
                    /* Efectos */
                    opacity: 0;
                    transition: opacity 0.3s, margin-top 0.3s;
                    white-space: nowrap; /* Que no se rompa el texto */
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }

                /* La flechita del tooltip (triángulo) */
                .tooltip-text::after {
                    content: "";
                    position: absolute;
                    bottom: 100%; /* Arriba del cartel */
                    left: 50%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: transparent transparent #333 transparent; /* Triángulo apuntando arriba */
                }

                /* Acción Hover */
                .tooltip-container:hover .tooltip-text {
                    visibility: visible;
                    opacity: 1;
                    margin-top: 5px; 
                }

                /* --- Estilos Modal --- */
                .custom-modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 1rem; backdrop-filter: blur(2px); }
                .custom-modal-content { background: white; width: 100%; max-width: 550px; border-radius: 12px; box-shadow: 0 15px 50px rgba(0,0,0,0.3); display: flex; flex-direction: column; height: auto; max-height: 95vh; overflow-y: auto; animation: fadeIn 0.3s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
                .modal-header { padding: 1rem 1.5rem; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: center; position: relative; }
                .modal-title { margin: 0; font-weight: 700; color: #333; }
                .btn-close-custom { position: absolute; right: 1.5rem; background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #999; }
                .modal-body { padding: 1.5rem; }
                .input-group { margin-bottom: 1rem; display: flex; flex-direction: column; }
                .input-group label { font-size: 0.85rem; font-weight: 600; color: #666; margin-bottom: 0.3rem; }
                .input-group input, .input-group textarea { padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; width: 100%; }
                .char-count { text-align: left; font-size: 0.75rem; color: #aaa; }
                .btn-submit { width: 100%; padding: 0.8rem; background-color: #198754; color: white; border: none; border-radius: 8px; font-weight: bold; margin-top: 0.5rem; }
                .alert-box { padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.9rem; }
                .alert-box.error { background-color: #f8d7da; color: #842029; }
                .alert-box.success { background-color: #d1e7dd; color: #0f5132; text-align: center; }
                .alert-box ul { margin: 0; padding-left: 1.2rem; }
            `}</style>
        </>
    );
}

export default NavBar;