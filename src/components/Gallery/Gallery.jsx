import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
  '/src/assets/images/photo-1674985140588-d40f26c575df.jpeg',
  '/src/assets/images/photo-1640024280360-7e5a6e6126f0.jpeg',
  '/src/assets/images/photo-1676976197798-96cbec85e4ef.jpeg',
  '/src/assets/images/photo-1736601699885-d009d51e3a60.jpeg',
  '/src/assets/images/photo-1731509950762-2d06baeadb52.jpeg'
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = images.length;

  // Crear un array con las imágenes duplicadas para el efecto infinito
  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 0);
    }
    if (currentSlide === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides - 1);
      }, 0);
    }
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  const getTransformValue = () => {
    const baseTransform = -currentSlide * 100;
    return `translateX(${baseTransform}%)`;
  };

  return (
    <section className="gallery">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="gallery-container">
              <div 
                className="gallery-wrapper" 
                style={{ 
                  transform: getTransformValue(),
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {extendedImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`gallery-slide ${index === currentSlide + totalSlides ? 'active' : ''}`}
                  >
                    <div className="slide-content">
                      <div className="item-img">
                        <div className="item-wrapper">
                          <img src={image} alt={`Galería ${(index % totalSlides) + 1}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                className="gallery-button gallery-button--prev" 
                onClick={prevSlide}
                disabled={isTransitioning}
              >
                <span className="sr-only">Anterior</span>
                <i className="arrow-prev"></i>
              </button>
              <button 
                className="gallery-button gallery-button--next" 
                onClick={nextSlide}
                disabled={isTransitioning}
              >
                <span className="sr-only">Siguiente</span>
                <i className="arrow-next"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;