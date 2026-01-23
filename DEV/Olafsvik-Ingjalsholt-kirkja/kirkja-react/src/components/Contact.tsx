import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact-container">
    <section className="contact-hero">
    <h2>Hafðu samband</h2>
    <p>Við viljum heyra frá þér</p>
    </section>
    
    <div className="contact-content">
    <section className="contact-details">
    <h3>Upplýsingar</h3>
    <div className="contact-info">
    <div className="contact-item">
    <h4>Olafskirkja</h4>
    <p>Heimilisfang: 123 Main Street, Ólafsvík</p>
    <p>Sími: (354) 772-1968</p>
    <p>Netfang: aegirorn@kirkjan.is</p>
    </div>
    
    <div className="contact-item">
    <h4>Ingjalsholskirkja</h4>
    <p>Heimilisfang: Ingjalshöll</p>
    <p>Sími: (354) 772-1968</p>
    <p>Netfang: aegirorn@kirkjan.is</p>
    </div>
    </div>
    </section>
    
    <section className="contact-form-section">
    <h3>Senda skilaboð</h3>
    <form className="contact-form" action="mailto:aegirorn@kirkjan.is" method="post" encType="text/plain">
    <div className="form-group">
    <label htmlFor="name">Nafn *</label>
    <input type="text" id="name" name="name" required />
    </div>
    
    <div className="form-group">
    <label htmlFor="email">Netfang *</label>
    <input type="email" id="email" name="email" required />
    </div>
    
    <div className="form-group">
    <label htmlFor="phone">Sími</label>
    <input type="tel" id="phone" name="phone" />
    </div>
    
    <div className="form-group">
    <label htmlFor="subject">Efni *</label>
    <input type="text" id="subject" name="subject" required />
    </div>
    
    <div className="form-group">
    <label htmlFor="message">Skilaboð *</label>
    <textarea id="message" name="message" rows={6} required></textarea>
    </div>
    
    <button type="submit" className="submit-btn">Senda skilaboð</button>
    </form>
    </section>
    </div>
    </main>
  );
};

export default Contact;
