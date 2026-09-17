import aa1 from "../assets/projects/aa1.webp";
import aa2 from "../assets/projects/aa2.webp";
import aa3 from "../assets/projects/aa3.webp";
import ae from "../assets/projects/ae.webp";
import oo1 from "../assets/projects/oo1.webp";
import oo2 from "../assets/projects/oo2.webp";
import oo3 from "../assets/projects/oo3.webp";
import pa1 from "../assets/projects/pa1.webp";
import pa2 from "../assets/projects/pa2.webp";
import pa3 from "../assets/projects/pa3.webp";
import ptl1 from "../assets/projects/ptl1.webp";
import ptl2 from "../assets/projects/ptl2.webp";
import scrpdl from "../assets/projects/scrpdl.webp";

export type Project = {
  id:
    | "albionEmpires"
    | "playability"
    | "onlyone"
    | "padtolan"
    | "albionAccountant";
  name: string;
  period: string;
  client?: string;
  url?: string;
  personal: boolean;
  featured: boolean;
  tags: string[];
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "albionEmpires",
    name: "Albion Empires",
    period: "2026",
    url: "https://albionempires.com/",
    personal: true,
    featured: true,
    tags: [
      "Tauri",
      "Rust",
      "axum",
      "MongoDB",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "deck.gl",
    ],
    images: [ae],
  },
  {
    id: "playability",
    name: "PlayAbility",
    period: "2023 — 2024",
    client: "Valentin Squirelo",
    url: "https://www.playability.gg/",
    personal: false,
    featured: true,
    tags: [
      "Electron.js",
      "TypeScript",
      "React",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "REST",
    ],
    images: [pa1, pa2, pa3],
  },
  {
    id: "onlyone",
    name: "OnlyOne",
    period: "2021 — 2023",
    client: "Vaniti",
    url: "https://only-one.io/",
    personal: false,
    featured: true,
    tags: [
      "Electron.js",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "Material UI",
      "OAuth",
      "REST",
    ],
    images: [oo1, oo2, oo3],
  },
  {
    id: "padtolan",
    name: "PadToLan",
    period: "2023",
    url: "https://github.com/tomlrd/PadToLan",
    personal: true,
    featured: false,
    tags: [
      "Electron.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "LAN",
      "React Grid Layout",
    ],
    images: [scrpdl, ptl1, ptl2],
  },
  {
    id: "albionAccountant",
    name: "Albion Accountant",
    period: "2020 — 2026",
    url: "https://github.com/tomlrd/Albion-Accountant-Client",
    personal: true,
    featured: false,
    tags: ["Tauri", "Rust", "TypeScript", "React", "Charts", "Discord"],
    images: [aa1, aa2, aa3],
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort((a, b) => a.localeCompare(b));
