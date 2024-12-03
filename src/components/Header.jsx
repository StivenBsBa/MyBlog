import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Mi Portafolio</h1>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#education">Educación</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#portfolio">Portafolio</a>
          </li>
          <li>
            <a href="#interests">Intereses</a>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "Cerrar" : "Menú"}
      </button>
    </header>
  );
};

export default Header;
