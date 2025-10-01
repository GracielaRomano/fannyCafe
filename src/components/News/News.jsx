import React, { useState, useEffect, useRef } from 'react';
import './News.css';

const photos = [
  '/src/assets/images/photo-1753939440029-e075078bf380.jpeg',
  '/src/assets/images/photo-1656259699073-8441021e73e1.jpeg',
  '/src/assets/images/photo-1639117228217-7d1f1a29125f.jpeg',
  '/src/assets/images/photo-1696020587556-30c08765bcec.jpeg'
];

const News = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const speed = 1; // Velocidad del movimiento en píxeles

  useEffect(() => {
    const animate = () => {
      setOffset(prevOffset => {
        const newOffset = prevOffset - speed;
        const itemWidth = 290 + 32; // ancho del item + padding
        const totalWidth = photos.length * itemWidth;
        
        // Cuando se desplaza el ancho de un conjunto completo, reinicia
        if (Math.abs(newOffset) >= totalWidth) {
          return 0;
        }
        
        return newOffset;
      });
    };

    const intervalId = setInterval(animate, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Triplicamos las imágenes para el efecto infinito
  const triplePhotos = [...photos, ...photos, ...photos];

  return (
    <section className="gallery07 cid-news">
      <div className="container-fluid gallery-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 content-head"></div>
        </div>
        <div className="grid-container">
          <div 
            ref={containerRef}
            className="grid-container-3"
            style={{
              transform: `translateX(${offset}px)`,
              willChange: 'transform'
            }}
          >
            {triplePhotos.map((photo, index) => (
              <div key={index} className="grid-item">
                <img src={photo} alt={`Galería ${(index % photos.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;