"use client";
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Modal from './Modal';

export default function OffcanvasCentered() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const toggleModal = () => setIsVisible(prev => !prev);

    return (
        <>
            <button className="btn btn-success" type="button" onClick={toggleModal}>
                Contact Me
            </button>

            <Modal isVisible={isVisible} onClose={toggleModal} title="Área de contacto">
                <ContactForm />
            </Modal>
        </>
    );
}
