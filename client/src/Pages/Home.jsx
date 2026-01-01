import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Testimonies from "../Components/Testimonies";
import Footer from "../Components/Footer";
import SpecialOffers from "../Components/Offers";

const Home = () => {
  const scrollToTestimonials = () => {
    document.getElementById("testimonies-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home">
        <Header />
        <section className="hero section-shell" id="Home">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-eyebrow">Conciergerie administrative premium</div>
              <h1 className="hero-title">Ne bougez plus, on s'occupe de tout.</h1>
              <p className="hero-subtitle">
                Simplifiez votre quotidien avec un partenaire de confiance. MayHelp coordonne vos démarches
                en Israël et en France pour que vous puissiez avancer sereinement.
              </p>
              <div className="hero-actions">
                <Link to="/services" className="primary-btn">Découvrir nos services</Link>
                <button className="ghost-btn" onClick={scrollToContact}>Nous contacter</button>
              </div>
              <div className="hero-badges">
                <div className="badge-card">
                  <strong>+200 dossiers</strong>
                  Gestion complète et personnalisée pour chaque situation.
                </div>
                <div className="badge-card">
                  <strong>Réactivité 7/7</strong>
                  Nous restons disponibles pour vos urgences et vos projets.
                </div>
                <div className="badge-card">
                  <strong>Accompagnement bilingue</strong>
                  Français / Hébreu pour fluidifier vos échanges officiels.
                </div>
              </div>
              <button className="scroll-indicator" onClick={scrollToTestimonials}>
                Faire défiler
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40C66.047 87.609 65.023 88 64 88z"
                  />
                </svg>
              </button>
            </div>

            <div className="hero-panel glass-card">
              <div className="hero-panel-content">
                <div className="panel-stat">
                  <span>93%</span>
                  <p>Satisfaction client pour les missions livrées.</p>
                </div>
                <div className="panel-stat">
                  <span>48h</span>
                  <p>Temps moyen de prise en charge de votre demande.</p>
                </div>
                <ul className="panel-list">
                  <li>Prise de rendez-vous officiels et médicaux.</li>
                  <li>Gestion de documents : Alyah, visas, dossiers bancaires.</li>
                  <li>Suivi logistique : énergie, assurances, abonnements.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="about-section">
        <div className="section-shell">
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <p className="section-subtitle">Un accompagnement humain, expérimenté et engagé.</p>
          <div className="about-grid">
            <div className="about-text">
              <p>Je m’appelle Yehouda Mayer et j’ai fait mon Alyah il y a six ans. Aujourd’hui basé à Jérusalem, j’ai façonné MayHelp pour aider chacun à naviguer les démarches israéliennes et françaises.</p>
              <p>De l’armée aux administrations locales, j’ai appris à dialoguer avec les bons interlocuteurs et à faire avancer les dossiers. Cette expertise, je la mets à votre service pour que vous profitiez pleinement de votre temps.</p>
              <p>Chaque mission est gérée avec rigueur, confidentialité et pédagogie. Vous êtes informé à chaque étape, et nous avançons ensemble jusqu’à la résolution complète.</p>
            </div>
            <div className="about-highlight">
              <div className="highlight-card">Service personnalisé et transparent.</div>
              <div className="highlight-card">Suivi bilingue pour toutes vos démarches.</div>
              <div className="highlight-card">Réseau local éprouvé pour accélérer vos demandes.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section" id="testimonies-section">
        <div className="section-shell">
          <h2 className="section-title">Ils témoignent</h2>
          <p className="section-subtitle">Des clients accompagnés en Alyah, études, services publics et plus encore.</p>
          <Testimonies />
        </div>
      </section>

      <div className="sp-home">
        <SpecialOffers />
      </div>

      <Footer />
    </>
  );
};

export default Home;
