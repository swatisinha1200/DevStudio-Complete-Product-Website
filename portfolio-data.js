/* =========================================
   DevStudio - Portfolio Project Data
   ========================================= */

const portfolioProjects = [
  {
    id: "project-one",
    title: "Project One",
    category: "Web Development",
    description:
      "A modern, responsive web experience designed for performance, usability, and a polished visual presentation.",
    details:
      "This project demonstrates a complete responsive interface with a strong visual hierarchy, reusable components, responsive layouts, and accessible interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    imageClass: "image-one",
    featured: true,
  },

  {
    id: "project-two",
    title: "Project Two",
    category: "UI/UX Design",
    description:
      "A clean interface focused on intuitive navigation, visual consistency, and a smooth user experience.",
    details:
      "The project combines thoughtful information architecture with a responsive design system to create a consistent experience across desktop, tablet, and mobile devices.",
    technologies: ["UI/UX", "Figma", "Responsive Design"],
    year: "2026",
    imageClass: "image-two",
    featured: false,
  },

  {
    id: "project-three",
    title: "Project Three",
    category: "Branding",
    description:
      "A distinctive digital identity created to give the brand a modern, recognizable, and consistent presence.",
    details:
      "This project focuses on visual identity, color systems, typography, and digital presentation while maintaining consistency across multiple touchpoints.",
    technologies: ["Branding", "Typography", "Visual Design"],
    year: "2026",
    imageClass: "image-three",
    featured: false,
  },

  {
    id: "project-four",
    title: "Project Four",
    category: "Web Development",
    description:
      "A responsive website built around clear content structure, engaging visuals, and conversion-focused interactions.",
    details:
      "The implementation emphasizes responsive behavior, semantic HTML, accessible controls, optimized layouts, and maintainable front-end code.",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    imageClass: "image-four",
    featured: false,
  },

  {
    id: "project-five",
    title: "Project Five",
    category: "Dashboard",
    description:
      "An interactive dashboard concept designed to present important information clearly and efficiently.",
    details:
      "The dashboard uses structured information cards, visual data presentation, responsive layouts, and interactive elements to make complex information easier to understand.",
    technologies: ["JavaScript", "CSS", "Dashboard UI"],
    year: "2026",
    imageClass: "image-five",
    featured: false,
  },
];

/* Make the data available to other JavaScript files when supported. */
if (typeof window !== "undefined") {
  window.portfolioProjects = portfolioProjects;
}
