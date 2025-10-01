import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section data-bs-version="5.1" className="menu menu2 cid-uXQ7jkaKzP" once="menu" id="menu-5-uXQ7jkaKzP">
      <nav className={`navbar navbar-dropdown navbar-fixed-top navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-navbar">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <Link to="/">
                <img src="/src/assets/images/cafetera.png" alt="CafeCorp Logo" style={{ height: '4.3rem' }} />
              </Link>
            </span>
            <span className="navbar-caption-wrap">
              <Link to="/" className="navbar-caption text-black display-4">Fanny's Cafe</Link>
            </span>
          </div>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav nav-dropdown">
              <li className="nav-item">
                <Link to="/" className="nav-link link text-black display-4">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link link text-black display-4">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link link text-black display-4">Contacto</Link>
              </li>
            </ul>
            
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/presupuesto" className="btn btn-primary display-4">Presupuesto</Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;