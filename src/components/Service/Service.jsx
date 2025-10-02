import React, { useState, useEffect } from 'react'
import './Service.css'

const Service = () => {
  const [offset, setOffset] = useState(0);
  const serviceText = "Máquinas Premium * Cápsulas Exclusivas * Mantenimiento Total * Vajilla Sofisticada * Atención Personalizada * Eventos Memorables *";

  useEffect(() => {
    const animate = () => {
      setOffset(prevOffset => {
        const newOffset = prevOffset - 1;
        // Resetear cuando se haya desplazado completamente
        if (Math.abs(newOffset) >= 100) {
          return 0;
        }
        return newOffset;
      });
    };

    const intervalId = setInterval(animate, 300);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <section 
            data-bs-version="5.1" 
            className="image02 cid-uXQ7jkeJfX mbr-fullscreen mbr-parallax-background" 
            id="image-13-uXQ7jkeJfX"
        >
            <div className="parallax-background"></div>
            <div className="container">
                <div className="row"></div>
            </div>
        </section>
        
        <section data-bs-version="5.1" className="gallery10 cid-uXQ7jkeJNa" id="features-61-uXQ7jkeJNa">
            <div className="container-fluid">
                <div className="loop-container">
                    <div 
                        className="scrolling-wrapper"
                        style={{
                            transform: `translateX(${offset}%)`,
                            willChange: 'transform'
                        }}
                    >
                        <div className="item display-1">
                            {serviceText}&nbsp;
                        </div>
                        <div className="item display-1">
                            {serviceText}&nbsp;
                        </div>
                        <div className="item display-1">
                            {serviceText}&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service