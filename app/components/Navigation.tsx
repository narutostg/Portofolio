'use client';

import { useState } from 'react';

const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Education', '#education'], ['Contact', '#contact']];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <nav className="nav-inner page-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>naruto<span>.stg</span></a>
        <button className="nav-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button>
        <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          {links.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
        </div>
      </nav>
    </header>
  );
}
