import React from 'react';
import './PagePlaceholder.css';

const Helgihald: React.FC = () => {
  return (
    <main className="page-placeholder">
      <section className="page-hero">
        <h2>Helgihald</h2>
        <p>Guðsþjónusta og messutímar</p>
      </section>
      
      <section className="page-content">
        <div className="placeholder-box">
          <h3>Helgihald</h3>
          <p>Upplýsingar um messutíma, guðsþjónustu og sérstök helgihald í Olafskirkju og Ingjalsholskirkju.</p>
        </div>
      </section>
    </main>
  );
};

export default Helgihald;
