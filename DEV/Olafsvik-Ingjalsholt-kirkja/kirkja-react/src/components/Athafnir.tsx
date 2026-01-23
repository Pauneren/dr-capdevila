import React from 'react';
import './PagePlaceholder.css';

const Athafnir: React.FC = () => {
  return (
    <main className="page-placeholder">
      <section className="page-hero">
        <h2>Athafnir</h2>
        <p>Sérstök viðburði og athafnir</p>
      </section>
      
      <section className="page-content">
        <div className="placeholder-box">
          <h3>Athafnir</h3>
          <p>Upplýsingar um skírn, giftingar, jarðarför og aðrar athafnir í kirkjunum.</p>
        </div>
      </section>
    </main>
  );
};

export default Athafnir;
