import React from 'react';
import './PagePlaceholder.css';

const Fermingar: React.FC = () => {
  return (
    <main className="page-placeholder">
      <section className="page-hero">
        <h2>Fermingar</h2>
        <p>Upplýsingar um fermingar</p>
      </section>
      
      <section className="page-content">
        <div className="placeholder-box">
          <h3>Fermingar</h3>
          <p>Upplýsingar um fermingarstímabil, nám og fermingarhald í söfnuðunum.</p>
        </div>
      </section>
    </main>
  );
};

export default Fermingar;
