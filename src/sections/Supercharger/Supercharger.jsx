import React from 'react';
import './Supercharger.css';
import mapImage from './map.avif';

const Supercharger = () => {
  return (
    <section className="supercharger" id="supercharger">
      <div className="supercharger-container">
        <img src={mapImage} alt="Tesla Supercharger Map" className="supercharger-map" />
        <div className="supercharger-overlay">
          <h2>Supercharger Network</h2>
          <p>
            Tesla’s Supercharger network is the fastest charging network in the world — 
            over 50,000 chargers across the globe keep you moving wherever you go.
          </p>
          <a
            href="https://www.tesla.com/es_es/findus?bounds=59.23217672335343%2C63.75078%2C14.541050757369522%2C-71.24922"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Explore Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Supercharger;
