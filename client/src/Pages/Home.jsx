import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Testimonies from "../Components/Testimonies";
import Footer from "../Components/Footer";
import SpecialOffers from "../Components/Offers";

const Home = () => {

  const scrollToTestimonials = () => {
    document.getElementById("testimonies-section").scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToContact = () => {
    document.getElementById("footer").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="home" id="Home">
        <Header />
        <div className="central-text">
          <p className="big-text">Ne bougez plus, <br /> <span>On s'occupe de tout.</span></p>
          <p className="small-text">Bienvenue chez MayHelp, votre accompagnateur au quotidien.</p>
          <div className="buttons">
            <Link to='/services'><button className="btn-outline">En savoir plus</button></Link>
            <button className="btn-primary" onClick={scrollToContact}>Nous contacter</button>
          </div>

          <button className="scroll-down" onClick={scrollToTestimonials}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="scnd-page" id="testimonies-section">
        <div className="about">
          <h2 className="about-title">Qui Sommes-Nous ?</h2>
          <div className="about-text">
            <p>Je m’appelle Yehouda Mayer, j’ai fait mon Alyah il y a six ans. Aujourd’hui, je vis à Jérusalem, où je me suis progressivement intégré à la société israélienne.</p>
            <p>Dès mon arrivée en Israël, j’ai plongé au cœur de notre magnifique pays en servant dans l’armée, sans connaître un mot d’hébreu. Petit à petit, j’ai trouvé ma place et j’ai compris qu’il fallait persévérer pour avancer et réussir.</p>
            <p>J’ai aussi réalisé à quel point le système administratif en Israël est différent de celui en France, et qu’il demande beaucoup de temps, de patience et d’énergie. Avec le temps, j’ai vu que je n’étais pas le seul à rencontrer ces difficultés, et je me suis promis qu’un jour, je ferais tout pour aider dans ce domaine. C’est ainsi qu’est née l’idée de MayHelp, un projet mûri au fil des années, et que je mets aujourd’hui à votre disposition pour vous permettre de simplifier votre quotidien.</p>
            <p>MayHelp est bien plus qu’un simple service de conciergerie. C’est le fruit de ma passion pour l’organisation et de mon désir sincère de rendre la vie plus facile pour ceux qui, comme moi, peuvent se sentir dépassés par les démarches administratives, surtout dans un pays étranger.</p>
            <p>Je sais à quel point ces tâches peuvent être longues et stressantes, c’est pourquoi j’ai créé un service sur mesure, conçu pour alléger votre quotidien en prenant en charge vos tâches administratives et logistiques.</p>
            <p>Basé en Israël, MayHelp est le résultat de mon expérience et de mon ancrage profond dans la culture locale. Aujourd’hui, je parle hébreu couramment, et je comprends les spécificités des systèmes administratifs israéliens et français. J’utilise mon expertise pour gérer efficacement vos besoins, que ce soit pour l’obtention de documents officiels, la gestion de votre immigration, la réservation de services, ou tout autre besoin quotidien.</p>
            <p>Ma mission est simple : vous permettre de vous concentrer sur ce qui compte vraiment, en vous libérant des tracas administratifs.</p>
            <p>Chez MayHelp, je crois que chaque minute est précieuse. C’est pour cela que je m’engage à vous offrir un service personnalisé, réactif et fiable, qui répond à vos exigences uniques.</p>
            <p>Faites-moi confiance pour vous accompagner dans toutes vos démarches, et découvrez la tranquillité d’esprit que vous méritez.</p>
          </div>
        </div>

        <div className="temoignages">
          <h2 className="about-title" style={{ marginBottom: '40px' }}>Ils nous font confiance</h2>
          <Testimonies />
        </div>
      </div>

      <div className="sp-home">
        <SpecialOffers />
      </div>
      <Footer />
    </>
  );
};

export default Home;
