import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer3 cid-footer">
      <div className="container">
        <div className="row">
          <div className="row-links">
            <ul className="header-menu">
              <li className="header-menu-item">
                <Link to="/" className="text-white">Inicio</Link>
              </li>
              <li className="header-menu-item">
                <Link to="/servicios" className="text-white">Servicios</Link>
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
              <a href="" target="_blank" rel="noopener noreferrer" className="social-item">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="social-item">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="social-item">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="social-item">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-12 mt-4">
            <p className="copyright">
              © {new Date().getFullYear()} Fanny's Café. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;