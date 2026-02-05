"use client";
import { useState, useEffect } from 'react';

export default function OffcanvasCentered() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [empresa, setEmpresa] = useState(""); 
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleOffcanvas = () => {
        setIsVisible((prev) => !prev);
        if (!isVisible) {
            setError([]);
            setSuccess(false);
        }
    };

    if (!isClient) return null;

    const validateForm = () => {
        const errors = [];
        const trimName = fullname.trim();
        const trimEmail = email.trim();
        const trimMessage = aboutMe.trim();

        if (trimName.length < 3) errors.push("Nombre muy corto.");
        if (!/^[a-zA-Z\s]+$/.test(trimName)) errors.push("El nombre solo puede tener letras.");
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(trimEmail)) errors.push("Email inválido.");
        if (trimMessage.length < 10) errors.push("Mensaje muy corto (mínimo 10 caracteres).");
        if (trimMessage.length > 500) errors.push("El mensaje excede los 500 caracteres");

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
        setSuccess(false);

        if (empresa) {
            setSuccess(true);
            return;
        }

        const clientErrors = validateForm();
        if (clientErrors.length > 0) {
            setError(clientErrors);
            return;
        }

        setLoading(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
            const res = await fetch(`${apiUrl}/API/form`, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    fullname: fullname.trim(),
                    email: email.trim(),
                    aboutMe: aboutMe.trim(),
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setFullname(""); setEmail(""); setAboutMe(""); setEmpresa("");
            } else {
                setError(Array.isArray(data.msg) ? data.msg : [data.msg]);
            }
        } catch (err) {
            setError(["Error de conexión con el servidor."]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Botón activador */}
            <button className="btn btn-success" type="button" onClick={toggleOffcanvas}>
                Contact Me
            </button>

            {/* LÓGICA DE MODAL  */}
            {isVisible && (
                <div className="custom-modal-overlay" onClick={toggleOffcanvas}>
                    <div 
                        className="custom-modal-content" 
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* Header */}
                        <div className="modal-header">
                            <h5 className="modal-title">Área de contacto</h5>
                            <button 
                                type="button" 
                                className="btn-close-custom" 
                                onClick={toggleOffcanvas}
                                aria-label="Cerrar"
                            >✕</button>
                        </div>
                        
                        {/* Cuerpo del formulario */}
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                {/* Honeypot */}
                                <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}>
                                    <input type="text" name="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" id="name" placeholder="Ingresa tu nombre" onChange={(e) => setFullname(e.target.value)} value={fullname} maxLength="50" />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input type="email" id="email" placeholder="correo@example.com" onChange={(e) => setEmail(e.target.value)} value={email} maxLength="100" />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="origin">¿De dónde provienes / Mensaje?</label>
                                    <textarea 
                                        id="origin" 
                                        placeholder="Cuéntame brevemente..." 
                                        rows="3" 
                                        onChange={(e) => setAboutMe(e.target.value)} 
                                        value={aboutMe} 
                                        maxLength="500"
                                    ></textarea>
                                    <span className="char-count">{aboutMe.length}/500</span>
                                </div>

                                {/* Zona de Alertas */}
                                {error.length > 0 && (
                                    <div className="alert-box error">
                                        <ul>
                                            {error.map((e, i) => <li key={i}>{e}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {success && (
                                    <div className="alert-box success">
                                        ¡Mensaje enviado correctamente!
                                    </div>
                                )}

                                <button type="submit" className="btn-submit" disabled={loading}>
                                    {loading ? "Enviando..." : "Enviar"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* ESTILOS CSS */}
            <style jsx>{`
                
                .custom-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1050;
                    display: flex;
                    justify-content: center;
                    align-items: center; /* Esto centra vertical y horizontalmente */
                    padding: 1rem; /* Margen de seguridad para móviles */
                }

                /* La tarjeta blanca */
                .custom-modal-content {
                    background: white;
                    width: 100%;
                    max-width: 600px; /* Ancho máximo en PC */
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    /* La magia: height auto permite crecer si hay errores */
                    height: auto; 
                    max-height: 95vh; /* Solo para evitar desbordes extremos */
                    overflow-y: auto; /* Scroll interno solo si es estrictamente necesario en móviles apaisados */
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .modal-header {
                    padding: 1rem 1.5rem;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .modal-title {
                    margin: 0;
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: #333;
                }

                .btn-close-custom {
                    position: absolute;
                    right: 1.5rem;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #999;
                    line-height: 1;
                }

                .modal-body {
                    padding: 1.5rem;
                }

                .input-group {
                    margin-bottom: 1rem;
                    display: flex;
                    flex-direction: column;
                }

                .input-group label {
                    font-size: 0.85rem;
                    font-weight: bold;
                    color: #666;
                    margin-bottom: 0.3rem;
                }

                .input-group input, .input-group textarea {
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 1rem;
                    font-family: inherit;
                    width: 100%;
                }
                
                .input-group textarea {
                    resize: none;
                }

                .char-count {
                    text-align: right;
                    font-size: 0.75rem;
                    color: #aaa;
                    margin-top: 0.2rem;
                }

                .btn-submit {
                    width: 100%;
                    padding: 0.8rem;
                    background-color: #198754; /* Color success de bootstrap */
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.2s;
                    margin-top: 0.5rem;
                }

                .btn-submit:hover {
                    background-color: #157347;
                }

                .btn-submit:disabled {
                    background-color: #a3cfbb;
                    cursor: not-allowed;
                }

                /* Cajas de mensajes */
                .alert-box {
                    padding: 0.75rem 1rem;
                    border-radius: 6px;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                }

                .alert-box.error {
                    background-color: #f8d7da;
                    color: #842029;
                    border: 1px solid #f5c2c7;
                }

                .alert-box.success {
                    background-color: #d1e7dd;
                    color: #0f5132;
                    border: 1px solid #badbcc;
                    text-align: center;
                }

                .alert-box ul {
                    margin: 0;
                    padding-left: 1.2rem;
                }
            `}</style>
        </>
    );
}