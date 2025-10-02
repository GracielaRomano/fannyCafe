import React from 'react';
import FormContact from '../components/FormContact/FormContact';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="contact-title">Contacto</h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <p className="contact-description">Aquí puedes contactar con nosotros. Estamos disponibles para responder tus consultas y brindarte el mejor servicio.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <FormContact />
          </div>
          <div className="col-12 col-lg-6">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1757444825334!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287fdc8b2be5%3A0x4e0563d017ad4d36!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                width="100%" 
                height="600" 
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de nuestra cafetería"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 info-item">
                <h6><strong>Teléfono</strong></h6>
                <p><a href="tel:+34 600 123 456">+34 600 123 456</a></p>
              </div>
              <div className="col-md-3 info-item">
                <h6><strong>Email</strong></h6>
                <p><a href="mailto:info@cafesdelux.es">info@cafesdelux.es</a></p>
              </div>
              <div className="col-md-3 info-item">
                <h6><strong>Dirección</strong></h6>
                <p>Calle Falsa 123, Ciudad Ejemplo</p>
              </div>
              <div className="col-md-3 info-item">
                <h6><strong>Horario</strong></h6>
                <p>Lunes a Viernes: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
