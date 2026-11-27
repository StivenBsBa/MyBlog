import { profile, socialLinks } from "../../config/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} · {profile.location}
          </p>
        </div>

        <div className="social-links" aria-label="Perfiles sociales">
          {socialLinks.map((social) => (
            <a
              className="icon-button"
              href={social.href}
              key={social.label}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ${social.label} en una pestaña nueva`}
            >
              <Icon name={social.icon} size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
