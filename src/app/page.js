"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Hero from "./Components/Home/Hero";
import CurrentStatus from "./Components/Home/CurrentStatus";
import FeaturedProjects from "./Components/Home/FeaturedProjects";
import TatetiPromo from "./Components/Home/TatetiPromo";
import Modal from "./Components/UI/Modal";
import ContactForm from "./Components/Forms/ContactForm";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <div className="home-wrapper">
      <Hero toggleModal={toggleModal} />
      <CurrentStatus />
      <FeaturedProjects />
      <TatetiPromo />

      <Modal isVisible={isModalVisible} onClose={toggleModal} title="Contacto">
        <ContactForm />
      </Modal>

      <style jsx>{`
        .home-wrapper { background-color: #fcfcfc; overflow-x: hidden; }
      `}</style>
    </div>
  );
}
