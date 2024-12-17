"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import TypeIt from "typeit-react";
import { useState } from "react";

export default function Home() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

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
              src="/profilepicture.png"
              alt="Mi Foto"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Nombre y textos generados por TypeIt */}
          <h2 className="mt-3 mb-2">Juan Ignacio Di Grazia</h2>

          {/* Contenedor con altura fija para evitar movimientos */}
          <div
            className="typeit-container mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "150px", // Altura fija para evitar movimientos
              overflow: "hidden",
            }}
          >
            <TypeIt
              className="mt-2"
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
                className="mt-2"
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
                className="mt-2"
                as={"p"}
                options={{
                  cursor: false,
                }}
              >
                AI Specialist & Consultant
              </TypeIt>
            )}
          </div>

          {/* Botón de descarga del CV */}
          <div
            className="static-download"
            style={{
              marginTop: "7px",
            }}
          >
            <a
              href="/DiGraziaCV.pdf"
              download="/DiGraziaCV.pdf"
              className="btn btn-info"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </Fade>

      {/* Espacio extra para crear el efecto de scroll */}

    </div>
  );
}
