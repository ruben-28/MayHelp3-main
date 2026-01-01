import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="brand" onClick={handleScrollToTop}>
          <img src="logo4.svg" alt="MayHelp" />
          <span>MayHelp</span>
        </Link>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleScrollToTop}>Accueil</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Nos Services</Link>
          <Link to="/prices" onClick={() => setIsMenuOpen(false)}>Nos tarifs</Link>
          <button className="ghost-btn" onClick={handleScrollToContact}>Contact</button>
          <a
            className="primary-btn"
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Prendre RDV
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="primary-btn"
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noreferrer"
          >
            Prendre RDV
          </a>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
