import { useState } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { Logo } from "./Brand";
import { EMAIL, LOCATION, PHONE_DISPLAY, WHATSAPP_NUMBER } from "../data";
import { SectionLabel } from "./Sections";

type Form = { name: string; email: string; budget: string; message: string };
const empty: Form = { name: "", email: "", budget: "", message: "" };

export function buildWhatsAppUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Contact() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er: typeof errors = {};
    if (form.name.trim().length < 2) er.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = "Please enter a valid email";
    if (form.message.trim().length < 5) er.message = "Tell me a bit more about your project";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const text =
      `👋 *New Portfolio Message*\n\n` +
      `*Name:* ${form.name.trim()}\n` +
      `*Email:* ${form.email.trim()}\n` +
      (form.budget ? `*Budget:* ${form.budget}\n` : "") +
      `\n*Project:*\n${form.message.trim()}`;
    const url = buildWhatsAppUrl(text);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
    setSent(true);
    setForm(empty);
    setTimeout(() => setSent(false), 6000);
  };

  const input =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:bg-slate-950 dark:placeholder:text-slate-500";
  const border = (k: keyof Form) =>
    errors[k] ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-slate-700";

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-700 py-20 text-white lg:py-28 dark:bg-brand-900">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <SectionLabel light>Have a project in mind?</SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            Let's make something <span className="serif-accent text-brand-200">useful.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-50/90">
            Tell me what you're building, what you need, and where you want to go next. Your message goes straight to
            my WhatsApp — I'll get back to you soon.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="group inline-flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white shadow-lg transition group-hover:scale-110">
                  <Logo name="whatsapp" size={22} />
                </span>
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-4 break-all">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white shadow-lg transition group-hover:scale-110">
                  <Logo name="gmail" size={22} />
                </span>
                <span>{EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white shadow-lg transition group-hover:scale-110">
                  <Logo name="maps" size={22} />
                </span>
                <span>{LOCATION}</span>
              </a>
            </li>
          </ul>

          <a
            href={buildWhatsAppUrl("Hi Nadeem! I'd like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-brand-800 shadow-xl transition hover:-translate-y-0.5"
          >
            <Logo name="whatsapp" size={20} /> Chat on WhatsApp
          </a>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="reveal rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8 dark:bg-slate-900 dark:text-slate-100"
        >
          <h3 className="text-lg font-semibold">Start a conversation</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Share a few details — it'll be sent directly to my WhatsApp.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Your name
              </label>
              <input id="name" value={form.name} onChange={set("name")} placeholder="Ali Khan" className={`${input} ${border("name")}`} />
              {errors.name && <Err msg={errors.name} />}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  className={`${input} ${border("email")}`}
                />
                {errors.email && <Err msg={errors.email} />}
              </div>
              <div>
                <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
                  Budget <span className="text-slate-400">(optional)</span>
                </label>
                <select id="budget" value={form.budget} onChange={set("budget")} className={`${input} ${border("budget")}`}>
                  <option value="">Select a range</option>
                  <option>Under $100</option>
                  <option>$100 – $300</option>
                  <option>$300 – $700</option>
                  <option>$700+</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                What are you building?
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell me about your project..."
                className={`${input} ${border("message")} resize-none`}
              />
              {errors.message && <Err msg={errors.message} />}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 active:scale-[0.99]"
          >
            <Send size={16} /> Send to WhatsApp <Logo name="whatsapp" size={18} className="rounded-full bg-white p-0.5" />
          </button>

          {sent && (
            <div className="toast-in mt-4 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-200">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              <span>WhatsApp opened with your message — just tap send. Thanks for reaching out!</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Err({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 inline-flex items-center gap-1 text-xs text-red-500">
      <AlertCircle size={12} /> {msg}
    </p>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43zm8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.37-11.37a11.3 11.3 0 0 0-3.34-8.06z" />
    </svg>
  );
}
