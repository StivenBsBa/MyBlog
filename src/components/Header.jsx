import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link
              className="nav-link active text-white"
              to="/about"
              onClick={closeMenu}
            >
              Sobre mí
            </Link>
            <Link
              className="nav-link text-white"
              to="/education"
              onClick={closeMenu}
            >
              Educación
            </Link>
            <Link
              className="nav-link text-white"
              to="/experience"
              onClick={closeMenu}
            >
              Experiencia
            </Link>
            <Link
              className="nav-link text-white"
              to="/skills"
              onClick={closeMenu}
            >
              Habilidades
            </Link>
            <Link
              className="nav-link text-white"
              to="/portfolio"
              onClick={closeMenu}
            >
              Portafolio
            </Link>
            <Link
              className="nav-link text-white"
              to="/interests"
              onClick={closeMenu}
            >
              Intereses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
