import React from "react";
import { useTranslation } from "react-i18next";
import { Zap, Shield, Code2, Rocket, ExternalLink } from "lucide-react";

const Electron: React.FC = () => {
  const { t } = useTranslation();

  // Récupération de la liste des avantages d'Electron.js depuis les traductions
  const electronBenefits = t("electronAnswer", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  // Récupération des informations supplémentaires
  const electronExperience = t("electronAnswer2", { returnObjects: true }) as {
    title: string;
    description: string;
  };

  const icons = [Zap, Shield, Code2, Rocket];

  return (
    <main className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
        
        {/* Hero Title */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-5xl shadow-2xl shadow-cyan-500/50 mb-6">
            ⚡
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500">Electron.js</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t("electronDescription")}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Benefits Cards */}
          {electronBenefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative rounded-[2.5rem] p-12 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* Experience Card - Full Width */}
        <div className="group relative rounded-[2.5rem] p-12 md:p-16 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden hover:shadow-[0_25px_70px_-15px_rgba(249,115,22,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative space-y-8">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl shadow-purple-500/30">
                <Rocket size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                {electronExperience.title}
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              {electronExperience.description
                .split("\n")
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Resources Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://www.electronjs.org/docs/latest/tutorial/security#checklist-security-recommendations"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-200/50 dark:bg-gray-800/50 border border-orange-500/50 hover:border-orange-500 hover:bg-gray-300 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Shield size={20} className="text-orange-600 dark:text-orange-500" />
                <span className="font-semibold text-gray-900 dark:text-white">Security</span>
                <ExternalLink size={16} className="text-gray-600 dark:text-gray-400 group-hover/link:text-orange-600 dark:group-hover/link:text-orange-500 transition-colors duration-300" />
              </a>

              <a
                href="https://electron-vite.org/guide/source-code-protection#solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-200/50 dark:bg-gray-800/50 border border-orange-500/50 hover:border-orange-500 hover:bg-gray-300 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Code2 size={20} className="text-orange-600 dark:text-orange-500" />
                <span className="font-semibold text-gray-900 dark:text-white">V8 Bytecode</span>
                <ExternalLink size={16} className="text-gray-600 dark:text-gray-400 group-hover/link:text-orange-600 dark:group-hover/link:text-orange-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Electron;
