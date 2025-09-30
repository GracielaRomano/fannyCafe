import React from 'react'
import './News.css'
import { useState, useEffect } from 'react';

const photos = [
    '/src/assets/images/photo-1753939440029-e075078bf380.jpeg',
    '/src/assets/images/photo-1656259699073-8441021e73e1.jpeg',
    '/src/assets/images/photo-1639117228217-7d1f1a29125f.jpeg',
    '/src/assets/images/photo-1696020587556-30c08765bcec.jpeg',
    '/src/assets/images/photo-1753939440029-e075078bf380.jpeg',
    '/src/assets/images/photo-1656259699073-8441021e73e1.jpeg',
    '/src/assets/images/photo-1639117228217-7d1f1a29125f.jpeg',
    '/src/assets/images/photo-1696020587556-30c08765bcec.jpeg',
]
const News = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = photos.length;
  const extendedImages = [...photos, ...photos, ...photos];

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

  const getTransformValue = () => {
    const baseTransform = -currentSlide * 100;
    return `translateX(${baseTransform}%)`;
  };

  return (
    <section data-bs-version="5.1" className="gallery07 cid-uXQ7jkcR5W" id="gallery-14-uXQ7jkcR5W">
        <div className="container-fluid gallery-wrapper">
            <div className="row justify-content-center">
                <div className="col-12 content-head">
                    
                </div>
            </div>
        </div>
        <div className="grid-container">
            <div className="grid-container-3 moving-left" style={{transform: getTransformValue(),
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'}}>
                    {extendedImages.map((photo, index) => (
                    <div 
                    key={index} 
                    className={`gallery-slide ${index === currentSlide + totalSlides ? 'active' : ''}`}
                    >
                    <div className="grid-item">
                     <img src={photo} alt={`Galería ${(index % totalSlides) + 1}`}/>
                 </div>
                 </div>
                 ))}
            </div>
        </div>
</section>
  )
}

export default News;