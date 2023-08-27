import React, { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (menuOpen && !e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <h1 className="header-title">GeoScope</h1>
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/mapView">ViewMap</a></li>
          <li className="navbar-item"><a href="/weather">Weather</a></li>
        </ul>
      </div>
    </header>
  );
}
