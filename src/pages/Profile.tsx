import React from "react";
import { useTranslation } from "react-i18next";
import { Download, CheckCircle } from "lucide-react";
import html from "../assets/html-1.svg";
import css from "../assets/css-3.svg";
import js from "../assets/logo-javascript.svg";
import next from "../assets/next-js.svg";
import nodejs from "../assets/nodejs-1.svg";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwind-css-2.svg";
import ts from "../assets/typescript.svg";
import electronjs from "../assets/electron.svg";
import webpack from "../assets/webpack-icon.svg";
import vitejs from "../assets/vitejs.svg";
import photo from "./images/photo.jpg";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const getResumeLink = () => {
    const language = localStorage.getItem("language");
    if (language === "en") {
      return `https://www.canva.com/design/DAGNYtwT2GQ/99Q-BJe9T7Q2iKaQLgb3Fw/edit?utm_content=DAGNYtwT2GQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`;
    } else {
      return `https://www.canva.com/design/DAGhEfKexzY/m7iNSNnHzafWSTx9lGxbng/edit?utm_content=DAGhEfKexzY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`;
    }
  };

  const Hskills: { title: string; description: string }[] = t(
    "hardskills.skills",
    { returnObjects: true },
  ) as { title: string; description: string }[];

  const Sskills: string[] = t("softskills.skills", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
        {/* Hero Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300">
              Profil
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
            Découvrez mon parcours et mes compétences
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Me Card */}
          <div className="group relative rounded-[2.5rem] p-12 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative space-y-8">
              <div className="flex items-center gap-6">
                <img
                  src={photo}
                  alt="Profile"
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-orange-500/50 shadow-xl"
                />
                <div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                    {t("me")}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Disponible</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("profileContent")
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index} className="text-base">
                      {paragraph}
                    </p>
                  ))}
              </div>

              <a
                href={getResumeLink()}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-base uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50"
              >
                <Download size={20} />
                {t("download")}
              </a>
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="group relative rounded-[2.5rem] p-12 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative space-y-8">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                {t("softskills.title")}
              </h2>

              <div className="space-y-4">
                {Sskills.map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group/item"
                  >
                    <CheckCircle
                      size={24}
                      className="text-orange-600 dark:text-orange-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-base text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hard Skills Card - Full Width */}
          <div className="lg:col-span-2 group relative rounded-[2.5rem] p-12 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative space-y-8">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">
                {t("hardskills.title")}
              </h2>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={html} alt="HTML" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={css} alt="CSS" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={js} alt="JavaScript" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={ts} alt="TypeScript" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={tailwind} alt="Tailwind" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={react} alt="React" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={next} alt="Next.js" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={nodejs} alt="Node.js" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={electronjs} alt="Electron" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={webpack} alt="Webpack" className="w-12 h-12" />
                </div>
                <div className="group/icon relative p-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-110">
                  <img src={vitejs} alt="Vite" className="w-12 h-12" />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Hskills.map(
                  (
                    skill: { title: string; description: string },
                    index: number,
                  ) => (
                    <div
                      key={index}
                      className="group/skill p-6 rounded-2xl bg-gray-200/30 dark:bg-gray-800/30 border border-gray-300/30 dark:border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-300/50 dark:hover:bg-gray-800/50"
                    >
                      <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-3 group-hover/skill:text-orange-700 dark:group-hover/skill:text-orange-300 transition-colors duration-300">
                        {skill.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover/skill:text-gray-700 dark:group-hover/skill:text-gray-300 transition-colors duration-300">
                        {skill.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
