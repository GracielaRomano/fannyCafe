import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventService } from '../services/eventService';
import { getImagePath, handleImageError } from '../utils/imageUtils';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await eventService.getAllEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="events-page">
        <div className="events-banner"></div>
        <section className="events-grid-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="events-section-title">Cargando eventos...</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="events-page">
        <div className="events-banner"></div>
        <section className="events-grid-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="events-section-title">Error</h2>
                <p>{error}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
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
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-card-image-wrapper">
                  <img 
                    src={getImagePath(event.image)} 
                    alt={event.title} 
                    className="event-card-image"
                    onError={(e) => handleImageError(e)}
                  />
                  <div className="event-card-overlay">
                    <span className="event-card-date">{event.event_date}</span>
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