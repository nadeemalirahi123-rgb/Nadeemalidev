import { ArrowDownRight } from "lucide-react";
import { Logo } from "./Brand";
import { SiReact, SiNodedotjs, SiJavascript, SiMysql } from "react-icons/si";
import ProfileImg from "./ProfileImg";
import { useEffect, useState } from "react";

const words = ["clear,", "modern,", "polished,"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-700/20" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-800/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:28px_28px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
            <span className="pulse-dot h-2 w-2 rounded-full bg-brand-500" />
            Available for freelance projects
          </span>
          <p className="mt-7 flex items-center gap-3 font-mono text-sm font-semibold tracking-[0.2em] text-brand-600 dark:text-brand-400">
            <span className="h-px w-8 bg-brand-500" /> HELLO, I'M NADEEM
          </p>
          <h1 className="mt-4 text-[2.6rem] leading-[1.02] font-extrabold sm:text-6xl lg:text-[4rem] xl:text-[4.6rem]">
            I build web experiences that feel{" "}
            <span key={i} className="toast-in text-gradient inline-block">
              {words[i]}
            </span>{" "}
            <span className="text-gradient">fast,</span> and{" "}
            <span className="serif-accent relative inline-block text-[1.12em]">
              human.
              <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 h-3 w-full text-brand-400" preserveAspectRatio="none" aria-hidden>
                <path d="M2 9 Q 50 2 100 6 T 198 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-[1.75] text-slate-600 sm:text-xl dark:text-slate-400">
            Full stack web developer crafting dependable digital products with thoughtful interfaces, solid backends,
            and a sharp eye for detail.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Explore my work
              <ArrowDownRight size={18} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:hover:text-brand-300"
            >
              Start a conversation <Logo name="whatsapp" size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Logo name="maps" size={16} /> Mirpurkhas, Sindh
            </span>
            <span className="inline-flex items-center gap-2">
              <Logo name="vscode" size={16} /> Turning ideas into products
            </span>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -top-6 -right-4 h-28 w-28 rounded-3xl border border-sky-200 bg-sky-100/70 sm:-right-8 dark:border-sky-900 dark:bg-sky-900/30" />
          <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full border border-rose-200 bg-rose-50/70 dark:border-rose-900/50 dark:bg-rose-900/20" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-emerald-50 to-sky-100 dark:from-brand-900 dark:via-slate-900 dark:to-slate-800" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.9),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.25),transparent_60%)]" />
              <span className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 font-display text-[7rem] leading-none font-extrabold tracking-tighter text-brand-600/10 select-none dark:text-white/5">
                DEV
              </span>
              <ProfileImg className="relative aspect-[4/5] w-full object-cover object-top transition duration-700 hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-20 text-white">
                <p className="text-sm text-white/80">Based in Pakistan · Working globally</p>
                <p className="mt-1 text-xl font-semibold">Building with purpose.</p>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="animate-float absolute top-10 -left-4 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-xl sm:flex dark:border-slate-700 dark:bg-slate-800">
            <SiReact size={20} className="text-[#61DAFB]" /> React.js
          </div>
          <div
            className="animate-float absolute top-1/2 -right-6 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-xl sm:flex dark:border-slate-700 dark:bg-slate-800"
            style={{ animationDelay: "1.5s" }}
          >
            <SiNodedotjs size={20} className="text-[#5FA04E]" /> Node.js
          </div>
          <div
            className="animate-float absolute bottom-24 -left-8 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-xl lg:flex dark:border-slate-700 dark:bg-slate-800"
            style={{ animationDelay: "3s" }}
          >
            <SiJavascript size={18} className="rounded-sm bg-black text-[#F7DF1E]" /> JavaScript
          </div>
          <div
            className="animate-float absolute -top-4 right-10 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-xl lg:flex dark:border-slate-700 dark:bg-slate-800"
            style={{ animationDelay: "2.2s" }}
          >
            <SiMysql size={22} className="text-[#00758F] dark:text-[#4fb3cc]" /> MySQL
          </div>
        </div>
      </div>
    </section>
  );
}
