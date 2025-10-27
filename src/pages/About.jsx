import React from 'react';
import { Link } from 'react-router-dom';
import fannyImage from '../assets/images/fanny1.jpg';
import eventsImage from '../assets/images/caratula.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-banner">
        <div className="container">
          <div className="row">
            {/* <div className="col-12">
              <h1 className="about-title">Nosotros</h1>
            </div> */}
          </div>
        </div>
      </div>
      <div className='col-12 text-center'>
        <h2 className="events-section-title">Sobre Nosotros</h2>
      </div>
      <section className="about-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 about-image-container">
              <div className="about-image-wrapper">
                <img src={fannyImage} alt="Fanny's Cafe" className="about-image" />
              </div>
            </div>
            <div className="col-12 col-lg-6 about-text-container">
              <div className="about-text-wrapper">
                <h2 className="about-subtitle">"El aroma de un sueño emprendedor"</h2>
                <p className="about-text">
                  {/* Somos apasionados por el café y nos dedicamos a llevar experiencias cafeteras 
                  excepcionales a tu empresa o evento. Desde 2010, hemos estado sirviendo a 
                  compañías líderes, proporcionando no solo máquinas de café de vanguardia, 
                  sino también un servicio integral que incluye mantenimiento y suministro de 
                  las mejores cápsulas. */}
                  Hace tres años, Fanny —una amante del café y de los buenos momentos compartidos— decidió transformar su pasión en un proyecto con propósito.<br />
                  Un día, mientras organizaba un evento corporativo, se dio cuenta de algo: el café era mucho más que una bebida. Era una experiencia que podía transformar reuniones en momentos memorables.<br />
                  Así nació su emprendimiento: una propuesta que lleva máquinas de café profesionales a empresas y eventos, para que cada pausa tenga el sabor de lo auténtico.
                </p>
                <p className="about-text">
                Con el tiempo, Fanny fue sumando detalles que marcan la diferencia: vajilla elegante para quienes desean una presentación completa, asesoramiento personalizado según el tipo de evento y un servicio cálido, cercano, donde cada taza se sirve con dedicación.<br />
                Hoy, después de tres años, su emprendimiento sigue creciendo gracias a la confianza de empresas que buscan ofrecer algo distinto a sus equipos y a los organizadores de eventos que quieren agasajar a sus invitados con un café de calidad.
                </p>
                <p className="about-text">
                Porque Fanny aprendió que el café no solo despierta a las personas, sino también los vínculos, las emociones y los recuerdos.<br />
                Y ese es el espíritu que guía su marca:<br />
                llevar experiencias con aroma a café a cada empresa, reunión y celebración.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center mb-5">
              <h2 className="about-subtitle">Eventos Realizados</h2>
            </div>
            <div className="col-12 col-lg-6 order-lg-2 events-image-container">
              <div className="events-image-wrapper">
                <img src={eventsImage} alt="Eventos de Fanny's Cafe" className="events-image" />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-lg-1 events-text-container">
              <div className="events-text-wrapper">
                <p className="events-description">
                  En cada evento que organizamos, el café se convierte en el protagonista perfecto. 
                  Desde reuniones corporativas hasta celebraciones especiales, llevamos nuestras 
                  máquinas de café profesionales y un servicio personalizado que transforma cada 
                  pausa en una experiencia memorable.
                </p>
                <p className="events-description">
                  Ofrecemos equipos de última generación, vajilla elegante, y una amplia variedad 
                  de cápsulas premium para satisfacer todos los gustos. Nuestro equipo se encarga 
                  de cada detalle, desde la instalación hasta el servicio durante el evento, 
                  asegurando que tus invitados disfruten del mejor café.
                </p>
                <div className="events-button-container">
                  <Link to="/eventos" className="btn-events">
                    Ver Nuestros Eventos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
