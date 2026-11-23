import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { buildWhatsAppUrl } from "./Contact";
import { Logo } from "./Brand";
import { EMAIL } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-600 sm:flex-row sm:px-8 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Nadeem Dev. Crafted with care in Mirpurkhas.</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <a href={buildWhatsAppUrl("Hi Nadeem!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition hover:-translate-y-0.5 dark:border-slate-700">
              <Logo name="whatsapp" size={17} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 transition hover:-translate-y-0.5 dark:border-slate-700">
              <Logo name="gmail" size={17} />
            </a>
          </div>
          <a href="#home" className="transition hover:text-brand-600">
            Back to top
          </a>
          <span>Full stack web developer</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>
      <a
        href={buildWhatsAppUrl("Hi Nadeem! I found your portfolio and would like to talk.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-dot grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <Logo name="whatsapp" size={28} className="[&_svg]:!text-white" />
      </a>
    </div>
  );
}
