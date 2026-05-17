"use client";
import Image from "next/image";
import { BiMapAlt } from "react-icons/bi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";
import { FaCode, FaTools, FaLightbulb, FaRocket } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "React & Next.js", level: "85%", icon: <FaCode />, category: "dev" },
    { name: "Javascript / Node.js", level: "75%", icon: <FaCode />, category: "dev" },
    { name: "Soporte & Hardware", level: "95%", icon: <FaTools />, category: "tech" },
    { name: "Optimización de Sistemas", level: "90%", icon: <FaTools />, category: "tech" }
  ];

  return (
    <div className="about-wrapper">
      {/* --- INTRO SECTION --- */}
      <section className="about-intro py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <Fade triggerOnce>
                <div className="about-image-wrapper">
                    <div className="image-main">
                        <Image
                            src="/images/profilepicture.webp"
                            alt="Juan Ignacio"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-4"
                        />
                    </div>
                    <div className="experience-badge">
                        <span className="number">+5</span>
                        <span className="text">Años de Pasión IT</span>
                    </div>
                </div>
              </Fade>
            </div>
            
            <div className="col-12 col-lg-7">
              <Fade triggerOnce direction="right">
                <div className="about-content">
                  <h6 className="text-success fw-bold text-uppercase mb-2">Sobre Mí</h6>
                  <h1 className="display-4 fw-bold mb-4">Juan Ignacio Di Grazia</h1>
                  <p className="lead text-muted mb-4">
                    Estudiante de <strong>Ingeniería en Sistemas en la UTN</strong>, fusionando la precisión del hardware con la creatividad del desarrollo de software.
                  </p>
                  <p className="text-muted mb-5" style={{ lineHeight: "1.8" }}>
                    Mi trayectoria se define por la resolución práctica de problemas. Desde optimizar el rendimiento térmico de una estación de trabajo hasta construir arquitecturas web escalables, busco la excelencia técnica en cada detalle. Mi objetivo es crear soluciones que no solo funcionen, sino que perduren.
                  </p>
                  
                  <div className="contact-grid">
                    <div className="contact-card">
                      <div className="icon-box"><BiMapAlt /></div>
                      <div>
                        <span className="label">Ubicación</span>
                        <span className="value">Buenos Aires, CABA</span>
                      </div>
                    </div>
                    <div className="contact-card">
                      <div className="icon-box"><IoMailUnreadOutline /></div>
                      <div>
                        <span className="label">Email</span>
                        <span className="value">digraziatech@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="about-skills py-5 bg-white">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="fw-bold h1">Skills Profesionales</h2>
                <div className="title-bar mx-auto"></div>
            </div>

            <div className="row g-4">
                {skills.map((skill, idx) => (
                    <div className="col-12 col-md-6" key={idx}>
                        <Fade delay={idx * 100} triggerOnce>
                            <div className="skill-modern-card">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={`skill-icon ${skill.category}`}>{skill.icon}</div>
                                        <span className="fw-bold">{skill.name}</span>
                                    </div>
                                    <span className="text-muted fw-bold">{skill.level}</span>
                                </div>
                                <div className="progress-container">
                                    <div className={`progress-bar-fill ${skill.category}`} style={{ width: skill.level }}></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="about-philosophy py-5">
        <div className="container">
            <div className="row g-4 text-center">
                <div className="col-12 col-md-4">
                    <Fade bottom triggerOnce>
                        <div className="philo-card">
                            <div className="philo-icon"><FaLightbulb /></div>
                            <h4>Innovación</h4>
                            <p className="text-muted small">Siempre buscando la tecnología más eficiente para cada proyecto.</p>
                        </div>
                    </Fade>
                </div>
                <div className="col-12 col-md-4">
                    <Fade bottom delay={200} triggerOnce>
                        <div className="philo-card">
                            <div className="philo-icon"><FaRocket /></div>
                            <h4>Rendimiento</h4>
                            <p className="text-muted small">Optimización máxima tanto en líneas de código como en hardware físico.</p>
                        </div>
                    </Fade>
                </div>
                <div className="col-12 col-md-4">
                    <Fade bottom delay={400} triggerOnce>
                        <div className="philo-card">
                            <div className="philo-icon"><FaTools /></div>
                            <h4>Mantenimiento</h4>
                            <p className="text-muted small">Soluciones diseñadas para ser duraderas y fáciles de escalar.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
      </section>

      <style jsx>{`
        .about-wrapper { background-color: #fcfcfc; }
        
        /* Intro Section */
        .about-image-wrapper { position: relative; width: 100%; height: 500px; }
        .image-main { position: relative; width: 90%; height: 100%; z-index: 1; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        .experience-badge { position: absolute; bottom: 30px; right: 0; background: white; padding: 20px; border-radius: 16px; box-shadow: 0 15px 30px rgba(0,0,0,0.1); z-index: 2; display: flex; flex-direction: column; align-items: center; border: 1px solid rgba(0,0,0,0.05); }
        .experience-badge .number { font-size: 2rem; font-weight: 800; color: #198754; line-height: 1; }
        .experience-badge .text { font-size: 0.75rem; font-weight: 700; color: #555; text-transform: uppercase; margin-top: 5px; }

        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .contact-card { display: flex; align-items: center; gap: 15px; padding: 15px; background: white; border-radius: 12px; border: 1px solid rgba(0,0,0,0.05); }
        .icon-box { width: 40px; height: 40px; background: rgba(25, 135, 84, 0.1); color: #198754; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .contact-card .label { display: block; font-size: 0.75rem; color: #aaa; font-weight: 700; text-transform: uppercase; }
        .contact-card .value { font-size: 0.9rem; color: #333; font-weight: 600; }

        /* Skills Section */
        .title-bar { width: 60px; height: 4px; background: #198754; border-radius: 2px; margin-top: 15px; }
        .skill-modern-card { background: #f8f9fa; padding: 25px; border-radius: 20px; transition: all 0.3s ease; }
        .skill-modern-card:hover { transform: translateY(-5px); background: white; box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
        .skill-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; }
        .skill-icon.dev { background: linear-gradient(135deg, #0d6efd, #0dcaf0); }
        .skill-icon.tech { background: linear-gradient(135deg, #198754, #20c997); }
        .progress-container { width: 100%; height: 8px; background: #e9ecef; border-radius: 10px; overflow: hidden; }
        .progress-bar-fill { height: 100%; border-radius: 10px; }
        .progress-bar-fill.dev { background: linear-gradient(90deg, #0d6efd, #0dcaf0); }
        .progress-bar-fill.tech { background: linear-gradient(90deg, #198754, #20c997); }

        /* Philosophy Section */
        .philo-card { padding: 40px 20px; }
        .philo-icon { font-size: 2.5rem; color: #198754; margin-bottom: 20px; opacity: 0.8; }
        .philo-card h4 { font-weight: 700; margin-bottom: 15px; }

        @media (max-width: 991px) {
            .about-image-wrapper { height: 400px; margin-bottom: 40px; }
            .image-main { width: 100%; }
        }
      `}</style>
    </div>
  );
}
