import type { IconType } from "react-icons";
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMysql, SiTailwindcss, SiGit } from "react-icons/si";
import { Logo, LogoTile, type BrandKey } from "./Brand";

export function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[13px] font-semibold tracking-[0.2em] uppercase ${
        light ? "text-brand-100" : "text-brand-600 dark:text-brand-400"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-brand-200" : "bg-brand-500"}`} />
      {children}
    </p>
  );
}

const stats: { logos: BrandKey[]; value: string; label: string }[] = [
  { logos: ["react", "node", "js"], value: "7+", label: "Core technologies" },
  { logos: ["vercel"], value: "3", label: "Live projects" },
  { logos: ["github"], value: "100%", label: "Curiosity-driven" },
];

export function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-100/60 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-3 sm:px-8">
        {stats.map(({ logos, value, label }) => (
          <div key={label} className="reveal flex items-center gap-4">
            <div className="flex -space-x-3">
              {logos.map((l) => (
                <LogoTile key={l} name={l} size={22} className="h-12 w-12 ring-4 ring-slate-100 dark:ring-slate-900" />
              ))}
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold tracking-tight">{value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="reveal">
          <SectionLabel>A little about me</SectionLabel>
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold sm:text-[2.75rem]">
            I care about the details that make a website <span className="serif-accent text-gradient pr-1">memorable.</span>
          </h2>
        </div>
        <div className="reveal space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            I'm Nadeem, a full stack web developer from Mirpurkhas, Sindh. I enjoy taking a rough idea and shaping it
            into a polished, responsive experience that people can use with confidence.
          </p>
          <p>
            From the first layout to the final API route, I work across the stack to keep products useful,
            maintainable, and ready for the real world.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Frontend craft", "Backend systems", "Responsive by default", "Performance-minded", "SEO friendly"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800 dark:border-brand-900 dark:bg-brand-900/30 dark:text-brand-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type Skill = {
  icons: { Icon: IconType; color: string; darkColor?: string; bg?: string }[];
  title: string;
  sub: string;
  level: number;
  glow: string;
};

const skills: Skill[] = [
  {
    icons: [
      { Icon: SiHtml5, color: "#E34F26" },
      { Icon: SiCss, color: "#1572B6", darkColor: "#4fa3e0" },
    ],
    title: "HTML & CSS",
    sub: "Semantic, responsive UI",
    level: 95,
    glow: "#E34F26",
  },
  { icons: [{ Icon: SiJavascript, color: "#F7DF1E", bg: "#000" }], title: "JavaScript", sub: "Interactive experiences", level: 88, glow: "#F7DF1E" },
  { icons: [{ Icon: SiReact, color: "#61DAFB" }], title: "React.js", sub: "Component-driven apps", level: 85, glow: "#61DAFB" },
  { icons: [{ Icon: SiNodedotjs, color: "#5FA04E" }], title: "Node.js", sub: "Scalable server logic", level: 80, glow: "#5FA04E" },
  { icons: [{ Icon: SiExpress, color: "#111827", darkColor: "#f1f5f9" }], title: "Express.js", sub: "Clean API architecture", level: 80, glow: "#64748b" },
  { icons: [{ Icon: SiMysql, color: "#00758F", darkColor: "#4fb3cc" }], title: "MySQL", sub: "Structured data models", level: 75, glow: "#00758F" },
  { icons: [{ Icon: SiTailwindcss, color: "#06B6D4" }], title: "Tailwind CSS", sub: "Utility-first styling", level: 90, glow: "#06B6D4" },
  { icons: [{ Icon: SiGit, color: "#F05032" }], title: "Git & GitHub", sub: "Version control & teamwork", level: 82, glow: "#F05032" },
];

function BrandIcon({ Icon, color, darkColor, bg }: Skill["icons"][number]) {
  return (
    <span className="relative inline-flex">
      <Icon
        size={26}
        className={`dark:hidden ${bg ? "rounded-[4px]" : ""}`}
        style={{ color, background: bg }}
      />
      <Icon
        size={26}
        className={`hidden dark:block ${bg ? "rounded-[4px]" : ""}`}
        style={{ color: darkColor ?? color, background: bg }}
      />
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-sky-50/70 py-20 lg:py-28 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel>My toolkit</SectionLabel>
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold sm:text-[2.75rem]">
            Everything I need to move from idea to <span className="serif-accent text-gradient pr-1">launch.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            A practical stack for building modern interfaces, reliable services, and connected products.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icons, title, sub, level, glow }, i) => (
            <div
              key={title}
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-40"
                style={{ background: glow }}
              />
              <div className="relative flex items-center gap-4">
                <span className="flex h-14 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50 px-3.5 transition group-hover:scale-110 group-hover:-rotate-3 dark:border-slate-700 dark:bg-slate-800">
                  {icons.map((ic, k) => (
                    <BrandIcon key={k} {...ic} />
                  ))}
                </span>
                <div>
                  <p className="font-display text-[17px] font-bold tracking-tight">{title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{sub}</p>
                </div>
              </div>
              <div className="relative mt-5 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-full rounded-full" style={{ width: `${level}%`, background: `linear-gradient(90deg, ${glow}99, ${glow})` }} />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">{level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services: { logos: BrandKey[]; title: string; text: string }[] = [
  {
    logos: ["html", "css", "js"],
    title: "Business Websites",
    text: "Fast, responsive websites for restaurants, gyms, hotels and local brands that turn visitors into customers.",
  },
  {
    logos: ["whatsapp", "react", "gmail"],
    title: "Ordering & Booking",
    text: "Menus, reservations, memberships and WhatsApp ordering flows that make it easy for clients to act.",
  },
  {
    logos: ["react", "node", "express", "mysql"],
    title: "Full Stack Apps",
    text: "React frontends paired with Node.js, Express and MySQL backends — built clean and ready to scale.",
  },
  {
    logos: ["lighthouse", "searchconsole", "chrome"],
    title: "Performance & SEO",
    text: "Optimized loading, accessibility and on-page SEO so your site ranks better and feels instant.",
  },
  {
    logos: ["figma", "tailwind"],
    title: "UI Redesign",
    text: "Modernize an outdated site with a fresh, consistent design system and a better user experience.",
  },
  {
    logos: ["git", "github", "vercel"],
    title: "Maintenance",
    text: "Ongoing updates, bug fixes and new features so your product keeps improving after launch.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionLabel>What I offer</SectionLabel>
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold sm:text-[2.75rem]">
            Services built around real <span className="serif-accent text-gradient pr-1">business goals.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ logos, title, text }, i) => (
            <div
              key={title}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-100 opacity-0 blur-2xl transition group-hover:opacity-100 dark:bg-brand-800/40" />
              <div className="relative flex items-center gap-2">
                {logos.map((l) => (
                  <LogoTile
                    key={l}
                    name={l}
                    size={22}
                    className="h-12 w-12 transition duration-300 group-hover:-translate-y-1"
                  />
                ))}
              </div>
              <h3 className="relative mt-6 text-xl font-bold">{title}</h3>
              <p className="relative mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps: { logo: BrandKey; title: string; text: string; tool: string }[] = [
  { logo: "whatsapp", title: "Discover", text: "We talk about your goals, audience and what success looks like.", tool: "Quick chat on WhatsApp" },
  { logo: "figma", title: "Design", text: "I map out the structure and craft a clean, on-brand interface.", tool: "Wireframes in Figma" },
  { logo: "vscode", title: "Develop", text: "I build it responsive, fast and connected — with regular updates.", tool: "Clean code in VS Code" },
  { logo: "vercel", title: "Launch", text: "We go live, test everything, and keep improving from there.", tool: "Deployed on Vercel" },
];

export function Process() {
  return (
    <section className="bg-slate-100/70 py-20 lg:py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel>How I work</SectionLabel>
          <h2 className="mt-4 text-3xl leading-[1.1] font-bold sm:text-[2.75rem]">
            A simple process, from first chat to <span className="serif-accent text-gradient pr-1">launch.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ logo, title, text, tool }, i) => (
            <div
              key={title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal relative rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <LogoTile name={logo} size={26} className="h-14 w-14" />
                <span className="font-display text-5xl font-extrabold text-slate-100 dark:text-slate-800">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{text}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Logo name={logo} size={13} /> {tool}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
