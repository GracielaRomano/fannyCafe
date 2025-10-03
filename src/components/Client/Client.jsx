import React, { useState, useEffect } from 'react'
import './Client.css'

const images = [
    '/src/assets/images/sofitel.jpg',
    '/src/assets/images/tecnopolis.jpg',
    '/src/assets/images/flow.jpg',
    '/src/assets/images/expo.jpg',
    '/src/assets/images/izzi.jpg',
    '/src/assets/images/edificio.jpg',
    '/src/assets/images/duble.jpg',
    '/src/assets/images/fitness.jpg',
    '/src/assets/images/sutpa.jpg',
]

const Client = () => {
  const [offset, setOffset] = useState(0);
  const totalImages = images.length;
  const itemWidth = 200; // Ancho de cada imagen + padding

  // Triplicamos las imágenes para el efecto infinito
  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const animate = () => {
      setOffset(prevOffset => {
        const newOffset = prevOffset - 1;
        const totalWidth = totalImages * itemWidth;
        
        // Cuando se desplaza el ancho completo de un conjunto, reinicia
        if (Math.abs(newOffset) >= totalWidth) {
          return 0;
        }
        
        return newOffset;
      });
    };

    const intervalId = setInterval(animate, 30);
    return () => clearInterval(intervalId);
  }, [totalImages]);

  return (
    <div>
        <section data-bs-version="5.1" className="clients cid-uXQ7jkd45t" id="partners-1-uXQ7jkd45t">
            <div className="container-fluid">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 content-head">
                        <div className="mbr-section-head">
                            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                                <strong>Nuestros Socios Aliados</strong>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="clients-container">
                    <div 
                        className="clients-wrapper"
                        style={{
                            transform: `translateX(${offset}px)`,
                            willChange: 'transform'
                        }}
                    >
                        {extendedImages.map((image, index) => (
                            <div key={index} className="client-item">
                                <div className="item-wrapper">
                                    <div className="item-img">
                                        <img 
                                            className='img-client' 
                                            src={image} 
                                            alt={`Socio Aliado ${(index % totalImages) + 1}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Client

