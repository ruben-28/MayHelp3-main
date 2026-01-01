import React from "react";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        className="float-btn"
        href="https://wa.me/972587396562"
        target="_blank"
        rel="noreferrer"
        aria-label="Discuter sur WhatsApp"
      >
        <svg className="float-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#25D366"
            d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.7 2 6.7L4 29l7.6-1.9c1.7.9 3.6 1.3 5.4 1.3 6.6 0 12-5.4 12-12S22.6 3 16 3z"
          />
          <path
            fill="#fff"
            d="M22.3 19.8c-.2-.3-1.3-.6-1.8-.8-.4-.2-.7-.3-1 .1-.3.3-.6.8-.8 1-.1.2-.3.2-.6.1-1.7-.7-3.1-2-4-3.6-.1-.2-.1-.4.1-.6.2-.2.3-.3.5-.6.2-.2.2-.4.1-.6-.1-.3-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.3 2.3 3.5 5.6 4.8.8.3 1.5.5 2 .6.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"
          />
        </svg>
        WhatsApp
      </a>
      <a
        className="float-btn"
        href="https://calendly.com/your-calendly-link"
        target="_blank"
        rel="noreferrer"
        aria-label="Réserver un créneau"
      >
        <svg className="float-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f5c451"
            d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V9h14v9zm0-11H5V6h14v1z"
          />
        </svg>
        Prendre RDV
      </a>
    </div>
  );
};

export default FloatingButtons;
