"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div>
      {/* SECCIÓN CENTRAL CENTRADA */}
      <Fade cascade>
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          style={{
            height: "80vh",
          }}
        >
          {/* Imagen del círculo */}
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "2px solid black",
              marginBottom: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/profilepicture.png" // Ruta de tu imagen en la carpeta 'public/images'
              alt="Mi Foto"
              layout="fill" // La imagen ocupa todo el contenedor
              objectFit="cover" // Recorta y ajusta la imagen dentro del círculo
              priority // Optimización: carga la imagen de manera prioritaria
            />
          </div>

          {/* Texto Sobre Mí */}
          <h2 className="mt-3">Juan Ignacio Di Grazia</h2>
          <p className="pt-3">Frontend & Backend Developer</p>
          <p>Software & Hardware Technician</p>
          <p>AI Specialist & Consultant</p>
          <h3 className="pt-5">Información Personal:</h3>
        </div>
      </Fade>

      {/* Espacio extra para crear el efecto de scroll */}
      <div style={{ height: "15vh" }}></div>

      {/* SECCIÓN CONTENIDO ABAJO */}
      <Slide cascade triggerOnce>
        <div className="row container mt-5 mx-auto mb-5">
          <div className="col-lg-6 d-flex justify-content-start align-items-center mb-5" style={{ height: "20rem" }}>
            <h3 className="text-center">Sobre mí</h3>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ width: "30rem", height: "20rem" }}>
              <img
                src="/LOGO.jfif"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <div className="card-body" style={{ paddingTop: "1rem" }}>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div style={{ height: "20vh" }}></div>
          <div className="col-lg-6 mt-5" style={{ height: "20rem" }}>
          <div className="card" style={{ width: "30rem", height: "20rem" }}>
              <img
                src="/LOGO.jfif"
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <div className="card-body" style={{ paddingTop: "1rem" }}>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5" style={{ height: "20rem" }} >
          <h3 className="text-center">Mi Emprendimiento</h3>
          </div>
        </div>
      </Slide>
    </div>
  );
}
