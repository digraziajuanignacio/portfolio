"use client";
import { useState, useEffect } from 'react';
import { ImLinkedin } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';
import ContactForm from '../Forms/ContactForm';
import Modal from '../UI/Modal';

function NavBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const toggleModal = () => setIsVisible(prev => !prev);

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top custom-nav py-2">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center fw-bold" href="/">
                        <span className="brand-dot me-2"></span>
                        <span className="brand-text">DTech</span>
                    </Link>
                    
                    <button 
                        className="navbar-toggler border-0 shadow-none" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-modern" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-modern" href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link nav-link-modern border-0 bg-transparent w-100 text-lg-start" onClick={toggleModal}>
                                    Contact
                                </button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-modern" href="/mis-proyectos">My Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-modern" href="/ta-te-ti">Ta-Te-Ti</Link>
                            </li>
                        </ul>
                        
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <div className="social-divider d-none d-lg-block"></div>
                            <a className="social-icon-modern" target="_blank" href="https://www.linkedin.com/in/digraziajuanignacio/"><ImLinkedin size={18}/></a>
                            <a className="social-icon-modern" target="_blank" href="https://www.instagram.com/digrazia.tech/"><FiInstagram size={20}/></a>
                            <a className="social-icon-modern" target="_blank" href="https://github.com/digraziajuanignacio"><IoLogoGithub size={20}/></a>
                        </div>
                    </div>
                </div>
            </nav>

            <Modal isVisible={isVisible} onClose={toggleModal} title="Ponete en contacto">
                <ContactForm />
            </Modal>

            <style jsx>{`
                .custom-nav {
                    background: rgba(255, 255, 255, 0.85) !important;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                }

                .brand-text {
                    font-size: 1.5rem;
                    color: #1a1a1a;
                    letter-spacing: -0.5px;
                }

                .brand-dot {
                    width: 8px;
                    height: 8px;
                    background: #198754;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(25, 135, 84, 0.4);
                }

                :global(.nav-link-modern) {
                    font-size: 0.95rem !important;
                    font-weight: 600 !important;
                    color: #555 !important;
                    padding: 8px 16px !important;
                    border-radius: 8px;
                    transition: all 0.2s ease !important;
                }

                :global(.nav-link-modern:hover) {
                    color: #198754 !important;
                    background: rgba(25, 135, 84, 0.05);
                }

                .social-divider {
                    width: 1px;
                    height: 20px;
                    background: rgba(0, 0, 0, 0.1);
                    margin: 0 5px;
                }

                .social-icon-modern {
                    color: #666;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    text-decoration: none;
                }

                .social-icon-modern:hover {
                    color: #198754;
                    background: rgba(25, 135, 84, 0.08);
                    transform: translateY(-2px);
                }

                @media (max-width: 991px) {
                    .custom-nav { background: #ffffff !important; }
                    :global(.nav-link-modern) { text-align: center; margin-bottom: 4px; }
                }
            `}</style>
        </>
    );
}

export default NavBar;
