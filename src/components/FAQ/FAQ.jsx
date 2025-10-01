import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: '¿Qué incluye el servicio de alquiler?',
    answer: 'El servicio de alquiler incluye la máquina de café de tu elección, el mantenimiento técnico y el suministro de cápsulas de café de alta calidad. Nos adaptamos a tus necesidades.'
  },
  {
    question: '¿Cuál es el proceso para solicitar un presupuesto?',
    answer: 'Puedes solicitar un presupuesto a través de nuestro formulario de contacto o llamándonos directamente. Te contactaremos para entender tus requerimientos y ofrecerte una solución a medida.'
  },
  {
    question: '¿Ofrecen degustaciones de café?',
    answer: 'Sí, para eventos especiales y contratos a largo plazo, podemos organizar degustaciones para que selecciones tus sabores preferidos.'
  },
  {
    question: '¿El mantenimiento es incluido?',
    answer: 'Absolutamente. El mantenimiento preventivo y correctivo de las máquinas está completamente incluido en nuestros planes de alquiler.'
  },
  {
    question: '¿Qué tipos de vajilla ofrecen?',
    answer: 'Contamos con una amplia gama de vajillas elegantes y funcionales, perfectas para complementar cualquier tipo de evento, desde reuniones corporativas hasta celebraciones sociales.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10 m-auto">
            <div className="content">
              <div className="row justify-content-center mb-5">
                <div className="col-12 content-head">
                  <div className="section-head">
                    <h4 className="section-title align-center text-center mb-0">
                      <strong>Preguntas Frecuentes</strong>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <div
                      className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h6 className="accordion-title">
                        {item.question}
                      </h6>
                      <span className="accordion-icon"></span>
                    </div>
                    <div
                      className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
