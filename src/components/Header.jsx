import { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/MyBlog">
          Mi Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link active text-white"
              href="#about"
              onClick={closeMenu}
            >
              Sobre mí
            </a>
            <a
              className="nav-link text-white"
              href="#education"
              onClick={closeMenu}
            >
              Educación
            </a>
            <a
              className="nav-link text-white"
              href="#experience"
              onClick={closeMenu}
            >
              Experiencia
            </a>
            <a
              className="nav-link text-white"
              href="#skills"
              onClick={closeMenu}
            >
              Habilidades
            </a>
            <a
              className="nav-link text-white"
              href="#portfolio"
              onClick={closeMenu}
            >
              Portafolio
            </a>
            <a
              className="nav-link text-white"
              href="#interests"
              onClick={closeMenu}
            >
              Intereses
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
