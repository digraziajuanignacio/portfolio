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
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'none' }}>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>Nombre</label>
                <input type="text" name="fullname" placeholder="Ingresa tu nombre" onChange={handleChange} value={formData.fullname} />
            </div>
            <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="correo@example.com" onChange={handleChange} value={formData.email} />
            </div>
            <div className="input-group">
                <label>Mensaje</label>
                <textarea name="aboutMe" placeholder="Cuéntame brevemente..." rows="3" onChange={handleChange} value={formData.aboutMe}></textarea>
                <span className="char-count">{formData.aboutMe.length}/500</span>
            </div>
            
            {error.length > 0 && <div className="alert-box error"><ul>{error.map((e,i)=><li key={i}>{e}</li>)}</ul></div>}
            {success && <div className="alert-box success">¡Enviado correctamente!</div>}
            
            <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
            </button>

            <style jsx>{`
                .input-group { margin-bottom: 1rem; display: flex; flex-direction: column; }
                .input-group label { font-size: 0.85rem; font-weight: 600; color: #666; margin-bottom: 0.3rem; text-align: left; }
                .input-group input, .input-group textarea { padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; width: 100%; }
                .char-count { text-align: left; font-size: 0.75rem; color: #aaa; }
                .btn-submit { width: 100%; padding: 0.8rem; background-color: #198754; color: white; border: none; border-radius: 8px; font-weight: bold; margin-top: 0.5rem; }
                .alert-box { padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.9rem; }
                .alert-box.error { background-color: #f8d7da; color: #842029; }
                .alert-box.success { background-color: #d1e7dd; color: #0f5132; text-align: center; }
                .alert-box ul { margin: 0; padding-left: 1.2rem; text-align: left; }
            `}</style>
        </form>
    );
}
