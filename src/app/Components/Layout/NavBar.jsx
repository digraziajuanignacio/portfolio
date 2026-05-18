"use client";
import { useState, useEffect } from 'react';
import { ImLinkedin } from "react-icons/im";
import { FiInstagram, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import ContactForm from '../Forms/ContactForm';
import Modal from '../UI/Modal';

function NavBar() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleModal = () => setIsModalVisible(prev => !prev);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'My Works', href: '/mis-proyectos' },
        { name: 'Ta-Te-Ti', href: '/ta-te-ti' },
    ];

    return (
        <>
            <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <Link href="/" className="brand-link">
                        <span className="brand-name">Di Grazia IT</span>
                    </Link>

                    <nav className="main-nav">
                        <ul className="nav-list">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href} 
                                        className={`nav-item ${pathname === link.href ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button onClick={toggleModal} className="nav-item contact-btn-trigger">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="nav-extra">
                        <div className="social-links-wrapper">
                            <a href="https://github.com/digraziajuanignacio" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><IoLogoGithub /></a>
                            <a href="https://www.linkedin.com/in/digraziajuanignacio/" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><ImLinkedin /></a>
                            <a href="https://www.instagram.com/digrazia.tech/" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><FiInstagram /></a>
                        </div>
                        
                        <div className="divider d-none-mobile"></div>

                        {mounted && (
                            <button 
                                className="theme-toggle-btn" 
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-label="Cambiar tema"
                            >
                                {theme === 'dark' ? <FiSun /> : <FiMoon />}
                            </button>
                        )}
                        
                        <button className="menu-toggle-btn" onClick={toggleMobileMenu} aria-label="Menu">
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                <div className={`mobile-overlay-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <nav className="mobile-nav-content">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="mobile-nav-link">
                                {link.name}
                            </Link>
                        ))}
                        <button onClick={toggleModal} className="mobile-nav-link mobile-contact-btn">
                            Contact
                        </button>
                        <div className="mobile-actions mt-4">
                            {mounted && (
                                <button 
                                    className="theme-toggle-btn mobile-theme" 
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                >
                                    {theme === 'dark' ? <><FiSun className="me-2"/> Modo Claro</> : <><FiMoon className="me-2"/> Modo Oscuro</>}
                                </button>
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            <Modal isVisible={isModalVisible} onClose={toggleModal} title="Ponete en contacto">
                <ContactForm />
            </Modal>

            <style jsx>{`
                .custom-header {
                    position: fixed;
                    top: 0; left: 0; right: 0;
                    z-index: 9999;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    transition: all 0.3s ease;
                    background: transparent;
                }

                .custom-header.scrolled {
                    height: 75px;
                    background: var(--header-bg);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border-bottom: 1px solid var(--border-color);
                }

                .nav-container {
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 3rem;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    align-items: center;
                }

                :global(.brand-link) {
                    text-decoration: none !important;
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    border: none !important;
                }

                .brand-name {
                    font-size: 1.45rem;
                    font-weight: 500;
                    color: var(--text-dark) !important;
                    letter-spacing: -0.2px;
                    text-decoration: none !important;
                    transition: opacity 0.3s ease;
                }

                :global(.brand-link:hover) .brand-name {
                    opacity: 0.7;
                }

                .nav-list {
                    display: flex;
                    list-style: none;
                    gap: 2.5rem;
                    margin: 0; padding: 0;
                    align-items: center;
                }

                :global(.nav-item) {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--text-muted) !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease;
                    background: none;
                    border: none !important;
                    padding: 6px 0;
                    cursor: pointer;
                    position: relative;
                }

                :global(.nav-item::after) {
                    content: "";
                    position: absolute;
                    bottom: 0; left: 0;
                    width: 0; height: 2px;
                    background-color: var(--primary-color);
                    transition: width 0.3s ease;
                }

                :global(.nav-item:hover) {
                    color: var(--primary-color) !important;
                }

                :global(.nav-item:hover::after), :global(.nav-item.active::after) {
                    width: 100%;
                }

                :global(.nav-item.active) {
                    color: var(--primary-color) !important;
                }

                .nav-extra {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 1.5rem;
                }

                .social-links-wrapper {
                    display: flex;
                    gap: 1.2rem;
                    align-items: center;
                }

                :global(.social-icon-btn) {
                    color: var(--text-muted) !important;
                    font-size: 1.3rem;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    text-decoration: none !important;
                }

                :global(.social-icon-btn:hover) {
                    color: var(--primary-color) !important;
                    transform: translateY(-3px);
                }

                .divider {
                    width: 1px;
                    height: 24px;
                    background: var(--border-color);
                }

                .theme-toggle-btn {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    color: var(--text-dark);
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }

                .theme-toggle-btn:hover {
                    border-color: var(--primary-color);
                    color: var(--primary-color);
                    transform: translateY(-2px);
                }

                .menu-toggle-btn {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 1.8rem;
                    color: var(--text-dark);
                    cursor: pointer;
                }

                .mobile-overlay-menu {
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100vh;
                    background: var(--bg-light);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transform: translateY(-100%);
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 9000;
                }

                .mobile-overlay-menu.is-open {
                    transform: translateY(0);
                }

                .mobile-nav-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }

                :global(.mobile-nav-link) {
                    font-size: 2rem;
                    font-weight: 800;
                    color: var(--text-dark) !important;
                    text-decoration: none !important;
                }

                .mobile-contact-btn {
                    color: var(--primary-color) !important;
                }

                .mobile-theme {
                    width: auto;
                    padding: 0 20px;
                    height: 50px;
                    font-size: 1rem;
                    font-weight: 700;
                }

                @media (max-width: 991px) {
                    .main-nav, .social-links-wrapper, .divider { display: none; }
                    .menu-toggle-btn { display: block; z-index: 10000; }
                    .nav-container { display: flex; justify-content: space-between; padding: 0 1.5rem; }
                }
            `}</style>
        </>
    );
}

export default NavBar;
