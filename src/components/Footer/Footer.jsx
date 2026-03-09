import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer3 cid-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 ">
            <img src="/src/assets/images/icon/aroma-a-cafe-logo-blanco.png" alt="CafeCorp Logo" className="footer-logo" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="row-links">
              <ul className="header-menu">
                <li className="header-menu-item">
                  <Link to="/" className="text-white">Inicio</Link>
                </li>
                <li className="header-menu-item">
                  <Link to="/eventos" className="text-white">Eventos</Link>
                </li>
                <li className="header-menu-item">
                  <Link to="/nosotros" className="text-white">Nosotros</Link>
                </li>
                <li className="header-menu-item">
                  <Link to="/contacto" className="text-white">Contacto</Link>
                </li>
              </ul>
            </div>

            <div className="social-section">
              <h3 className="social-title">
                <strong>Síguenos</strong>
              </h3>
              <div className="social-row">
              <a href="https://www.instagram.com/aromaacafe_catering/" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.tiktok.com/search?q=aroma.a.caf0&t=1772901915908" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-tiktok"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/aroma-a-cafe/" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-12 mt-4">
              <p className="copyright">
                © {new Date().getFullYear()} Aroma a Café. Todos los derechos reservados.
              </p>
            </div>

            {/* Botón flotante de WhatsApp */}
            <a
              href="https://wa.me/5491158659887"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-float"
              aria-label="Contactar por WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 "></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;