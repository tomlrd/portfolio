import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      {/* Hero Section with Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Large Hero Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-gradient-to-br from-orange-100/80 via-purple-50/50 to-white/90 dark:from-orange-500/20 dark:via-purple-500/10 dark:to-gray-900/90 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-16 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 group overflow-hidden relative shadow-2xl hover:shadow-[0_25px_70px_-15px_rgba(249,115,22,0.5)]">
            {/* Simple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[450px] md:min-h-[550px]">
              <div className="space-y-8">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider border border-orange-500/40 backdrop-blur-sm">
                    {t("hero.badge1")}
                  </div>
                  <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider border border-purple-500/40 backdrop-blur-sm">
                    {t("hero.badge2")}
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-gray-900 dark:text-white">
                    {t("hero.firstName")}
                  </h1>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-500 dark:via-orange-400 dark:to-yellow-400">
                    {t("hero.lastName")}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-4">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{t("hero.availability")}</span>
                  </div>
                </div>

                <p className="text-base md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl">
                  {t("hero.subtitle")}
                </p>

                {/* Tech icons */}
                <div className="flex items-center gap-3 pt-2 flex-wrap">
                  <div className="flex items-center gap-2 px-4 py-2 bg-cyan-100/80 dark:bg-cyan-500/10 rounded-lg border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
                    <span className="text-base font-bold text-cyan-600 dark:text-cyan-400">
                      ⚛
                    </span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      React
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-500/10 rounded-lg border border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300">
                    <span className="text-base font-bold text-blue-600 dark:text-blue-400">
                      TS
                    </span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-100/80 dark:bg-green-500/10 rounded-lg border border-green-500/30 backdrop-blur-sm hover:border-green-500/50 transition-colors duration-300">
                    <span className="text-base font-bold text-green-600 dark:text-green-400">
                      ◆
                    </span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Node.js
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-100/80 dark:bg-orange-500/10 rounded-lg border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-300">
                    <span className="text-base font-bold text-orange-600 dark:text-orange-400">
                      ◉
                    </span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Claude Sonnet 4.5
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap py-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-all duration-300 w-fit shadow-lg"
                >
                  {t("hero.cta1")}
                  <span className="text-xl">→</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gray-200/80 dark:bg-gray-900/50 hover:bg-gray-300 dark:hover:bg-gray-800/80 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-widest transition-all duration-300 w-fit border border-gray-300 dark:border-gray-700 hover:border-orange-500/50 backdrop-blur-sm"
                >
                  {t("hero.cta2")}
                </Link>
              </div>
            </div>
          </div>

          {/* Stats & Info Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-100/80 to-gray-50/50 dark:from-gray-900/80 dark:to-gray-900/50 backdrop-blur-sm rounded-[2.5rem] p-12 md:p-16 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 group relative overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center space-y-14 hover:shadow-[0_25px_70px_-15px_rgba(249,115,22,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 space-y-12">
              {/* Years of experience */}
              <div className="space-y-3">
                <div className="text-7xl font-black text-orange-600 dark:text-orange-500">
                  {t("stats.experience")}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-bold">
                  {t("stats.years")}
                </p>
              </div>

              {/* Projects count */}
              <div className="space-y-3">
                <div className="text-6xl font-black text-purple-600 dark:text-purple-400">
                  {t("stats.projects")}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-bold">
                  {t("stats.realized")}
                </p>
              </div>

              {/* Satisfaction */}
              <div className="space-y-6 w-full">
                <div className="text-6xl font-black text-green-600 dark:text-green-400">
                  {t("stats.satisfaction")}
                </div>

                {/* Clients section */}
                <div className="pt-8 w-full">
                  <div className="relative">
                    {/* Decorative line */}
                    <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-[0.2em] mb-6 pt-6 font-semibold">
                      {t("stats.clients")}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Thales */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-200/40 to-gray-300/40 dark:from-gray-800/40 dark:to-gray-900/40 px-6 py-4 border border-gray-300/30 dark:border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <span className="text-lg font-black text-gray-700 dark:text-gray-200 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          Thales
                        </span>
                      </div>
                    </div>

                    {/* Capgemini */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-200/40 to-gray-300/40 dark:from-gray-800/40 dark:to-gray-900/40 px-6 py-4 border border-gray-300/30 dark:border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <span className="text-lg font-black text-gray-700 dark:text-gray-200 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          Capgemini
                        </span>
                      </div>
                    </div>

                    {/* Ercom */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-200/40 to-gray-300/40 dark:from-gray-800/40 dark:to-gray-900/40 px-6 py-4 border border-gray-300/30 dark:border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <span className="text-lg font-black text-gray-700 dark:text-gray-200 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          Ercom
                        </span>
                      </div>
                    </div>

                    {/* Hemeria */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-200/40 to-gray-300/40 dark:from-gray-800/40 dark:to-gray-900/40 px-6 py-4 border border-gray-300/30 dark:border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <span className="text-lg font-black text-gray-700 dark:text-gray-200 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          Hemeria
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <Link
            to="/profile"
            className="group relative rounded-[2.5rem] min-h-[450px] p-12 md:p-14 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden flex flex-col justify-between"
          >
            {/* Animated gradient overlay with shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Multiple glow effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/30 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-orange-400/20 rounded-full blur-[80px]"></div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative space-y-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-4xl shadow-2xl shadow-orange-500/50 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-orange-500/80 transition-all duration-700">
                👤
              </div>
              <div className="space-y-5">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:tracking-wide transition-all duration-500">
                  {t("profile.title")}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500">
                  {t("profilDescription")}
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-4 text-orange-600 dark:text-orange-400 font-bold text-lg group-hover:gap-6 transition-all duration-500">
              <span className="group-hover:translate-x-1 transition-transform duration-500">
                {t("main.discover")}
              </span>
              <span className="text-3xl group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500">
                →
              </span>
            </div>
          </Link>

          {/* Projects Card */}
          <Link
            to="/projects"
            className="group relative rounded-[2.5rem] min-h-[450px] p-12 md:p-14 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden flex flex-col justify-between"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Multiple glow effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/30 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-pink-500/20 rounded-full blur-[100px]"></div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative space-y-12">
              <div className="flex items-center gap-5 flex-wrap">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-4xl shadow-2xl shadow-orange-500/50 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-orange-500/80 transition-all duration-700">
                  🚀
                </div>
                <div className="px-6 py-3 rounded-full bg-orange-500/30 border-2 border-orange-500/50 group-hover:bg-orange-500/40 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-500">
                  <span className="text-base font-black text-orange-600 dark:text-orange-300 group-hover:text-orange-700 dark:group-hover:text-orange-200">
                    {t("main.projectsCount")}
                  </span>
                </div>
              </div>
              <div className="space-y-5">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:tracking-wide transition-all duration-500">
                  {t("projects.title")}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500">
                  {t("projectsDescription")}
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-4 text-orange-600 dark:text-orange-400 font-bold text-lg group-hover:gap-6 transition-all duration-500">
              <span className="group-hover:translate-x-1 transition-transform duration-500">
                {t("main.explore")}
              </span>
              <span className="text-3xl group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500">
                →
              </span>
            </div>
          </Link>

          {/* Electron Card */}
          <Link
            to="/electron"
            className="group relative rounded-[2.5rem] min-h-[450px] p-12 md:p-14 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden flex flex-col justify-between"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Multiple glow effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/30 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-cyan-400/20 rounded-full blur-[80px]"></div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative space-y-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-4xl shadow-2xl shadow-orange-500/50 group-hover:scale-125 group-hover:rotate-[20deg] group-hover:shadow-orange-500/80 transition-all duration-700">
                ⚡
              </div>
              <div className="space-y-5">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:tracking-wide transition-all duration-500">
                  Electron
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500">
                  {t("electronDescription")}
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-4 text-orange-600 dark:text-orange-400 font-bold text-lg group-hover:gap-6 transition-all duration-500">
              <span className="group-hover:translate-x-1 transition-transform duration-500">
                {t("main.discover")}
              </span>
              <span className="text-3xl group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500">
                →
              </span>
            </div>
          </Link>

          {/* Contact Card */}
          <Link
            to="/contact"
            className="group relative rounded-[2.5rem] min-h-[450px] p-12 md:p-14 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden flex flex-col justify-between"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Multiple glow effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/30 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-green-400/20 rounded-full blur-[80px]"></div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative space-y-12">
              <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-4xl shadow-2xl shadow-orange-500/50 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-orange-500/80 transition-all duration-700">
                  💬
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/30 border-2 border-green-500/50 group-hover:bg-green-500/40 group-hover:border-green-400 group-hover:scale-110 transition-all duration-500">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-base font-black text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300">
                    {t("profile.available")}
                  </span>
                </div>
              </div>
              <div className="space-y-5">
                <h3 className="text-4xl font-black text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:tracking-wide transition-all duration-500">
                  Contact
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500">
                  {t("contactDescription")}
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-4 text-orange-600 dark:text-orange-400 font-bold text-lg group-hover:gap-6 transition-all duration-500">
              <span className="group-hover:translate-x-1 transition-transform duration-500">
                {t("main.letsTalk")}
              </span>
              <span className="text-3xl group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500">
                →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Optional: Additional content section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-gray-900 dark:text-white">
            {t("main.finalCtaTitle")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("main.finalCtaSubtitle")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
