import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Logo, type BrandKey } from "./Brand";
import { projects, type Project } from "../data";
import { SectionLabel } from "./Sections";

function shotSources(url: string) {
  return [
    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`,
    `https://image.thum.io/get/width/1200/crop/760/noanimate/${url}`,
  ];
}

function Preview({ p }: { p: Project }) {
  const sources = shotSources(p.url);
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const failed = idx >= sources.length;

  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}>
      {!failed && (
        <img
          src={sources[idx]}
          alt={`${p.title} website preview`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false);
            setIdx((i) => i + 1);
          }}
          className={`h-full w-full object-cover object-top transition duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {(!loaded || failed) && (
        <div className="absolute inset-0 grid place-items-center text-center text-white">
          <div>
            <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-white"><Logo name="vercel" size={22} /></span>
            <p className="font-display text-3xl font-bold tracking-wide">{p.title}</p>
            {!failed && <p className="mt-2 text-xs text-white/60">Loading live preview…</p>}
          </div>
        </div>
      )}
      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-slate-800 shadow">
        {p.num} · {p.category}
      </span>
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900">
          Visit site <ExternalLink size={15} />
        </span>
      </div>
    </div>
  );
}

const stackFor: Record<string, BrandKey[]> = {
  Meghmalhar: ["react", "tailwind", "whatsapp"],
  "Cafe Taukal": ["react", "tailwind", "whatsapp"],
  ZBIMgym: ["react", "tailwind", "js"],
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-4 text-3xl leading-[1.1] font-bold sm:text-[2.75rem]">
              A few things I've brought to <span className="serif-accent text-gradient pr-1">life.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
            Three live experiences, each shaped around a distinct brand, audience, and business goal.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              <Preview p={p} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <div className="flex items-center gap-1.5">
                    {stackFor[p.title].map((b) => (
                      <Logo key={b} name={b} size={16} />
                    ))}
                  </div>
                </div>
                <p className="mt-2 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 text-sm font-medium dark:border-slate-800">
                <span className="inline-flex items-center gap-2 text-slate-600 group-hover:text-brand-700 dark:text-slate-400 dark:group-hover:text-brand-300">
                  <Logo name="vercel" size={14} /> View live project
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-brand-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
