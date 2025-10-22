import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Importar imágenes de eventos
import event1 from '../assets/images/laRural/caratula.jpg';
import event2 from '../assets/images/photo-1739991892130-722414cc42b8.jpeg';
import event3 from '../assets/images/photo-1664035762719-4d6fc28673a3.jpeg';
import event4 from '../assets/images/photo-1678341611574-f1319b9f0177.jpeg';
import event5 from '../assets/images/photo-1674985140588-d40f26c575df.jpeg';
import event6 from '../assets/images/photo-1640024280360-7e5a6e6126f0.jpeg';
import event7 from '../assets/images/photo-1676976197798-96cbec85e4ef.jpeg';
import event8 from '../assets/images/photo-1736601699885-d009d51e3a60.jpeg';

// Datos completos de los eventos
const eventsDetailData = [
  {
    id: 1,
    title: 'Evento La Rural',
    subtitle: 'Congreso Argentino de Cardiología (SAC)',
    image: event1,
    bannerImage: event1,
    date: '15 al 17 de Octubre, 2025',
    location: 'La Rural - Predio Ferial, Buenos Aires',
    attendees: '500+ profesionales',
    description: 'Servicio de café premium para el prestigioso Congreso Argentino de Cardiología, uno de los eventos médicos más importantes del año.',
    fullDescription: `El Congreso Argentino de Cardiología (SAC) reunió a más de 500 profesionales de la salud en La Rural, 
    donde tuvimos el honor de brindar nuestro servicio de café premium durante los tres días del evento. 
    
    Instalamos múltiples estaciones de café estratégicamente ubicadas en diferentes áreas del predio. 
     Cada estación 
    contó con máquinas de última generación y un barista profesional dedicado a preparar café de 
    especialidad para los asistentes.
    
    Ofrecimos una amplia variedad de opciones, desde espressos intensos hasta capuchinos suaves, 
    además de alternativas sin lactosa y descafeinadas. La presentación fue impecable, con vajilla 
    elegante y un servicio personalizado que recibió excelentes comentarios de los organizadores y 
    participantes.`,
    services: [
      'Máquinas de café profesionales',
      'Baristas especializados',
      'Variedad de cápsulas premium',
      'Vajilla elegante',
      'Servicio personalizado',
      'Opciones sin lactosa',
      'Café descafeinado',
      'Atención durante 3 días completos'
    ],
    gallery: [event1, event1, event1, event1],
    testimonial: {
      text: 'El servicio de café fue excepcional. Los asistentes quedaron encantados con la calidad y la presentación. Definitivamente volveremos a trabajar con ellos en futuros eventos.',
      author: 'Dr. Carlos Mendoza',
      position: 'Director del Congreso SAC'
    }
  },
  {
    id: 2,
    title: 'Boda Elegante en Jardín',
    subtitle: 'Celebración Matrimonial Premium',
    image: event2,
    bannerImage: event2,
    date: '22 de Abril, 2024',
    location: 'Jardín Botánico, Ciudad',
    attendees: '150 invitados',
    description: 'Coffee bar personalizado para celebración matrimonial con estación de café gourmet.',
    fullDescription: `Una boda de ensueño donde el café fue el protagonista perfecto del after party. 
    Montamos un elegante coffee bar en el jardín, completamente decorado acorde al estilo de la boda.
    
    Los novios optaron por una experiencia de café gourmet completa, donde los invitados podían 
    elegir entre diferentes tipos de preparaciones: desde espressos hasta lattes artísticos con 
    diseños personalizados que incluían las iniciales de los novios.
    
    El servicio se extendió durante toda la velada, adaptándose a los diferentes momentos de la 
    celebración, desde el cóctel hasta el cierre de la fiesta.`,
    services: [
      'Coffee bar personalizado',
      'Decoración temática',
      'Latte art personalizado',
      'Múltiples opciones de café',
      'Vajilla de porcelana',
      'Servicio de meseros',
      'Postres complementarios'
    ],
    gallery: [event2, event2, event2],
    testimonial: {
      text: 'Nuestros invitados no pararon de hablar del coffee bar. Fue un detalle que marcó la diferencia en nuestra boda.',
      author: 'María y Juan',
      position: 'Novios'
    }
  },
  {
    id: 3,
    title: 'Lanzamiento Producto Premium',
    subtitle: 'Evento Corporativo de Marca',
    image: event3,
    bannerImage: event3,
    date: '10 de Mayo, 2024',
    location: 'Centro de Convenciones',
    attendees: '200 ejecutivos',
    description: 'Servicio exclusivo de café para presentación de nueva línea de productos de lujo.',
    fullDescription: `Participamos en el lanzamiento de una nueva línea de productos premium, donde el café 
    fue parte integral de la experiencia de marca. Diseñamos un servicio exclusivo que reflejaba los 
    valores de sofisticación y calidad del producto presentado.
    
    Creamos una experiencia multisensorial donde cada taza de café contaba una historia, alineada con 
    la narrativa de la marca. Los asistentes pudieron disfrutar de degustaciones guiadas y maridajes 
    especiales.`,
    services: [
      'Servicio exclusivo',
      'Café de especialidad',
      'Maridajes personalizados',
      'Degustaciones guiadas',
      'Branding personalizado',
      'Presentación premium'
    ],
    gallery: [event3, event3, event3],
    testimonial: {
      text: 'El servicio de café elevó la experiencia del evento a otro nivel. Perfecto para nuestro lanzamiento.',
      author: 'Ana Rodríguez',
      position: 'Directora de Marketing'
    }
  },
  {
    id: 4,
    title: 'Reunión Anual de Accionistas',
    subtitle: 'Evento Corporativo Ejecutivo',
    image: event4,
    bannerImage: event4,
    date: '5 de Junio, 2024',
    location: 'Hotel Ejecutivo 5 Estrellas',
    attendees: '100 ejecutivos',
    description: 'Catering de café para junta directiva y presentación de resultados anuales.',
    fullDescription: `Brindamos servicio de café premium durante la reunión anual de accionistas de una 
    importante corporación. El evento requería un servicio discreto pero impecable, adaptado a los 
    altos estándares ejecutivos.
    
    Instalamos estaciones de café en las salas de reuniones y áreas de descanso, con servicio 
    continuo durante todo el día. Cada detalle fue cuidadosamente planificado para no interrumpir 
    las presentaciones mientras se mantenía un suministro constante de café fresco.`,
    services: [
      'Servicio discreto',
      'Café premium constante',
      'Atención personalizada',
      'Vajilla ejecutiva',
      'Opciones variadas',
      'Servicio de día completo'
    ],
    gallery: [event4, event4, event4],
    testimonial: {
      text: 'Profesionalismo impecable. El servicio fue exactamente lo que necesitábamos.',
      author: 'Roberto Sánchez',
      position: 'CEO'
    }
  },
  {
    id: 5,
    title: 'Festival Gastronómico',
    subtitle: 'Stand de Café Artesanal',
    image: event5,
    bannerImage: event5,
    date: '18 de Julio, 2024',
    location: 'Plaza Central',
    attendees: '1000+ visitantes',
    description: 'Stand de café artesanal en evento gastronómico con degustaciones especiales.',
    fullDescription: `Participamos en el festival gastronómico más importante de la ciudad con un stand 
    dedicado al café de especialidad. Durante dos días, ofrecimos degustaciones gratuitas y vendimos 
    nuestras cápsulas premium.
    
    El stand se convirtió en uno de los puntos más concurridos del festival, con largas filas de 
    visitantes ansiosos por probar nuestras diferentes variedades de café. Realizamos demostraciones 
    en vivo de preparación de café y educamos a los asistentes sobre los orígenes y características 
    de cada blend.`,
    services: [
      'Stand personalizado',
      'Degustaciones gratuitas',
      'Demostraciones en vivo',
      'Venta de productos',
      'Educación sobre café',
      'Múltiples variedades'
    ],
    gallery: [event5, event5, event5],
    testimonial: {
      text: 'El stand de café fue uno de los más exitosos del festival. Gran calidad y excelente atención.',
      author: 'Laura Martínez',
      position: 'Organizadora del Festival'
    }
  },
  {
    id: 6,
    title: 'Workshop Empresarial',
    subtitle: 'Seminario de Capacitación',
    image: event6,
    bannerImage: event6,
    date: '3 de Agosto, 2024',
    location: 'Centro de Capacitación',
    attendees: '80 participantes',
    description: 'Servicio de café continuo durante seminario de capacitación empresarial.',
    fullDescription: `Proporcionamos servicio de café durante un workshop intensivo de tres días. 
    El evento requería mantener a los participantes energizados y concentrados durante largas 
    jornadas de capacitación.
    
    Instalamos estaciones de autoservicio estratégicamente ubicadas, con reabastecimiento continuo 
    y una amplia variedad de opciones para satisfacer todos los gustos. También ofrecimos snacks 
    complementarios para acompañar el café.`,
    services: [
      'Servicio continuo',
      'Estaciones de autoservicio',
      'Reabastecimiento constante',
      'Variedad de opciones',
      'Snacks complementarios',
      'Servicio de 3 días'
    ],
    gallery: [event6, event6, event6],
    testimonial: {
      text: 'El café mantuvo al equipo activo y motivado durante todo el workshop. Excelente servicio.',
      author: 'Patricia González',
      position: 'Gerente de Recursos Humanos'
    }
  },
  {
    id: 7,
    title: 'Inauguración Oficinas',
    subtitle: 'Evento de Apertura Corporativa',
    image: event7,
    bannerImage: event7,
    date: '12 de Septiembre, 2024',
    location: 'Edificio Corporativo Nuevo',
    attendees: '250 invitados',
    description: 'Coffee break para evento de apertura de nuevas instalaciones corporativas.',
    fullDescription: `Celebramos la inauguración de las nuevas oficinas corporativas con un servicio de 
    café que reflejaba la modernidad y profesionalismo de las instalaciones. El evento incluía un 
    recorrido por las oficinas con paradas estratégicas para coffee breaks.
    
    Diseñamos múltiples estaciones temáticas en diferentes pisos, cada una con su propia identidad 
    pero manteniendo la cohesión del servicio. Los invitados pudieron disfrutar de café fresco 
    mientras exploraban las nuevas instalaciones.`,
    services: [
      'Múltiples estaciones',
      'Coffee breaks temáticos',
      'Servicio móvil',
      'Presentación moderna',
      'Variedad premium',
      'Atención profesional'
    ],
    gallery: [event7, event7, event7],
    testimonial: {
      text: 'El servicio de café añadió un toque especial a nuestra inauguración. Muy profesional.',
      author: 'Diego Fernández',
      position: 'Director de Operaciones'
    }
  },
  {
    id: 8,
    title: 'Gala Benéfica',
    subtitle: 'Cena de Recaudación de Fondos',
    image: event8,
    bannerImage: event8,
    date: '20 de Octubre, 2024',
    location: 'Salón de Gala',
    attendees: '200 invitados',
    description: 'Servicio premium de café para cena benéfica de recaudación de fondos.',
    fullDescription: `Participamos en una elegante gala benéfica donde el café fue el broche de oro 
    perfecto para una noche memorable. Después de la cena formal, montamos un servicio de café 
    gourmet con opciones de postres complementarios.
    
    El servicio se integró perfectamente con la atmósfera elegante de la gala, utilizando vajilla 
    fina y presentaciones sofisticadas. Parte de nuestros servicios fueron donados para apoyar la 
    causa benéfica del evento.`,
    services: [
      'Servicio de gala',
      'Café gourmet',
      'Postres complementarios',
      'Vajilla fina',
      'Presentación elegante',
      'Apoyo a causa benéfica'
    ],
    gallery: [event8, event8, event8],
    testimonial: {
      text: 'Un servicio impecable que complementó perfectamente nuestra gala. Muchas gracias por su apoyo.',
      author: 'Sofía Ramírez',
      position: 'Coordinadora de la Gala'
    }
  }
];

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsDetailData.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" style={{ padding: '5rem 0' }}>
              <h2>Evento no encontrado</h2>
              <Link to="/eventos" className="btn-events">
                Volver a Eventos
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      {/* Banner con imagen del evento */}
      <div 
        className="event-detail-banner"
        style={{ backgroundImage: `url(${event.bannerImage})` }}
      >
        <div className="event-detail-banner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Link to="/eventos" className="event-detail-back-link">
                  <i className="fas fa-arrow-left"></i> Volver a Eventos
                </Link>
                <h1 className="event-detail-banner-title">{event.title}</h1>
                <p className="event-detail-banner-subtitle">{event.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información principal */}
      <section className="event-detail-info-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-8">
              <div className="event-detail-info-box">
                <h2 className="event-detail-section-title">Sobre el Evento</h2>
                <p className="event-detail-description">
                  {event.fullDescription.split('\n\n').map((paragraph, index) => (
                    <span key={index}>
                      {paragraph}
                      <br /><br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
            
            <div className="col-12 col-lg-4">
              <div className="event-detail-sidebar">
                <div className="event-detail-card">
                  <h3 className="event-detail-card-title">Detalles del Evento</h3>
                  <div className="event-detail-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <strong>Fecha</strong>
                      <p>{event.date}</p>
                    </div>
                  </div>
                  <div className="event-detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Ubicación</strong>
                      <p>{event.location}</p>
                    </div>
                  </div>
                  <div className="event-detail-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <strong>Asistentes</strong>
                      <p>{event.attendees}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios ofrecidos */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="event-detail-section-title">Servicios Ofrecidos</h2>
              <div className="event-detail-services-grid">
                {event.services.map((service, index) => (
                  <div key={index} className="event-detail-service-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Galería */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="event-detail-section-title">Galería del Evento</h2>
              <div className="event-detail-gallery">
                {event.gallery.map((img, index) => (
                  <div key={index} className="event-detail-gallery-item">
                    <img src={img} alt={`${event.title} - Imagen ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonio */}
          {event.testimonial && (
            <div className="row mb-5">
              <div className="col-12">
                <div className="event-detail-testimonial">
                  <i className="fas fa-quote-left event-detail-quote-icon"></i>
                  <p className="event-detail-testimonial-text">
                    {event.testimonial.text}
                  </p>
                  <div className="event-detail-testimonial-author">
                    <strong>{event.testimonial.author}</strong>
                    <span>{event.testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to action */}
          <div className="row">
            <div className="col-12 text-center">
              <div className="event-detail-cta">
                <h3>¿Te gustaría que participemos en tu evento?</h3>
                <p>Contáctanos para obtener un presupuesto personalizado</p>
                <Link to="/contacto" className="btn-events-large">
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;

