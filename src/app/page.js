"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import TypeIt from "typeit-react";
import { useState } from "react";

export default function Home() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      {/* SECCIÓN CENTRAL CENTRADA */}
      <Fade cascade>
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center mt-5"
          style={{
            minHeight: "80vh",
          }}
        >
          {/* Imagen del círculo */}
          <div
            className="d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "auto",
              aspectRatio: "1/1",
              borderRadius: "50%",
              border: "2px solid black",
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

          <TypeIt
            className="mt-3"
            as={"p"}
            options={{
              cursor: false,
              afterComplete: () => setShowSecond(true),
            }}
          >
            Frontend & Backend Developer
          </TypeIt>

          {showSecond && (
            <TypeIt
              className="mt-3"
              as={"p"}
              options={{
                cursor: false,
                afterComplete: () => setShowThird(true),
              }}
            >
              Software & Hardware Technician
            </TypeIt>
          )}

          {showThird && (
            <TypeIt
              className="mt-3"
              as={"p"}
              options={{
                cursor: false,
                afterComplete: () => setShowInfo(true),
              }}
            >
              AI Specialist & Consultant
            </TypeIt>
          )}

          {showInfo && (
            <TypeIt
              className="pt-5"
              as={"h3"}
              options={{
                cursor: false,
              }}
            >
              Información Personal:
            </TypeIt>
          )}
        </div>
      </Fade>

      {/* Espacio extra para crear el efecto de scroll */}
      <div style={{ height: "15vh" }}></div>

      {/* SECCIÓN CONTENIDO ABAJO */}
      <Fade cascade>
        <div className="container-fluid mt-5 mb-5">
          <div className="row g-4">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <h3 className="text-center">Sobre mí</h3>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div className="card w-100" style={{ maxWidth: "30rem" }}>
                <img
                  src="/LOGO.jfif"
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "cover", maxHeight: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Soy un desarrollador web frontend & backend especializado en
                    NextJS, React, Bootstrap y MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 d-flex justify-content-center order-lg-2 order-md-1">
              <div className="card w-100" style={{ maxWidth: "30rem" }}>
                <img
                  src="/LOGO.jfif"
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "cover", maxHeight: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Mi emprendimiento Di Grazia Tech consiste en la limpieza,
                    optimización y armado de computadoras de escritorio,
                    notebooks y consolas de videojuegos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center order-lg-1 order-md-2">
              <h3 className="text-center">Mi Emprendimiento</h3>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
