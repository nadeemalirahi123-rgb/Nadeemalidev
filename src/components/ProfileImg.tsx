import { useState } from "react";

/** Put your photo at public/images/profile.png (or .jpg). Falls back automatically. */
export const PROFILE_SOURCES = ["/images/profile.png", "/images/profile.jpg", "/images/nadeem.jpg"];

export default function ProfileImg({ className = "", alt = "Nadeem — Full Stack Developer" }: { className?: string; alt?: string }) {
  const [i, setI] = useState(0);
  return (
    <img
      src={PROFILE_SOURCES[Math.min(i, PROFILE_SOURCES.length - 1)]}
      alt={alt}
      onError={() => i < PROFILE_SOURCES.length - 1 && setI(i + 1)}
      className={className}
    />
  );
}

/** Builds a round favicon from the profile photo using canvas. */
export function setProfileFavicon() {
  const tryLoad = (idx: number) => {
    if (idx >= PROFILE_SOURCES.length) return;
    const img = new Image();
    img.onload = () => {
      const size = 128;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      // brand ring background
      ctx.fillStyle = "#0b8a5f";
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = "#e7f6ef";
      ctx.fillRect(0, 0, size, size);
      // crop upper-center (face) area
      const s = Math.min(img.width, img.height) * 0.62;
      const sx = (img.width - s) / 2;
      const sy = img.height * 0.02;
      ctx.drawImage(img, sx, sy, s, s, 0, 0, size, size);
      ctx.restore();
      let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.type = "image/png";
      link.href = c.toDataURL("image/png");
    };
    img.onerror = () => tryLoad(idx + 1);
    img.src = PROFILE_SOURCES[idx];
  };
  tryLoad(0);
}
