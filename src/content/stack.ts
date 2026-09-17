import css from "../assets/stack/css.svg";
import electron from "../assets/stack/electron.svg";
import html from "../assets/stack/html.svg";
import javascript from "../assets/stack/javascript.svg";
import nextjs from "../assets/stack/nextjs.svg";
import nodejs from "../assets/stack/nodejs.svg";
import react from "../assets/stack/react.svg";
import tailwind from "../assets/stack/tailwind.svg";
import typescript from "../assets/stack/typescript.svg";
import vite from "../assets/stack/vite.svg";
import webpack from "../assets/stack/webpack.svg";

export type StackItem = {
  name: string;
  icon: string;
};

export const stack: StackItem[] = [
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "Electron.js", icon: electron },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Vite", icon: vite },
  { name: "Webpack", icon: webpack },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
];
