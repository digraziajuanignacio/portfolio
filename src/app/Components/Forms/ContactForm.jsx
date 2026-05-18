"use client";
import { useState } from 'react';

export default function ContactForm({ onSuccess }) {
    const [formData, setFormData] = useState({ fullname: "", email: "", aboutMe: "", empresa: "" });
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = [];
        const { fullname, email, aboutMe } = formData;
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
        if (formData.empresa) { setSuccess(true); return; }

        const clientErrors = validateForm();
        if (clientErrors.length > 0) { setError(clientErrors); return; }

        setLoading(true);
        try {
            const res = await fetch(`/API/form`, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    fullname: formData.fullname.trim(),
                    email: formData.email.trim(),
                    aboutMe: formData.aboutMe.trim()
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setFormData({ fullname: "", email: "", aboutMe: "", empresa: "" });
                onSuccess?.();
            } else {
                setError(Array.isArray(data.msg) ? data.msg : [data.msg]);
            }
        } catch (err) { setError(["Error de conexión."]); } 
        finally { setLoading(false); }
    };

    return (
        <form onSubmit={handleSubmit} className="premium-form">
            <div style={{ display: 'none' }}>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </div>
            
            <div className="input-field">
                <label>Nombre completo</label>
                <input 
                    type="text" 
                    name="fullname" 
                    placeholder="Ej: Juan Pérez" 
                    onChange={handleChange} 
                    value={formData.fullname} 
                    autoComplete="off"
                />
            </div>

            <div className="input-field">
                <label>Email de contacto</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="nombre@correo.com" 
                    onChange={handleChange} 
                    value={formData.email} 
                    autoComplete="off"
                />
            </div>

            <div className="input-field">
                <label>Tu mensaje</label>
                <textarea 
                    name="aboutMe" 
                    placeholder="Contame brevemente en qué puedo ayudarte..." 
                    rows="4" 
                    onChange={handleChange} 
                    value={formData.aboutMe}
                ></textarea>
                <div className="char-count-wrapper">
                    <span className={`char-count ${formData.aboutMe.length > 450 ? 'warning' : ''}`}>
                        {formData.aboutMe.length}/500
                    </span>
                </div>
            </div>
            
            {error.length > 0 && (
                <div className="alert-premium error">
                    <ul>{error.map((e,i)=><li key={i}>{e}</li>)}</ul>
                </div>
            )}
            
            {success && (
                <div className="alert-premium success">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
            )}
            
            <button type="submit" className={`btn-premium-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                {loading ? (
                    <span className="spinner"></span>
                ) : "Enviar mensaje"}
            </button>

            <style jsx>{`
                .premium-form { display: flex; flex-direction: column; gap: 1.2rem; }
                
                .input-field { display: flex; flex-direction: column; gap: 0.5rem; }
                
                .input-field label { 
                    font-size: 0.85rem; 
                    font-weight: 700; 
                    color: var(--text-dark); 
                    margin-left: 4px;
                }
                
                .input-field input, .input-field textarea { 
                    padding: 0.9rem 1.2rem; 
                    border: 2px solid var(--border-color); 
                    border-radius: 16px; 
                    width: 100%; 
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                    background: var(--bg-light);
                    color: var(--text-dark);
                }
                
                .input-field input:focus, .input-field textarea:focus { 
                    outline: none;
                    border-color: var(--primary-color);
                    background: var(--card-bg);
                    box-shadow: 0 0 0 4px rgba(32, 201, 151, 0.1);
                }

                .char-count-wrapper { display: flex; justify-content: flex-end; margin-top: 4px; }
                .char-count { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; }
                .char-count.warning { color: #dc3545; }

                .btn-premium-submit { 
                    width: 100%; 
                    padding: 1rem; 
                    background: var(--text-dark); 
                    color: var(--card-bg); 
                    border: none; 
                    border-radius: 16px; 
                    font-weight: 700; 
                    font-size: 1rem;
                    margin-top: 0.5rem; 
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .btn-premium-submit:hover:not(:disabled) { 
                    opacity: 0.9;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }

                .btn-premium-submit:disabled { opacity: 0.7; cursor: not-allowed; }

                .alert-premium { padding: 1rem; border-radius: 16px; font-size: 0.9rem; font-weight: 600; }
                .alert-premium.error { background-color: #fff5f5; color: #c53030; border: 1px solid #feb2b2; }
                .alert-premium.success { background-color: #f0fff4; color: #276749; border: 1px solid #9ae6b4; text-align: center; }
                .alert-premium ul { margin: 0; padding-left: 1.2rem; }

                .spinner {
                    width: 20px; height: 20px;
                    border: 3px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    border-top-color: #fff;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </form>
    );
}
