import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <section data-bs-version="5.1" className="menu menu2 cid-uXQ7jkaKzP" once="menu" id="menu-5-uXQ7jkaKzP">
      <nav className={`navbar navbar-dropdown navbar-fixed-top navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-navbar">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <Link to="/" onClick={closeMenu}>
                <img src="/src/assets/images/icon/aroma-a-cafe-logo2.1.png" alt="CafeCorp Logo"  />
              </Link>
            </span>
            {/* <span className="navbar-caption-wrap">
              <Link to="/" className="navbar-caption text-brown display-4"></Link>
            </span> */}
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
                <Link to="/" className="nav-link link text-black display-4" onClick={closeMenu}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/eventos" className="nav-link link text-black display-4" onClick={closeMenu}>Eventos</Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link link text-black display-4" onClick={closeMenu}>Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link link text-black display-4" onClick={closeMenu}>Contacto</Link>
              </li>
            </ul>
            
            <div className="navbar-buttons mbr-section-btn">
              <Link to="/contacto" className="btn btn-primary display-4" onClick={closeMenu}>Presupuesto</Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
