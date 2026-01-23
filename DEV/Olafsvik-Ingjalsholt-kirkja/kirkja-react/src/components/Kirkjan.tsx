import React from 'react';
import './Kirkjan.css';

const Kirkjan: React.FC = () => {
  return (
    <main className="kirkjan-container">
      <section className="intro">
        <h2>Olafskirkja og Ingjalsholskirkja</h2>
        <p>Velkomin á heimasíðu sóknanna Ólafsvíkur og Ingjalshóls. Við erum tvær sóknir sem deilum trú, þjónustu og samfélag.</p>
      </section>

      <section className="staff-section">
        <h2>Starfsfólk</h2>
        <div className="staff-grid">
          <div className="staff-item">
            <h3>Ægir Örn Sveinsson</h3>
            <p className="position">Prestur - Olafskirkja - Ingjalsholskirkja</p>
            <p className="contact">Sími: (354) 772-1968</p>
            <p className="contact">Netfang: aegirorn@kirkjan.is</p>
          </div>
        </div>
      </section>

      <section className="board-section">
        <h2>Sóknarnefndir</h2>
        <p>Báðar sóknir hafa eigin sóknarnefnd sem fer með stjórnmál og efnahag.</p>
        <div className="board-grid">
          <div className="board-member">
            <h3>Guðmundur Jónsson</h3>
            <p className="position">Formaður</p>
            <p className="email">gudmundur.j@kirkjan.is</p>
          </div>
          
          <div className="board-member">
            <h3>Sigríður Haraldsdóttir</h3>
            <p className="position">Varaformaður</p>
            <p className="email">sigridur.h@kirkjan.is</p>
          </div>
          
          <div className="board-member">
            <h3>Þórður Magnússon</h3>
            <p className="position">Gjaldkeri</p>
            <p className="email">thordur.m@kirkjan.is</p>
          </div>
          
          <div className="board-member">
            <h3>Kristín Pétursdóttir</h3>
            <p className="position">Ritari</p>
            <p className="email">kristin.p@kirkjan.is</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kirkjan;
