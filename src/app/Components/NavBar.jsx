"use client"
import { useState, useEffect } from 'react';
import { ImLinkedin } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';

function NavBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Este useEffect se asegura de que el código solo se ejecute en el cliente
        setIsClient(true);
    }, []);

    // Para evitar el problema de Hydration
    if (!isClient) return null; // No renderizar nada hasta que el componente se monte en el cliente

    const toggleOffcanvas = () => {
        setIsVisible((prev) => !prev);
    };

    // Lógica para manejar el clic en "Contact" del navbar
    const handleContactClick = (e) => {
        e.preventDefault(); // Evitar la navegación por defecto
        toggleOffcanvas();  // Abrir el offcanvas
    };

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
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand d-block d-lg-none ms-0" href="/">DTech</a>
                    <a className="navbar-brand d-none d-lg-block" href="#">DTech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div className="navbar-nav mx-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-5">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item mx-5">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                {/* Aquí modificamos el enlace "Contact" */}
                                <li className="nav-item mx-5">
                                    <a className="nav-link" href="#" onClick={handleContactClick}>
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item mx-5">
                                    <a className="nav-link disabled" href="/mis-proyectos" aria-disabled="true">My Works</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center d-none d-lg-flex">
                            <li className="nav-item ms-4 me-4">
                                <a className="nav-link" href="https://www.linkedin.com/in/digraziajuanignacio/"><ImLinkedin size={25}/></a>
                            </li>
                            <li className="nav-item ms-4 me-4">
                                <a className="nav-link" href="https://www.instagram.com/digrazia.tech/"><FiInstagram size={25}/></a>
                            </li>
                            <li className="nav-item ms-4 me-4">
                                <a className="nav-link" href="https://github.com/digraziajuanignacio"><IoLogoGithub size={25}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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
                    height: '90vh', // Ajustado para pantallas grandes
                    overflow: 'hidden', // Eliminar overflow en el contenedor
                }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-center" id="offcanvasCenteredLabel">
                        Area de contacto
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={toggleOffcanvas}
                    ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
                    {/* Formulario */}
                    <form style={{ width: '100%', maxHeight: '70vh', overflowY: 'auto' }} onSubmit={handleSubmit}>
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
                                rows="6"
                                onChange={(e) => setAboutMe(e.target.value)}
                                value={aboutMe}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-100" style={{ marginTop: '1rem' }}>
                            Enviar
                        </button>
                    </form>
                    <div className="bg-slate-100 flex flex-col">
                        {error &&
                            error.map((e, i) => (
                                <div key={i} className="alert alert-success" role="alert">
                                    {e}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
