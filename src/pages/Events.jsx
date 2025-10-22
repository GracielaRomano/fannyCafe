import React from 'react';
import { Link } from 'react-router-dom';

// Importar imágenes de eventos
import event1 from '../assets/images/laRural/caratula.jpg';
import event2 from '../assets/images/photo-1739991892130-722414cc42b8.jpeg';
import event3 from '../assets/images/photo-1664035762719-4d6fc28673a3.jpeg';
import event4 from '../assets/images/photo-1678341611574-f1319b9f0177.jpeg';
import event5 from '../assets/images/photo-1674985140588-d40f26c575df.jpeg';
import event6 from '../assets/images/photo-1640024280360-7e5a6e6126f0.jpeg';
import event7 from '../assets/images/photo-1676976197798-96cbec85e4ef.jpeg';
import event8 from '../assets/images/photo-1736601699885-d009d51e3a60.jpeg';

const eventsData = [
  {
    id: 1,
    title: 'Evento La Rural',
    image: event1,
    description: 'Servicio de café premium para Congreso Argentino de Cardiologia (SAC).',
    date: '15 al 17 de Octubre, 2025'
  },
  {
    id: 2,
    title: 'Boda Elegante en Jardín',
    image: event2,
    description: 'Coffee bar personalizado para celebración matrimonial con estación de café gourmet.',
    date: '22 de Abril, 2024'
  },
  {
    id: 3,
    title: 'Lanzamiento Producto Premium',
    image: event3,
    description: 'Servicio exclusivo de café para presentación de nueva línea de productos de lujo.',
    date: '10 de Mayo, 2024'
  },
  {
    id: 4,
    title: 'Reunión Anual de Accionistas',
    image: event4,
    description: 'Catering de café para junta directiva y presentación de resultados anuales.',
    date: '5 de Junio, 2024'
  },
  {
    id: 5,
    title: 'Festival Gastronómico',
    image: event5,
    description: 'Stand de café artesanal en evento gastronómico con degustaciones especiales.',
    date: '18 de Julio, 2024'
  },
  {
    id: 6,
    title: 'Workshop Empresarial',
    image: event6,
    description: 'Servicio de café continuo durante seminario de capacitación empresarial.',
    date: '3 de Agosto, 2024'
  },
  {
    id: 7,
    title: 'Inauguración Oficinas',
    image: event7,
    description: 'Coffee break para evento de apertura de nuevas instalaciones corporativas.',
    date: '12 de Septiembre, 2024'
  },
  {
    id: 8,
    title: 'Gala Benéfica',
    image: event8,
    description: 'Servicio premium de café para cena benéfica de recaudación de fondos.',
    date: '20 de Octubre, 2024'
  }
];

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-banner"></div>

      <section className="events-grid-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="events-section-title">Nuestros Eventos</h2>
              <p className="events-section-description">
                Descubre la calidad y dedicación que ponemos en cada evento. 
                Cada experiencia es única y especial.
              </p>
            </div>
          </div>

          <div className="events-grid">
            {eventsData.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-card-image-wrapper">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="event-card-image" 
                  />
                  <div className="event-card-overlay">
                    <span className="event-card-date">{event.date}</span>
                  </div>
                </div>
                <div className="event-card-content">
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-description">{event.description}</p>
                  <Link 
                    to={`/eventos/${event.id}`} 
                    className="event-card-button"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;