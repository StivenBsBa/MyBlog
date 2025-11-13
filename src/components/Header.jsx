import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    closeMenu();

    if (location.pathname === "/MyBlog/" || location.pathname === "/") {
      // If already on the home page, just scroll
      scrollToSection(id);
    } else {
      // If on another page, navigate to home and then scroll
      navigate("/", { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo);
      // Clear the state after scrolling to prevent re-scrolling on subsequent renders
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-custom-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Mi Blog
        </Link>
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
              className="nav-link text-white"
              to="/"
              onClick={(e) => handleNavLinkClick(e, "about")}
            >
              Sobre mí
            </Link>
            <Link
              className="nav-link text-white"
              to="/"
              onClick={(e) => handleNavLinkClick(e, "education")}
            >
              Educación
            </Link>
            <Link
              className="nav-link text-white"
              to="/"
              onClick={(e) => handleNavLinkClick(e, "experience")}
            >
              Experiencia
            </Link>
            <Link
              className="nav-link text-white"
              to="/"
              onClick={(e) => handleNavLinkClick(e, "skills")}
            >
              Habilidades
            </Link>
            <Link
              className="nav-link text-white"
              to="/"
              onClick={(e) => handleNavLinkClick(e, "portfolio")}
            >
              Portafolio
            </Link>
            <Link
              className="nav-link text-white"
              to="/"
              onClick={(e) => handleNavLinkClick(e, "interests")}
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
