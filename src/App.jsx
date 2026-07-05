import { profile, experience, projects, education, skills } from "./data";

function StatusDot({ color = "teal", pulse = false }) {
  const bg = color === "teal" ? "bg-teal" : color === "amber" ? "bg-amber" : "bg-slate";
  return (
    <span className={`relative inline-flex h-2 w-2 rounded-full ${bg} status-dot ${pulse ? "blink" : ""}`} />
  );
}

function NavBar() {
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper-dim">
        <a href="#top" className="flex items-center gap-2 text-paper focus-ring rounded-sm">
          <StatusDot pulse />
          <span>umair.dev</span>
        </a>
        <nav className="hidden gap-6 sm:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-amber focus-ring rounded-sm">
              {label}
            </a>
          ))}
        </nav>
        <span className="hidden text-slate sm:inline">status: available</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid-texture border-b border-line px-6 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate">
          <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1 text-teal">
            <StatusDot pulse /> available for work
          </span>
          <span className="rounded-full border border-line px-3 py-1">{profile.location}</span>
        </div>
        <h1 className="font-mono text-4xl font-semibold leading-tight text-paper sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-lg text-amber sm:text-xl">{profile.role}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg">
          {profile.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          {/* <a
            href={`mailto:${profile.email}`}
            className="focus-ring rounded-md bg-amber px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a> */}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md border border-line px-5 py-2.5 text-paper transition-colors hover:border-teal hover:text-teal"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-xs uppercase tracking-widest text-slate">{eyebrow}</span>
      <h2 className="font-mono text-2xl font-semibold text-paper sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01" title="About" />
        <p className="max-w-3xl text-base leading-relaxed text-paper-dim sm:text-lg">
          I'm a full-stack developer based in Vitoria-Gasteiz, Spain, working with clients through
          Fiverr and Upwork to build web applications from first requirements through to production
          deployment. My work spans the whole lifecycle: React and Next.js on the frontend, Node.js
          and Express APIs on the backend, and the Docker, Jenkins, and AWS infrastructure that gets
          it all live and running reliably. I care as much about a clean interface as I do about a
          clean deploy — code review, performance tuning, and system architecture are part of the
          job, not an afterthought.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02" title="Experience" />
        <div className="relative border-l border-line pl-8">
          {experience.map((job, i) => (
            <div key={job.role} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-teal status-dot" />
              <div className="mb-1 font-mono text-xs uppercase tracking-widest text-slate">
                {job.range}
              </div>
              <h3 className="text-lg font-semibold text-paper sm:text-xl">{job.role}</h3>
              <p className="mb-3 font-mono text-sm text-amber">{job.org}</p>
              <ul className="space-y-2">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-paper-dim sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-lg border border-line bg-ink-raised p-6 transition-colors hover:border-teal">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-paper">{project.name}</h3>
          <p className="font-mono text-xs uppercase tracking-widest text-slate">{project.type}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-teal">
          <StatusDot /> {project.status}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-paper-dim sm:text-base">{project.description}</p>
      <ul className="mb-4 space-y-1.5">
        {project.points.map((p, idx) => (
          <li key={idx} className="flex gap-2 text-sm leading-relaxed text-paper-dim">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-paper-dim"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 font-mono text-[11px] text-slate">{project.date}</div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="03" title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="04" title="Education" />
        <div className="rounded-lg border border-line bg-ink-raised p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3 className="text-lg font-semibold text-paper sm:text-xl">{education.degree}</h3>
            <span className="font-mono text-xs uppercase tracking-widest text-slate">{education.range}</span>
          </div>
          <p className="mt-1 font-mono text-sm text-amber">{education.institution}</p>
          <p className="mt-1 text-sm text-paper-dim">{education.meta}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-paper-dim"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-sm text-paper-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="06" title="Contact" />
        <div className="rounded-lg border border-line bg-ink-raised p-6 font-mono text-sm sm:p-8 sm:text-base">
          <p className="text-slate">
            <span className="text-teal">$</span> contact --umair
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className="focus-ring w-fit rounded-sm text-paper hover:text-amber">
              → email: {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="focus-ring w-fit rounded-sm text-paper hover:text-amber">
              → phone: {profile.phone}
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="focus-ring w-fit rounded-sm text-paper hover:text-amber">
              → linkedin: {profile.linkedin}
            </a>
            <span className="text-paper-dim">→ location: {profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-slate sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>built with React · Tailwind · shipped on Vercel</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
