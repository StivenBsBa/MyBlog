export interface NavigationItem {
  label: string;
  sectionId: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  location: string;
  description: string;
}

export interface TechnologyGroup {
  category: string;
  technologies: string[];
}

export interface Project {
  slug: "ia-platform" | "localroot";
  path: `/proyectos/${string}`;
  title: string;
  eyebrow: string;
  year: number;
  summary: string;
  overview: string[];
  technologies: readonly string[];
  highlights: readonly string[];
  categories?: Array<{
    title: string;
    items: readonly string[];
  }>;
}

export interface ResourceItem {
  title: string;
  description: string;
  status: string;
}
