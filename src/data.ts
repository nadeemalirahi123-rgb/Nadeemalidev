export const WHATSAPP_NUMBER = "923438276211";
export const PHONE_DISPLAY = "+92 343 8276211";
export const EMAIL = "nadeemalidev01@gmail.com";
export const LOCATION = "Mirpurkhas, Sindh, Pakistan";

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  num: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  accent: string;
};

export const projects: Project[] = [
  {
    num: "01",
    category: "Hospitality",
    title: "Meghmalhar",
    description:
      "Premium restaurant experience for Umerkot, Sindh — elegant menu browsing, online ordering and table reservations in one luxurious interface.",
    tags: ["Restaurant", "Ordering", "Responsive"],
    url: "https://meghmalharuk.vercel.app/",
    accent: "from-amber-900 via-stone-900 to-black",
  },
  {
    num: "02",
    category: "Restaurant & Hotel",
    title: "Cafe Taukal",
    description:
      "A warm digital home for dining, rooms, and reservations — charcoal BBQ menus, room booking and WhatsApp ordering.",
    tags: ["Food & Beverage", "Bookings", "Branding"],
    url: "https://cafe-taukal.vercel.app/",
    accent: "from-orange-900 via-neutral-900 to-black",
  },
  {
    num: "03",
    category: "Fitness",
    title: "ZBIMgym",
    description:
      "A bold fitness platform built to motivate action — programs, trainers, facilities and membership plans with a high-energy look.",
    tags: ["Gym", "Programs", "Membership"],
    url: "https://zbimgymweb.vercel.app/",
    accent: "from-yellow-700 via-zinc-900 to-black",
  },
];
