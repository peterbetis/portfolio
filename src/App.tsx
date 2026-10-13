import { useEffect, useState } from "react";
import { about, education, experience, languages, logos, profile, projects } from "./data";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function App() {
  return (
    <div className="relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-teal-300 px-4 py-3 text-sm font-bold uppercase tracking-widest text-forest-950 focus-visible:translate-x-0"
        >
          Skip to content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Education />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

/** A soft glow that follows the pointer (wide screens only). */
function Spotlight() {
  const [at, setAt] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const move = (e: PointerEvent) => setAt({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{
        background: `radial-gradient(600px at ${at.x}px ${at.y}px, rgba(16, 185, 129, 0.12), transparent 80%)`,
      }}
    />
  );
}

/** The section in view, for the nav's highlight. */
function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      // A band across the upper middle of the screen decides which section is "current".
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}

/** Left column: name, pitch, section nav and links. Sticky on wide screens. */
function Header() {
  const active = useActiveSection();
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{profile.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {SECTIONS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex items-center py-3"
                  >
                    <span
                      className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isActive
                          ? "text-slate-200"
                          : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <SocialLink href={profile.links.github} label="GitHub">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </SocialLink>
        <SocialLink href={profile.links.linkedin} label="LinkedIn">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </SocialLink>
        <SocialLink href={`mailto:${profile.email}`} label="Email">
          <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.51l10 6.25 10-6.25V6H2Zm20 2.87-9.47 5.92a1 1 0 0 1-1.06 0L2 8.87V18h20V8.87Z" />
        </SocialLink>
      </ul>
    </header>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <li className="mr-5 shrink-0 text-xs">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        aria-label={`${label}${external ? " (opens in a new tab)" : ""}`}
        title={label}
        className="block hover:text-slate-200"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
          {children}
        </svg>
      </a>
    </li>
  );
}

/** A section with its title pinned to the top while scrolling on small screens. */
function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-forest-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

/** "**bold**" in the copy becomes highlighted text. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <span key={i} className="font-medium text-slate-200">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function About() {
  return (
    <Section id="about" label="About">
      {about.map((paragraph, i) => (
        <p key={i} className="mb-4">
          <Rich text={paragraph} />
        </p>
      ))}
    </Section>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Hovering a card lifts it onto a soft panel and fades its siblings (wide screens). */
const CARD_HOVER =
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-forest-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg";

function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="group/list">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className={CARD_HOVER} />
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={job.period}
              >
                {job.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <span className="text-base group-hover:text-teal-300">
                    {job.role} · {job.company}
                  </span>
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">{job.location}</p>
                <p className="mt-2 text-sm leading-normal">{job.description}</p>
                <Tags tags={job.tags} />
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View full resume (opens in a new tab)"
          className="group/link inline-flex items-baseline font-semibold leading-tight text-slate-200"
        >
          <span className="border-b border-transparent pb-px transition group-hover/link:border-teal-300 motion-reduce:transition-none">
            View Full Resume
          </span>
          <Arrow />
        </a>
      </div>
    </Section>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="group/list">
        {projects.map((project) => (
          <li key={project.title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className={CARD_HOVER} />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} (opens in a new tab)`}
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    {/* The link's hit area covers the whole card. */}
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>{project.title}</span>
                    <Arrow />
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">{project.description}</p>
                <Tags tags={project.tags} />
              </div>
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                width={960}
                height={553}
                className="aspect-video rounded border-2 border-slate-200/10 object-cover object-top transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" label="Education">
      <ol>
        {education.map((item) => (
          <li key={item.title} className="mb-6 grid sm:grid-cols-8 sm:gap-8 md:gap-4">
            <p className="mb-1 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {item.year}
            </p>
            <div className="sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">{item.title}</h3>
              <p className="text-sm">{item.place}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm">
        <span className="font-medium text-slate-200">Languages: </span>
        {languages}
      </p>
    </Section>
  );
}

/** Companies, clients and brands, as a row of monochrome logos. */
function Footer() {
  return (
    <footer className="pb-16 sm:pb-0">
      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">
        Companies, clients & brands I've worked with
      </h2>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-6">
        {logos.map((logo) => (
          <li key={logo.name} title={logo.name}>
            {logo.src ? (
              // Every logo rendered pure white, softened until hovered.
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`w-auto max-w-32 object-contain opacity-60 brightness-0 invert transition-opacity duration-200 hover:opacity-100 ${
                  logo.tall ? "h-10" : "h-7"
                }`}
              />
            ) : (
              // No published logo: a wordmark in the same white.
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-white opacity-60 transition-opacity duration-200 hover:opacity-100">
                {logo.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}
