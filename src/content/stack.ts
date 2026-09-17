import anthropic from "../assets/stack/anthropic.svg";
import claude from "../assets/stack/claude.svg";
import css from "../assets/stack/css.svg";
import electron from "../assets/stack/electron.svg";
import gemini from "../assets/stack/gemini.svg";
import hermes from "../assets/stack/hermes.webp";
import html from "../assets/stack/html.svg";
import javascript from "../assets/stack/javascript.svg";
import nextjs from "../assets/stack/nextjs.svg";
import nodejs from "../assets/stack/nodejs.svg";
import react from "../assets/stack/react.svg";
import rust from "../assets/stack/rust.svg";
import tailwind from "../assets/stack/tailwind.svg";
import tauri from "../assets/stack/tauri.svg";
import typescript from "../assets/stack/typescript.svg";
import vite from "../assets/stack/vite.svg";
import webpack from "../assets/stack/webpack.svg";

type StackItem = {
  name: string;
  icon: string;
  monochrome?: boolean;
};

export const stack: StackItem[] = [
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "Electron.js", icon: electron },
  { name: "Tauri", icon: tauri },
  { name: "Rust", icon: rust, monochrome: true },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: nextjs, monochrome: true },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Vite", icon: vite },
  { name: "Webpack", icon: webpack },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
];

export const aiTools: StackItem[] = [
  { name: "Claude", icon: claude },
  { name: "Anthropic", icon: anthropic, monochrome: true },
  { name: "Gemini", icon: gemini },
  { name: "Hermes", icon: hermes, monochrome: true },
];
