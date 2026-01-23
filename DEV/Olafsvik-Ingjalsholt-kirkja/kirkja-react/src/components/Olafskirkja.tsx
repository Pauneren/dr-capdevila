import React from 'react';
import './ChurchDetail.css';

const Olafskirkja: React.FC = () => {
  return (
    <main className="church-detail">
      <section className="church-hero">
        <img src="/images/olafsvikurkirkja.jpg" alt="Olafskirkja" className="church-hero-image" />
        <div className="church-hero-content">
          <h2>Olafskirkja</h2>
          <p>Ólafsvík</p>
        </div>
      </section>

      <section className="info">
        <h2>Staðsetning og Helgihald</h2>
        <p>Heimilisfang: 123 Main Street</p>
        <p>Sunnudagsmessa: kl. 10:00</p>
        <p>Biblíustund á miðvikudögum: kl. 19:00</p>
      </section>

      <section className="pastor">
        <h2>Prestur</h2>
        <p>Ægir Örn Sveinsson</p>
        <p>Netfang: aegirorn@kirkjan.is</p>
        <p>Sími: (354) 772-1968</p>
      </section>

      <section className="ministries">
        <h2>Starfsemi</h2>
        <ul>
          <li>Barnastarf</li>
          <li>Unglingastarf</li>
          <li>Útvarpsstörf</li>
          <li>Beiðnateymi</li>
          <li>Tónlistarstarf</li>
        </ul>
      </section>

      <section className="history">
        <h2>Söguágrip</h2>
        <p>Olafskirkja hefur þjónað samfélaginu í mörg ár. Við erum lifandi trúarsamfélag sem leggur áherslu á guðsþjónustu, samfélagsskap og þjónustu.</p>
        <p>Markmið okkar er að deila Guðs ást í gegnum guðsþjónustu, þjónustu og samfélagsvinnu. Við trúum á að skapa velkomin umhverfi þar sem allir geta vaxið í trúarferli sínum.</p>
      </section>

      <section className="board-members">
        <h2>Sóknarnefnd</h2>
        <div className="board-grid">
          <div className="board-member">
            <div className="member-info">
              <h3>Guðmundur Jónsson</h3>
              <p className="position">Formaður</p>
              <p className="email">gudmundur.j@kirkjan.is</p>
            </div>
          </div>

          <div className="board-member">
            <div className="member-info">
              <h3>Sigríður Haraldsdóttir</h3>
              <p className="position">Varaformaður</p>
              <p className="email">sigridur.h@kirkjan.is</p>
            </div>
          </div>

          <div className="board-member">
            <div className="member-info">
              <h3>Þórður Magnússon</h3>
              <p className="position">Gjaldkeri</p>
              <p className="email">thordur.m@kirkjan.is</p>
            </div>
          </div>

          <div className="board-member">
            <div className="member-info">
              <h3>Kristín Pétursdóttir</h3>
              <p className="position">Ritari</p>
              <p className="email">kristin.p@kirkjan.is</p>
            </div>
          </div>

          <div className="board-member">
            <div className="member-info">
              <h3>Jóhannes Stefánsson</h3>
              <p className="position">Nefndarmaður</p>
              <p className="email">johannes.s@kirkjan.is</p>
            </div>
          </div>

          <div className="board-member">
            <div className="member-info">
              <h3>Anna María Guðmundsdóttir</h3>
              <p className="position">Nefndarmaður</p>
              <p className="email">anna.maria@kirkjan.is</p>
            </div>
          </div>

          <div className="board-member">
            <div className="member-info">
              <h3>Einar Jóhannesson</h3>
              <p className="position">Nefndarmaður</p>
              <p className="email">einar.j@kirkjan.is</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Olafskirkja;
