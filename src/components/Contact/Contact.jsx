import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí iría la lógica de envío del formulario
      setFormStatus({
        success: true,
        error: false,
        message: '¡Gracias por contactarnos! Te responderemos pronto.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        message: '¡Ups! Hubo un problema al enviar el mensaje.'
      });
    }
  };

  return (
    <section className="form5 cid-contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="mbr-section-head mb-5">
              <h3 className="mbr-section-title align-center mb-0">
                <strong>Contáctanos</strong>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 mx-auto mbr-form">
            <form onSubmit={handleSubmit} className="mbr-form">
              <div className="row">
                {formStatus.success && (
                  <div className="alert alert-success col-12">
                    {formStatus.message}
                  </div>
                )}
                {formStatus.error && (
                  <div className="alert alert-danger col-12">
                    {formStatus.message}
                  </div>
                )}
              </div>
              <div className="dragArea row">
                <div className="col-md col-sm-12 form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md col-sm-12 form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 form-group mb-3">
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Contact;