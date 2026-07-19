import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDocumentMeta } from "../../../shared/hooks/useDocumentMeta";
import { personStructuredData, site } from "../../../config/site";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Hero } from "../components/Hero";
import { LabSection } from "../components/LabSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { TechnologiesSection } from "../components/TechnologiesSection";

export default function HomePage() {
  const location = useLocation();

  useDocumentMeta({
    title: site.name,
    description: site.description,
    type: "profile",
    structuredData: personStructuredData,
  });

  useEffect(() => {
    const sectionId = location.hash.slice(1);
    if (!sectionId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.hash]);

  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <TechnologiesSection />
      <ProjectsSection />
      <LabSection />
      <ContactSection />
    </>
  );
}
