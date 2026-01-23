import React from 'react';
import './PagePlaceholder.css';

const Safnadarstarf: React.FC = () => {
  return (
    <main className="page-placeholder">
      <section className="page-hero">
        <h2>Safnaðarstarf</h2>
        <p>Starfsemi fyrir fullorðna</p>
      </section>
      
      <section className="page-content">
        <div className="placeholder-box">
          <h3>Safnaðarstarf</h3>
          <p>Upplýsingar um starfsemi fyrir fullorðna í söfnuðunum.</p>
        </div>
      </section>
    </main>
  );
};

export default Safnadarstarf;
