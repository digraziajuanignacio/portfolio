"use client";
import { useState, useEffect } from 'react';

export default function OffcanvasCentered() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false); // Para controlar el renderizado en cliente

    useEffect(() => {
        // Este useEffect se asegura de que el código solo se ejecute en el cliente
        setIsClient(true);
    }, []);

    const toggleOffcanvas = () => {
        setIsVisible((prev) => !prev);
    };

    // Verificar si es cliente para evitar problemas de hydration
    if (!isClient) return null; // No renderizar nada hasta que el componente se monte en el cliente

    const handleSubmit = async (e) => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Donde Proviene: ", aboutMe);

        const res = await fetch(`${apiUrl}/API/form`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                aboutMe,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname("");
            setEmail("");
            setAboutMe("");
        }
    };

    return (
        <div>
            {/* Botón para abrir el Offcanvas */}
            <button className="btn btn-success" type="button" onClick={toggleOffcanvas}>
                Contactame
            </button>

            {/* Fondo oscuro (backdrop) */}
            {isVisible && (
                <div
                    className="offcanvas-backdrop fade show"
                    onClick={toggleOffcanvas}
                    style={{ zIndex: 1045 }}
                ></div>
            )}

            {/* Offcanvas personalizado */}
            <div
                className={`offcanvas ${isVisible ? 'show' : ''}`}
                id="offcanvasCentered"
                aria-labelledby="offcanvasCenteredLabel"
                tabIndex={-1}
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: '700px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
                    zIndex: 1055,
                    borderRadius: '8px',
                    display: isVisible ? 'block' : 'none',
                    padding: '1rem',
                    height: '86vh', // Aseguramos que el offcanvas ocupe toda la altura de la pantalla
                    overflow: 'hidden', // Evitamos el scroll dentro del offcanvas
                }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-center" id="offcanvasCenteredLabel">
                        Área de contacto
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={toggleOffcanvas}
                    ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column" style={{ flex: '1', paddingBottom: '60px' }}>
                    {/* Formulario */}
                    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Ingresa tu nombre"
                                onChange={(e) => setFullname(e.target.value)}
                                value={fullname}
                                maxLength="100"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="correo@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                maxLength="254"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="origin" className="form-label">
                                ¿De dónde provienes?
                            </label>
                            <textarea
                                className="form-control"
                                id="origin"
                                placeholder="Escribe de dónde provienes"
                                rows="4"
                                onChange={(e) => setAboutMe(e.target.value)}
                                value={aboutMe}
                            ></textarea>
                        </div>

                        {/* Botón de Enviar */}
                        <button type="submit" className="btn btn-success w-100" style={{ marginTop: '1rem' }}>
                            Enviar
                        </button>
                    </form>

                    <div className="bg-slate-100 flex flex-col mt-3">
                        {error &&
                            error.map((e, i) => (
                                <div key={i} className="alert alert-success" role="alert">
                                    {e}
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Estilos para corregir márgenes en dispositivos móviles */}
            <style jsx>{`
                @media (max-width: 767px) {
                    .offcanvas {
                        height: 77vh !important; /* Aseguramos que el offcanvas ocupe toda la pantalla */
                        padding: 0.5rem;
                        max-width: 90%; /* Mejor ajuste para pantallas pequeñas */
                    }
                    .offcanvas-body {
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        padding-bottom: 60px;
                    }
                    .form-control {
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}
