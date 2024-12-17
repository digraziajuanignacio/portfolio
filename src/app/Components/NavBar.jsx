"use client"
import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

function NavBar(){
    return <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand d-block d-lg-none ms-0" href="/">DTech</a> {/* Alineación a la izquierda solo en móviles */}
    <a className="navbar-brand d-none d-lg-block" href="#">DTech</a> {/* Alineación centrada en pantallas grandes */}
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
          <li className="nav-item mx-5">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="/mis-proyectos">My Works</a>
          </li>
        </ul>
      </div>
      {/* Íconos de redes sociales */}
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
      <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center d-block d-lg-none">
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

    </>
}

export default NavBar;