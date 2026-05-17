"use client";

export default function Modal({ isVisible, onClose, title, children }) {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-premium" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-premium">
                    <div className="header-decoration"></div>
                    <h4 className="modal-title-premium">{title}</h4>
                    <button type="button" className="btn-close-premium" onClick={onClose} aria-label="Cerrar">
                        <span className="close-icon">✕</span>
                    </button>
                </div>
                <div className="modal-body-premium">
                    {children}
                </div>
            </div>

            <style jsx>{`
                .modal-overlay { 
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
                    background-color: rgba(0, 0, 0, 0.4); z-index: 9999; 
                    display: flex; justify-content: center; align-items: center; 
                    padding: 1.5rem; backdrop-filter: blur(8px); 
                    animation: overlayFade 0.3s ease-out;
                }

                @keyframes overlayFade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-content-premium { 
                    background: #ffffff; width: 100%; max-width: 500px; 
                    border-radius: 28px; box-shadow: 0 25px 80px rgba(0,0,0,0.15); 
                    display: flex; flex-direction: column; max-height: 90vh; 
                    overflow: hidden; position: relative;
                    animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
                }

                @keyframes modalSlideUp { 
                    from { opacity: 0; transform: translateY(40px) scale(0.95); } 
                    to { opacity: 1; transform: translateY(0) scale(1); } 
                }

                .modal-header-premium { 
                    padding: 2rem 2rem 1rem; border: none;
                    display: flex; justify-content: center; position: relative; 
                }

                .header-decoration {
                    position: absolute; top: 12px; width: 40px; height: 4px;
                    background: #e0e0e0; border-radius: 2px;
                }

                .modal-title-premium { 
                    margin: 0; font-weight: 800; color: #1a1a1a; 
                    font-size: 1.5rem; letter-spacing: -0.5px;
                }

                .btn-close-premium { 
                    position: absolute; right: 1.5rem; top: 1.5rem;
                    background: #f5f5f5; border: none; width: 32px; height: 32px;
                    border-radius: 50%; cursor: pointer; color: #666; 
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                }

                .btn-close-premium:hover { 
                    background: #eeeeee; color: #000; transform: rotate(90deg);
                }

                .close-icon { font-size: 0.9rem; font-weight: bold; }

                .modal-body-premium { 
                    padding: 0 2rem 2.5rem; 
                    overflow-y: auto;
                }

                @media (max-width: 576px) {
                    .modal-content-premium { border-radius: 24px 24px 0 0; position: fixed; bottom: 0; max-height: 95vh; }
                    .modal-overlay { align-items: flex-end; padding: 0; }
                }
            `}</style>
        </div>
    );
}
