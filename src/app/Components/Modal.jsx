"use client";

export default function Modal({ isVisible, onClose, title, children }) {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close-modal" onClick={onClose}>✕</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>

            <style jsx>{`
                .modal-overlay { 
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
                    background-color: rgba(0, 0, 0, 0.5); z-index: 9999; 
                    display: flex; justify-content: center; align-items: center; 
                    padding: 1rem; backdrop-filter: blur(2px); 
                }
                .modal-content { 
                    background: white; width: 100%; max-width: 550px; 
                    border-radius: 12px; box-shadow: 0 15px 50px rgba(0,0,0,0.3); 
                    display: flex; flex-direction: column; max-height: 95vh; 
                    overflow-y: auto; animation: fadeIn 0.3s ease-out; 
                }
                @keyframes fadeIn { 
                    from { opacity: 0; transform: translateY(15px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                .modal-header { 
                    padding: 1rem 1.5rem; border-bottom: 1px solid #f0f0f0; 
                    display: flex; justify-content: center; position: relative; 
                }
                .modal-title { margin: 0; font-weight: 700; color: #333; }
                .btn-close-modal { 
                    position: absolute; right: 1.5rem; background: none; border: none; 
                    font-size: 1.2rem; cursor: pointer; color: #999; 
                }
                .modal-body { padding: 1.5rem; }
            `}</style>
        </div>
    );
}
