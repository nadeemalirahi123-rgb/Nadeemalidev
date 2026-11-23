import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiWhatsapp,
  SiGmail,
  SiGooglemaps,
  SiFigma,
  SiVercel,
  SiGooglechrome,
  SiLighthouse,
  SiGooglesearchconsole,
  SiPostman,
  SiNpm,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type BrandDef = { Icon: IconType; color: string; dark?: string; bg?: string; name: string };

export const brands = {
  html: { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  css: { Icon: SiCss, color: "#1572B6", dark: "#4fa3e0", name: "CSS" },
  js: { Icon: SiJavascript, color: "#F7DF1E", bg: "#000", name: "JavaScript" },
  react: { Icon: SiReact, color: "#61DAFB", name: "React" },
  node: { Icon: SiNodedotjs, color: "#5FA04E", name: "Node.js" },
  express: { Icon: SiExpress, color: "#111827", dark: "#f1f5f9", name: "Express" },
  mysql: { Icon: SiMysql, color: "#00758F", dark: "#4fb3cc", name: "MySQL" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  git: { Icon: SiGit, color: "#F05032", name: "Git" },
  github: { Icon: SiGithub, color: "#181717", dark: "#f1f5f9", name: "GitHub" },
  whatsapp: { Icon: SiWhatsapp, color: "#25D366", name: "WhatsApp" },
  gmail: { Icon: SiGmail, color: "#EA4335", name: "Gmail" },
  maps: { Icon: SiGooglemaps, color: "#4285F4", name: "Google Maps" },
  figma: { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
  vercel: { Icon: SiVercel, color: "#000000", dark: "#ffffff", name: "Vercel" },
  chrome: { Icon: SiGooglechrome, color: "#4285F4", name: "Chrome" },
  lighthouse: { Icon: SiLighthouse, color: "#F44B21", name: "Lighthouse" },
  searchconsole: { Icon: SiGooglesearchconsole, color: "#458CF5", name: "Search Console" },
  postman: { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
  npm: { Icon: SiNpm, color: "#CB3837", name: "npm" },
  vite: { Icon: SiVite, color: "#646CFF", name: "Vite" },
  vscode: { Icon: VscVscode, color: "#007ACC", dark: "#3ea6ff", name: "VS Code" },
} satisfies Record<string, BrandDef>;

export type BrandKey = keyof typeof brands;

/** Renders a real brand logo in its official colours (with a dark-mode variant when needed). */
export function Logo({ name, size = 22, className = "", title }: { name: BrandKey; size?: number; className?: string; title?: string }) {
  const b: BrandDef = brands[name];
  const round = b.bg ? "rounded-[3px]" : "";
  return (
    <span className={`inline-flex shrink-0 ${className}`} title={title ?? b.name} role="img" aria-label={b.name}>
      <b.Icon size={size} className={`${b.dark ? "dark:hidden" : ""} ${round}`} style={{ color: b.color, background: b.bg }} />
      {b.dark && (
        <b.Icon size={size} className={`hidden dark:block ${round}`} style={{ color: b.dark, background: b.bg }} />
      )}
    </span>
  );
}

/** A small white tile holding a logo — consistent look across the site. */
export function LogoTile({ name, size = 22, className = "" }: { name: BrandKey; size?: number; className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 ${className}`}
    >
      <Logo name={name} size={size} />
    </span>
  );
}
