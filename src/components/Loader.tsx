import { useEffect, useState } from "react";
import ProfileImg from "./ProfileImg";
import { Logo, type BrandKey } from "./Brand";

const orbit: BrandKey[] = ["react", "js", "node", "html", "css", "mysql", "tailwind", "git"];
const code = 'const developer = "Nadeem";';
const name = "Nadeem.dev";
const MIN_TIME = 2400;

export default function Loader({ onDone, onLeave }: { onDone: () => void; onLeave?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [typed, setTyped] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let pageLoaded = document.readyState === "complete";
    const onLoad = () => (pageLoaded = true);
    window.addEventListener("load", onLoad);

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / MIN_TIME, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const target = pageLoaded ? eased * 100 : Math.min(eased * 100, 92);
      setProgress(Math.round(target));
      if (t >= 1 && pageLoaded) {
        setProgress(100);
        setTimeout(() => {
          setLeaving(true);
          onLeave?.();
        }, 250);
        setTimeout(() => {
          document.body.style.overflow = "";
          onDone();
        }, 1150);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const typer = setInterval(() => setTyped((n) => (n >= code.length ? n : n + 1)), 55);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(typer);
      window.removeEventListener("load", onLoad);
    };
  }, [onDone, onLeave]);

  return (
    <div
      className={`loader-root fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950 text-white ${
        leaving ? "loader-leave" : ""
      }`}
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      {/* ambient glow + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="loader-glow absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      </div>

      <div className={`relative flex flex-col items-center px-6 transition-all duration-500 ${leaving ? "scale-95 opacity-0" : ""}`}>
        {/* avatar + orbit */}
        <div className="relative grid h-64 w-64 place-items-center sm:h-72 sm:w-72">
          <div className="loader-orbit absolute inset-0">
            {orbit.map((b, i) => {
              const angle = (i / orbit.length) * 360;
              return (
                <span
                  key={b}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `rotate(${angle}deg) translate(var(--orbit-r)) rotate(-${angle}deg)` }}
                >
                  <span
                    className="loader-counter grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-white shadow-lg shadow-black/40"
                    style={{ animationDelay: `${0.15 + i * 0.08}s, 0s` }}
                  >
                    <Logo name={b} size={20} />
                  </span>
                </span>
              );
            })}
          </div>

          <div className="relative h-32 w-32 sm:h-36 sm:w-36">
            <div className="loader-ring absolute -inset-1.5 rounded-full" />
            <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-br from-brand-100 to-emerald-50 ring-4 ring-slate-950">
              <ProfileImg alt="Nadeem" className="h-full w-full origin-[50%_10%] scale-[1.8] object-cover object-top" />
            </div>
            <span className="absolute right-2 bottom-2 h-4 w-4 rounded-full border-[3px] border-slate-950 bg-brand-400 pulse-dot" />
          </div>
        </div>

        {/* name */}
        <h1 className="mt-6 flex font-display text-4xl font-extrabold tracking-tight sm:text-5xl" aria-label={name}>
          {name.split("").map((c, i) => (
            <span
              key={i}
              className={`loader-letter inline-block ${i >= 6 ? "text-brand-400" : ""}`}
              style={{ animationDelay: `${0.3 + i * 0.06}s` }}
            >
              {c}
            </span>
          ))}
        </h1>

        {/* typing code */}
        <p className="mt-3 h-6 font-mono text-sm text-slate-400">
          <span className="text-brand-400">&gt;</span> {code.slice(0, typed)}
          <span className="loader-caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-brand-400" />
        </p>

        {/* progress */}
        <div className="mt-8 w-64 sm:w-80">
          <div className="flex justify-between font-mono text-[11px] tracking-widest text-slate-500 uppercase">
            <span>Loading portfolio</span>
            <span className="text-brand-300 tabular-nums">{progress}%</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="loader-bar h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-emerald-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
