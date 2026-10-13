/** Everything the page shows, from Pedro's CV. Edit here; the layout reads from it. */

export const profile = {
  name: "Pedro Carmona",
  title: "Software Engineer",
  tagline: "I build scalable, accessible and fast web applications that people enjoy using.",
  location: "London, UK",
  email: "pedrocarmona82@gmail.com",
  links: {
    github: "https://github.com/peterbetis",
    linkedin: "https://www.linkedin.com/in/pedrocarmona/",
  },
  resume: "/resume.pdf",
};

/** About, as paragraphs. `**bold**` marks highlighted words. */
export const about = [
  "I'm a software engineer with **solid experience** building scalable, responsive web applications. I'm currently a **Senior Frontend Engineer at Casumo**, working on a microfrontends architecture with module federation, **React, TypeScript and Svelte**.",
  "I care about the space where solid engineering meets great user experience: **performance optimization, accessibility and systems design**, backed by unit, integration and end-to-end tests, CI/CD ownership and thoughtful code reviews, so code ships smoothly and customers feel the difference.",
  "Along the way I've built betting applications at **William Hill**, led the migration of **New Look**'s main site as a freelance team lead, and delivered web apps and campaigns for brands like **Santander, Coca-Cola, Levi's and Heineken**. Today I also work closely with AI: assistants like **Claude and GitHub Copilot**, and generative AI, RAG and LLM agents.",
  "I enjoy collaborating with design and backend, mentoring, and demoing to stakeholders. Away from the keyboard you'll find me into sports, history, nature, music and travelling.",
];

export interface Job {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export const experience: Job[] = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer + AI",
    company: "Casumo",
    location: "Malta (remote)",
    description:
      "Microfrontends architecture and module federation design with React and TypeScript, Svelte/SvelteKit and Vite. State management with Redux/RTK, GraphQL, Tailwind CSS and server-side rendering. Owning the full project cycle from design to deployment, with Vitest, Jest and Playwright, CI/CD on GitHub Actions, performance optimisation and error handling. AI-assisted development with GitHub Copilot and Claude Code.",
    tags: ["React", "TypeScript", "Svelte", "Module Federation", "Redux/RTK", "GraphQL", "Playwright", "AI"],
  },
  {
    period: "2017 — 2022",
    role: "Frontend Developer",
    company: "William Hill",
    location: "Gibraltar",
    description:
      "Built betting applications with React, TypeScript, Redux and RxJS, plus Node.js. Took on DevOps duties: creating repositories, unit testing, releases and cloud deployment with Docker and AWS, on GitLab CI/CD. Agile team with Scrum ceremonies.",
    tags: ["React", "TypeScript", "Redux", "RxJS", "Node.js", "Docker", "AWS", "Storybook"],
  },
  {
    period: "2014 — 2016",
    role: "Frontend Lead Developer",
    company: "New Look",
    location: "London, UK",
    description:
      "Freelance team lead on a rolling contract, extended from an initial 3 months to over 2 years, for the migration of the company's main site, newlook.com, to AngularJS. Also built web apps for seasonal campaigns such as Christmas and Halloween.",
    tags: ["AngularJS", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Grunt"],
  },
  {
    period: "2014",
    role: "Frontend Developer",
    company: "EF Education First",
    location: "London, UK",
    description:
      "Senior frontend work on a Facebook-like internal social network for Hult International Business School, with Knockout.js, LESS and a responsive build.",
    tags: ["Knockout.js", "JavaScript", "LESS", "PHP"],
  },
  {
    period: "2013",
    role: "Frontend Developer",
    company: "Bravand",
    location: "London, UK",
    description:
      "A responsive, mobile-first single-page site with CSS3 animations and parallax scrolling for Magners Irish Cider.",
    tags: ["JavaScript", "CSS3 animations", "Responsive design"],
  },
  {
    period: "2011 — 2013",
    role: "Frontend Developer",
    company: "Hogarth Worldwide",
    location: "London, UK",
    description:
      "Created and developed web solutions and applications for Santander Bank UK in a highly competitive environment.",
    tags: ["jQuery", "PHP", "Symfony2", "Drupal", "CodeIgniter"],
  },
  {
    period: "2011",
    role: "Web Developer",
    company: "Exposure Promotions",
    location: "London, UK",
    description:
      "Facebook apps, iPhone apps and CMS sites for brands including Coca-Cola, Levi's, Heineken, Umbro and Bulmers.",
    tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
  }
];

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "FootWorld",
    description:
      "Explore Europe's top seven football leagues on interactive maps: where every squad's players come from, their birthplaces, formations, kits, managers and club history, with live data from ESPN, Wikidata and Wikipedia, in English and Spanish.",
    image: "/projects/footworld.jpg",
    imageAlt: "FootWorld showing Real Madrid's squad nationalities on a world map and its usual formation",
    url: "https://footworld--footworld-4e989.europe-west4.hosted.app/",
    tags: ["Next.js", "React 19", "TypeScript", "D3", "Tailwind CSS", "Wikidata"],
  },
  {
    title: "Nations League Live",
    description:
      "Live scores, match statistics and group standings for the UEFA Nations League, with server-side data fetching and polling that speeds up while matches are live.",
    image: "/projects/nations-league.jpg",
    imageAlt: "Nations League Live showing matchday results, a match's statistics and group standings",
    url: "https://github.com/peterbetis/nations-league",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export const education = [
  { title: "Information Technologies science degree", place: "Cibernos Institute, Seville", year: "2002 — 2005" },
  { title: "Relational Databases Development (LAMP)", place: "CENEC Academy, Seville", year: "2005" },
  { title: "Java Struts and J2EE certificate", place: "Isotrol, Seville", year: "2008" },
];

export const languages = "Spanish (native) · English (fluent)";

/**
 * Companies worked for, then clients and brands worked on, shown as a row of
 * monochrome logos, in public/logos: from Wikimedia Commons, Exposure's from its
 * LinkedIn page, Bravand's and Magners' from their websites. Those without one show
 * as a wordmark.
 */
/** `tall`: a stacked logo, shown taller so it reads at a similar size to the wide ones. */
export const logos: { name: string; src?: string; tall?: boolean }[] = [
  { name: "Casumo", src: "/logos/casumo.png" },
  { name: "William Hill", src: "/logos/williamhill.png" },
  { name: "New Look", src: "/logos/newlook.svg" },
  { name: "EF Education First", src: "/logos/ef.svg" },
  { name: "Bravand", src: "/logos/bravand.svg" },
  { name: "Hogarth Worldwide", src: "/logos/hogarth.png" },
  { name: "Exposure Promotions", src: "/logos/exposure.png" },
  { name: "Hult International Business School", src: "/logos/hult.png" },
  { name: "Magners", src: "/logos/magners.png", tall: true },
  { name: "Santander", src: "/logos/santander.svg" },
  { name: "Coca-Cola", src: "/logos/cocacola.svg" },
  { name: "Levi's", src: "/logos/levis.svg" },
  { name: "Heineken", src: "/logos/heineken.svg" },
  { name: "Umbro", src: "/logos/umbro.svg" },
  { name: "Bulmers", src: "/logos/bulmers.png", tall: true },
];
