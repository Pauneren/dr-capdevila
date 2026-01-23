import React from 'react';
import './PagePlaceholder.css';

const Aeskulydsstarf: React.FC = () => {
  return (
    <main className="page-placeholder">
      <section className="page-hero">
        <h2>Æskulýðsstarf</h2>
        <p>Starfsemi fyrir börn og unglinga</p>
      </section>
      
      <section className="page-content">
        <div className="placeholder-box">
          <h3>Æskulýðsstarf</h3>
          <p>Upplýsingar um starfsemi fyrir börn og unglinga í söfnuðunum.</p>
        </div>
      </section>
    </main>
  );
};

export default Aeskulydsstarf;
