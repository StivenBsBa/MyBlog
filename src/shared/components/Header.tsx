import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationItems, profile } from "../../config/site";
import { Icon } from "./Icon";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link className="brand" to="/" aria-label="Ir al inicio">
          <span className="brand__mark" aria-hidden="true">
            {profile.shortName}
          </span>
          <span>{profile.name}</span>
        </Link>

        <button
          ref={menuButtonRef}
          className="icon-button header__toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} size={24} />
        </button>

        <nav
          aria-label="Navegación principal"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          id="primary-navigation"
        >
          {navigationItems.map((item) => (
            <Link
              className="nav-link"
              key={item.sectionId}
              to={`/#${item.sectionId}`}
              aria-current={location.hash === `#${item.sectionId}` ? "location" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
