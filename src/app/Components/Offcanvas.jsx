import { useState, useEffect } from 'react';

export default function OffcanvasCentered() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false); // Para controlar el renderizado en cliente

  useEffect(() => {
    // Este useEffect se asegura de que el código solo se ejecute en el cliente
    setIsClient(true);
  }, []);

  const toggleOffcanvas = () => {
    setIsVisible((prev) => !prev);
  };

  // Verificar si es cliente para evitar problemas de hydration
  if (!isClient) return null; // No renderizar nada hasta que el componente se monte en el cliente

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
          <form style={{ width: '100%', maxHeight: '70vh', overflowY: 'auto' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingresa tu nombre"
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
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100" style={{ marginTop: '1rem' }}>
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Estilos para corregir márgenes en dispositivos móviles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .offcanvas {
            height: 67vh !important; /* Reducido para dispositivos móviles */
            padding: 0.5rem;
            max-width: 90%; /* Mejor ajuste para pantallas pequeñas */
          }
          .offcanvas-body {
            padding: 1rem;
          }
          .form-control {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
