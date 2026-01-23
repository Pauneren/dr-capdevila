import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getCurrentPage = (path: string): string => {
    if (path === '/') return 'home';
    return path.substring(1); // Remove the leading slash
  };

  const currentPage = getCurrentPage(location.pathname);

  const navItems = [
    { path: '/', label: 'Heim', id: 'home' },
    { path: '/kirkjan', label: 'Kirkjan', id: 'kirkjan' },
    { path: '/olafskirkja', label: 'Olafsvikurkirkja', id: 'olafskirkja' },
    { path: '/ingjalsholskirkja', label: 'Ingjalsholskirkja', id: 'ingjalsholskirkja' },
    { path: '/helgihald', label: 'Helgihald', id: 'helgihald' },
    { path: '/athafnir', label: 'Athafnir', id: 'athafnir' },
    { path: '/aeskulydsstarf', label: 'Æskulýðsstarf', id: 'aeskulydsstarf' },
    { path: '/safnadarstarf', label: 'Safnaðarstarf', id: 'safnadarstarf' },
    { path: '/fermingar', label: 'Fermingar', id: 'fermingar' },
    { path: '/frettir', label: 'Fréttir', id: 'frettir' },
    { path: '/contact', label: 'Hafðu samband', id: 'contact' },
  ];

  return (
    <header>
      <div className="header-content">
        <Link to="/" className="header-logo-link">
          <img src="/images/cruz-logo.png" alt="Church Logo" className="header-logo" />
        </Link>
        <h1>Olafskirkja og Ingjalsholskirkja</h1>
      </div>
      
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={currentPage === item.id ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={currentPage === item.id ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
