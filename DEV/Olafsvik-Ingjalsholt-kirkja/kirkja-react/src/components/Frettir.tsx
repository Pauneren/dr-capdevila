import React from 'react';
import './PagePlaceholder.css';

const Frettir: React.FC = () => {
  return (
    <main className="page-placeholder">
      <section className="page-hero">
        <h2>Fréttir</h2>
        <p>Nýjustu fréttir og tilkynningar</p>
      </section>
      
      <section className="page-content">
        <div className="placeholder-box">
          <h3>Fréttaefni</h3>
          <p>Hér verða fréttir og tilkynningar frá sóknunum Ólafsvíkur og Ingjalshóls.</p>
        </div>
      </section>
    </main>
  );
};

export default Frettir;
