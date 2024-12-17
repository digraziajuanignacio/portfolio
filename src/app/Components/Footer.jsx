import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-3 mt-5">
        <div className="container text-center d-flex justify-content-center align-items-center">
          <p>&copy; {new Date().getFullYear()} Di Grazia Tech. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  };


export default Footer;