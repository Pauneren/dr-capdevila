import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserAnalytics } from '../hooks/useUserAnalytics';
import { useDynamicContent } from '../hooks/useDynamicContent';
import IntelligentRecommendations from './IntelligentRecommendations';
import './Homepage.css';

const Homepage: React.FC = () => {
  const location = useLocation();
  const { trackPageView, trackClick, trackScrollDepth } = useUserAnalytics();
  const { getPersonalizedContent } = useDynamicContent();

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname);

    // Track scroll depth
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollDepth = Math.round((scrollPosition / scrollHeight) * 100);
      trackScrollDepth(scrollDepth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (element: string) => {
    trackClick(element);
  };

  const personalizedContent = getPersonalizedContent({
    favoritePages: [],
    visitFrequency: {},
    lastVisit: Date.now(),
    totalVisits: 0
  });

  return (
    <main className="homepage">
      <section className="hero">
        <h2>Helgihald á sunnudögum</h2>
        <p>Í Olafskirkju og Ingjalsholskirkju</p>
      </section>

      {/* Dynamic Announcements */}
      {personalizedContent.announcements.length > 0 && (
        <section className="dynamic-announcements">
          <h3>Tilkynningar</h3>
          <div className="announcements-grid">
            {personalizedContent.announcements.map((announcement) => (
              <div key={announcement.id} className="announcement-card">
                <span className={`priority ${announcement.priority}`}>
                  {announcement.priority === 'high' ? 'Mikilvægt' : 'Almennt'}
                </span>
                <h4>{announcement.title}</h4>
                <p>{announcement.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <section className="upcoming-services">
        <h3>Næstu sunnudagar</h3>
        <div className="service-schedule">
          <div className="service-item">
            <h4>Sunnudagur 26. janúar 2026</h4>
            <p>Olafskirkja: Messa kl. 10:00</p>
            <p>Ingjalsholskirkja: Messa kl. 11:00</p>
          </div>
        </div>
      </section>

      {/* Dynamic Events */}
      {personalizedContent.upcomingEvents.length > 0 && (
        <section className="dynamic-events">
          <h3>Næstu viðburðir</h3>
          <div className="events-grid">
            {personalizedContent.upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                {event.imageUrl && (
                  <img src={event.imageUrl} alt={event.title} className="event-image" />
                )}
                <div className="event-content">
                  <h4>{event.title}</h4>
                  <p>{event.content}</p>
                  <span className="event-type">Viðburður</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <section className="churches">
        <h3>Sóknir</h3>
        <div className="church-grid">
          <div className="church-card">
            <img src="/images/olafsvikurkirkja.jpg" alt="Olafskirkja" className="church-image" />
            <h4>Olafskirkja</h4>
            <p>Ólafsvík</p>
            <Link to="/olafskirkja" onClick={() => handleLinkClick('olafskirkja-card')}>Nánar um sókn</Link>
          </div>
          
          <div className="church-card">
            <img src="/images/ingjaldsholkirkja.jpg" alt="Ingjalsholskirkja" className="church-image" />
            <h4>Ingjalsholskirkja</h4>
            <p>Ingjalshöll</p>
            <Link to="/ingjalsholskirkja" onClick={() => handleLinkClick('ingjalsholskirkja-card')}>Nánar um sókn</Link>
          </div>
        </div>
      </section>
      
      <section className="quick-links">
        <h3>Flýtileiðir</h3>
        <div className="links-grid">
          <div className="link-item">
            <h4>Æskulýðsstarf</h4>
            <p>Starf fyrir börn og unglinga</p>
            <Link to="/aeskulydsstarf" onClick={() => handleLinkClick('aeskulydsstarf-link')}>Nánar</Link>
          </div>
          
          <div className="link-item">
            <h4>Safnaðarstarf</h4>
            <p>Starf fyrir fullorðna</p>
            <Link to="/safnadarstarf" onClick={() => handleLinkClick('safnadarstarf-link')}>Nánar</Link>
          </div>
          
          <div className="link-item">
            <h4>Fermingar</h4>
            <p>Upplýsingar um fermingar</p>
            <Link to="/fermingar" onClick={() => handleLinkClick('fermingar-link')}>Nánar</Link>
          </div>
          
          <div className="link-item">
            <h4>Fréttir</h4>
            <p>Nýjustu fréttir og tilkynningar</p>
            <Link to="/frettir" onClick={() => handleLinkClick('frettir-link')}>Nánar</Link>
          </div>
        </div>
      </section>

      {/* Intelligent Recommendations */}
      <IntelligentRecommendations />
    </main>
  );
};

export default Homepage;
