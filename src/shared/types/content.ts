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
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  description?: string;
}

export interface TechnologyGroup {
  category: string;
  technologies: string[];
}

export interface Project {
  slug: string;
  status: string;
  contribution: string;
  repository?: string;
  aliases?: readonly string[];
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

export interface Article {
  slug: string;
  path: `/laboratorio/${string}`;
  category?: string;
  title: string;
  summary: string;
  sections: readonly { title: string; text: string }[];
}
