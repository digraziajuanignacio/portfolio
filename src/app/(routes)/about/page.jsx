import Image from "next/image";
import { BiMapAlt } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";

export default function About() {
  return (
    <div className="container mt-4">
      {/* Título */}
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1>¿Quién Soy?</h1>
      </div>

      {/* Contenido Principal */}
      <div className="row mt-5 d-flex justify-content-center align-items-center text-center text-md-start">
        {/* Columna Izquierda */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h2 style={{ fontWeight: "bold" }}>Juan Ignacio</h2>
          <p>
            Tengo 18 años, soy proactivo, adaptable y orientado a soluciones. Destaco en el trabajo
            en equipo, el manejo de tecnologías y el pensamiento crítico. Mi disciplina, forjada en
            Taekwondo, me ha enseñado valores como el espíritu indomable y la paciencia, que aplico
            en mi vida personal y profesional.
          </p>
          <p>
            <BiMapAlt /> Floresta, Buenos Aires CABA. <br />
            <FaPhoneVolume /> +54 9 11 2770-3621 <br />
            <IoMailUnreadOutline /> digraziatech@gmail.com <br />
            <TbWorldCode /> www.digraziajuanignacio.netlify.app
          </p>
        </div>

        {/* Imagen Central */}
        <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              border: "2px solid black",
              position: "relative",
              overflow: "hidden",
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
        <div className="col-12 col-md-4 mt-4">
          <h2 style={{ fontWeight: "bold" }}>My Professional Skills</h2>
          <p>
            Mis mayores fuertes son el desarrollo frontend en tecnologías como NextJS, React y
            Bootstrap. Recientemente incorporé a mis conocimientos el apartado Backend y las
            respuestas e interacciones entre el usuario y el servidor. Mi mayor fuerte en esta área
            son las bases de datos no relacionales (MongoDB, Mongoose) y el uso de programas como
            Postman.
          </p>
          <p>
            <strong>NextJS:</strong> 95% <br />
            <strong>React:</strong> 80% <br />
            <strong>Bootstrap:</strong> 90%
          </p>
        </div>
      </div>
    </div>
  );
}
