import React, { useState, useEffect, useRef } from 'react';
import './News.css';
import photo1 from '/src/assets/images/photo-1612771377054-cbab1fbb9ad3.jpeg';
import photo3 from '/src/assets/images/photo-1739991892130-722414cc42b8.jpeg';
import photo4 from '/src/assets/images/photo-1664035762719-4d6fc28673a3.jpeg';
import photo2 from '/src/assets/images/photo-1678341611574-f1319b9f0177.jpeg';

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
    <>
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
   <section data-bs-version="5.1" class="features03 cid-uXQ7jkdhDS" id="news-1-uXQ7jkdhDS">
      <div class="container-fluid">
        <div class="row justify-content-center mb-5">
          <div class="col-12 content-head">
            <div class="mbr-section-head">
              <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Novedades</strong>
              </h4>
            </div>
          </div>
        </div>
     <div class="row">
       <div class="item features-image  col-md-6 col-lg-3 active">
         <div class="item-wrapper">
           <div class="item-img mb-3">
             <img src={photo1} alt="photo1" title=""/>
           </div>
           <div class="item-content align-left">
             <h5 class="item-title mbr-fonts-style mt-0 mb-2 display-5">
               <strong>Nuevo Sabor Intenso</strong>
             </h5>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">2025-09-20</p>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">Prueba nuestra nueva cápsula 'Fuerza Matutina'. Una explosión de energía.</p>
             <div class="mbr-section-btn item-footer">
               <a href="https://1867610.mobirisesite.com/" class="btn item-btn btn-primary display-7">Ver</a>
             </div>
           </div>
         </div>
       </div>
       <div class="item features-image  col-md-6 col-lg-3">
         <div class="item-wrapper">
           <div class="item-img mb-3">
             <img src={photo2} alt="photo2" title="" data-slide-to="1" data-bs-slide-to="1"/>
           </div>
           <div class="item-content align-left">
             <h5 class="item-title mbr-fonts-style mb-2 mt-0 display-5">
               <strong>Máquinas en Demanda</strong>
             </h5>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">2025-09-18</p>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">Alquila nuestras máquinas de última generación para tu oficina. Mantenimiento incluido.</p>
             <div class="mbr-section-btn item-footer">
               <a href="https://1867610.mobirisesite.com/" class="btn item-btn btn-primary display-7">Ver</a>
             </div>
           </div>
         </div>
       </div>
       <div class="item features-image  col-md-6 col-lg-3">
         <div class="item-wrapper">
           <div class="item-img mb-3">
             <img src={photo3} alt="photo3" title="" data-slide-to="2" data-bs-slide-to="2"/>
           </div>
           <div class="item-content align-left">
             <h5 class="item-title mbr-fonts-style mb-2 mt-0 display-5">
               <strong>Eventos con Estilo</strong>
             </h5>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">2025-09-15</p>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">Sorprende a tus invitados con un servicio de café inolvidable. Alquiler de máquinas y vajilla.</p>
             <div class="mbr-section-btn item-footer">
               <a href="https://1867610.mobirisesite.com/" class="btn item-btn btn-primary display-7">Ver</a>
             </div>
           </div>
         </div>
       </div>
       <div class="item features-image  col-md-6 col-lg-3">
         <div class="item-wrapper">
           <div class="item-img mb-3">
             <img src={photo4} alt="photo4" title="" data-slide-to="2" data-bs-slide-to="2"/>
           </div>
           <div class="item-content align-left">
             <h5 class="item-title mbr-fonts-style mb-2 mt-0 display-5">
               <strong>Soporte Constante</strong>
             </h5>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">2025-09-10</p>
             <p class="mbr-text mbr-fonts-style mb-3 display-7">Nuestro equipo técnico asegura el óptimo funcionamiento de tu máquina de café.</p>
             <div class="mbr-section-btn item-footer">
               <a href="https://1867610.mobirisesite.com/" class="btn item-btn btn-primary display-7">Ver</a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 </>
  );
 
};

export default News;