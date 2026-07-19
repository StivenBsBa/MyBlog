import { Icon } from "../../../shared/components/Icon";
import { RevealSection } from "../../../shared/components/RevealSection";
import { profile, socialProfiles } from "../../../config/site";

export function ContactSection() {
  return (
    <RevealSection className="contact-section" id="contacto">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>¿Construimos algo útil?</h2>
          <p>
            Estoy abierto a conversar sobre oportunidades, productos y colaboraciones donde
            pueda aportar como {profile.role}.
          </p>
        </div>

        <div className="contact-card__actions">
          <a
            className="button button--light"
            href={socialProfiles.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por LinkedIn <Icon name="external" />
          </a>
          <a
            className="button button--ghost"
            href={socialProfiles.github}
            target="_blank"
            rel="noreferrer"
          >
            Ver GitHub <Icon name="github" />
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
