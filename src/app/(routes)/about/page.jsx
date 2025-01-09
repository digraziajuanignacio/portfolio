"use client";
import Image from "next/image";
import { BiMapAlt } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade cascade>
      <div className="container mt-4">
        {/* Título */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center pt-4">
          <h1>Sobre mí</h1>
        </div>

        {/* Contenido Principal */}
        <div className="row mt-5 justify-content-center align-items-start text-center text-md-start">
          {/* Títulos alineados */}
          <div className="col-12 mb-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-4">
                <h2 className="fw-bold mb-0">Juan Ignacio</h2>
              </div>
              <div className="col-12 col-md-4 d-none d-md-block"></div>
              <div className="col-12 col-md-4">
                <h2 className="fw-bold mb-0 mt-4 mt-md-0">My Professional Skills</h2>
              </div>
            </div>
          </div>

          {/* Columna Izquierda */}
          <div className="col-12 col-md-4 mb-4">
            <p>
              Tengo 18 años, soy proactivo, adaptable y orientado a soluciones.
              Destaco en el trabajo en equipo, el manejo de tecnologías y el
              pensamiento crítico. Mi disciplina, forjada en Taekwondo, me ha
              enseñado valores como el espíritu indomable y la paciencia, que
              aplico en mi vida personal y profesional.
            </p>
            <p>
              <BiMapAlt /> Floresta, Buenos Aires CABA. <br />
              <FaPhoneVolume /> +54 9 11 2770-3621 <br />
              <IoMailUnreadOutline /> digraziatech@gmail.com <br />
              <TbWorldCode /> www.digraziajuanignacio.netlify.app
            </p>
          </div>

          {/* Imagen Central */}
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image
                src="/profilepicture.png"
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="col-12 col-md-4">
            <p>
              Mis mayores fuertes son el desarrollo frontend en tecnologías como
              NextJS, React y Bootstrap. Recientemente incorporé a mis
              conocimientos el apartado Backend y las respuestas e interacciones
              entre el usuario y el servidor. Mi mayor fuerte en esta área son
              las bases de datos no relacionales (MongoDB, Mongoose) y el uso de
              programas como Postman.
            </p>
            <p className="mb-2">Javascript</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "7px" }}
            >
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
            <p className="mb-2 pt-3">React</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "7px" }}
            >
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <p className="mb-2 pt-3">MongoDB</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "7px" }}
            >
              <div className="progress-bar" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}