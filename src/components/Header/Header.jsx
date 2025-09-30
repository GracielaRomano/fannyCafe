import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="header18 cid-header mbr-fullscreen">
      <div className="mbr-background-video-preview" ></div>
      
      <div className="mbr-video-container">
        <div style={{ background: 'rgb(0, 0, 0)', inset: '0px' }}>
          <div className="mbr-video-foreground">
            <iframe
              className="mbr-background-video"
              src="https://www.youtube.com/embed/Rmu4mu2V-GQ?autoplay=1&loop=1&playlist=Rmu4mu2V-GQ&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                transform: 'scale(1.2)'
              }}
            ></iframe>
          </div>
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
              <a className="btn btn-white-outline display-7" href="/cotizar">
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