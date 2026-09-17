import discord from "../assets/social/discord.svg";
import gmail from "../assets/social/gmail.svg";
import linkedin from "../assets/social/linkedin.svg";
import malt from "../assets/social/malt.svg";
import sandbox from "../assets/social/sandbox.png";
import upwork from "../assets/social/upwork.svg";
import type { Language } from "../i18n";

export const profile = {
  name: "Thomas Laroudie",
  email: "thomas.laroudie@gmail.com",
  discord: "thomas_lrd",
  githubUrl: "https://github.com/tomlrd",
} as const;

const resumeUrls: Record<Language, string> = {
  en: "https://www.canva.com/design/DAGNYtwT2GQ/99Q-BJe9T7Q2iKaQLgb3Fw/view",
  fr: "https://www.canva.com/design/DAGhEfKexzY/m7iNSNnHzafWSTx9lGxbng/view",
};

export function resumeUrl(language: Language): string {
  return resumeUrls[language] ?? resumeUrls.en;
}

export type SocialLink = {
  id: string;
  name: string;
  icon: string;
  url?: string;
  copyValue?: string;
};

export const socials: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/thomas-laroudie",
  },
  {
    id: "malt",
    name: "Malt",
    icon: malt,
    url: "https://www.malt.fr/profile/thomaslaroudie1",
  },
  {
    id: "upwork",
    name: "Upwork",
    icon: upwork,
    url: "https://www.upwork.com/freelancers/~015b4b14e826bef8c5",
  },
  {
    id: "sandbox",
    name: "The Sandbox",
    icon: sandbox,
    url: "https://www.sandbox.game/en/users/stylow/",
  },
  {
    id: "email",
    name: "Email",
    icon: gmail,
    copyValue: profile.email,
  },
  {
    id: "discord",
    name: "Discord",
    icon: discord,
    copyValue: profile.discord,
  },
];

export const stats = [
  { id: "experience", value: "10+" },
  { id: "projects", value: "20+" },
  { id: "platforms", value: "3" },
] as const;
