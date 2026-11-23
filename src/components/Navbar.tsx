import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "../data";
import { useActiveSection } from "../hooks";
import ProfileImg from "./ProfileImg";

const ids = navLinks.map((l) => l.id);

export default function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        <a href="#home" className="flex items-center gap-3" aria-label="Home">
          <span className="relative">
            <span className="block h-11 w-11 overflow-hidden rounded-full bg-gradient-to-br from-brand-100 to-emerald-50 ring-2 ring-brand-500 ring-offset-2 ring-offset-white transition hover:scale-105 dark:from-brand-900 dark:to-slate-800 dark:ring-offset-slate-950">
              <ProfileImg alt="Nadeem" className="h-full w-full origin-[50%_10%] scale-[1.8] object-cover object-top" />
            </span>
            <span className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-500 dark:border-slate-950" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight">
              Nadeem<span className="text-brand-600 dark:text-brand-400">.dev</span>
            </span>
            <span className="block font-mono text-[11px] text-slate-500 dark:text-slate-400">Full Stack Developer</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:scale-105 hover:border-brand-400 dark:border-slate-700 dark:bg-slate-900 dark:text-amber-300"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 sm:inline-flex"
          >
            Let's talk <ArrowUpRight size={16} />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white md:hidden dark:border-slate-700 dark:bg-slate-900"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden dark:bg-slate-950/95 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-6">
          {navLinks.map((l, i) => (
            <li
              key={l.id}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
            >
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-4 text-lg font-medium ${
                  active === l.id ? "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-4 font-semibold text-white"
            >
              Let's talk <ArrowUpRight size={18} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
