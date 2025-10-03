import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="header18 cid-header mbr-fullscreen">
      <div className="mbr-background-video-preview"></div>
      
      <div className="mbr-video-container">
        <div className="mbr-video-foreground">
          <video
            className="mbr-background-video"
            autoPlay
            loop
            muted
            playsInline
            style={{
              marginTop: '0px',
              maxWidth: 'initial',
              transitionProperty: 'opacity',
              transitionDuration: '1000ms',
              pointerEvents: 'none',
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.2)'
            }}
          >
            <source src="/src/assets/videos/Portada.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="mbr-overlay" style={{ opacity: 0.5, backgroundColor: 'rgb(0, 0, 0)' }}></div>
      
      <div className="container-fluid">
        <div className="row">
          <div className="content-wrap col-12 col-md-12">
            <h1 className="mbr-section-title mbr-fonts-style mbr-beige mb-4 display-1">
              <strong>Café Excepcional</strong>
            </h1>
            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">
              Soluciones de café premium para tu empresa y eventos.
            </p>
            <div className="mbr-section-btn">
              <a className="btn btn-white-outline display-7" href="/contacto">
                Cotizar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;