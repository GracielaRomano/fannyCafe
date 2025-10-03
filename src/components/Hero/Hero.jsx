import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero mbr-fullscreen">
      <div className="video-wrapper">
        <div className="mbr-overlay"></div>
        <video
          className="mbr-background-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/portada.png"
        >
          <source
            src="/src/assets/videos/Portada.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      
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
              <Link to="/cotizar" className="btn btn-white-outline display-7">
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;