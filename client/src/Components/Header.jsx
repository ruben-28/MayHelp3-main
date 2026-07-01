import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToContact = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to='/'>
        <img src="logo4.svg" alt="MayHelp Logo" />
      </Link>

      <button className="togglebtn" onClick={toggleMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <div className={`links ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to='/' onClick={closeMenu}>Accueil</Link>
        <Link to='/services' onClick={closeMenu}>Nos Services</Link>
        <Link to='/prices' onClick={closeMenu}>Nos Tarifs</Link>
        <button className="cta-button" onClick={scrollToContact}>
          Nous Contacter
        </button>
      </div>
    </div>
  );
};

export default Header;
