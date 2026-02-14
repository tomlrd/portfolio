import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Calendar, User, X } from "lucide-react";
import images from "./images"; // Importer les images

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Récupération de la liste des projets depuis les traductions
  const projectsList = t("projects.projectsList", { returnObjects: true }) as {
    title: string;
    description: string;
    images: string[]; // Ce sont les clés des images dans le fichier translation.json
    client: string;
    date: string;
    link: string;
    tags: string[];
  }[];

  // Couleurs pour les cartes (rotation)
  const cardColors = [
    { from: "from-orange-500/20", to: "to-orange-500/5", border: "border-orange-500/30", hover: "hover:border-orange-500/60", text: "text-orange-400" },
    { from: "from-purple-500/20", to: "to-purple-500/5", border: "border-purple-500/30", hover: "hover:border-purple-500/60", text: "text-purple-400" },
    { from: "from-blue-500/20", to: "to-blue-500/5", border: "border-blue-500/30", hover: "hover:border-blue-500/60", text: "text-blue-400" },
    { from: "from-green-500/20", to: "to-green-500/5", border: "border-green-500/30", hover: "hover:border-green-500/60", text: "text-green-400" },
    { from: "from-pink-500/20", to: "to-pink-500/5", border: "border-pink-500/30", hover: "hover:border-pink-500/60", text: "text-pink-400" },
    { from: "from-cyan-500/20", to: "to-cyan-500/5", border: "border-cyan-500/30", hover: "hover:border-cyan-500/60", text: "text-cyan-400" },
  ];

  return (
    <main className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300">Projets</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, index) => {
            const colors = cardColors[index % cardColors.length];
            
            return (
              <div
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`group relative bg-gradient-to-br ${colors.from} ${colors.to} backdrop-blur-sm rounded-3xl overflow-hidden border ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer hover:scale-[1.02]`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={images[project.images[0]]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-gray-950 dark:via-gray-950/50 dark:to-transparent"></div>
                  
                  {/* Tags overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className={`text-2xl font-bold ${colors.text} group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description.split("\n")[0]}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 pt-2">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* View button */}
                  <div className="pt-2">
                    <span className={`inline-flex items-center gap-2 ${colors.text} font-bold text-sm group-hover:gap-3 transition-all duration-300`}>
                      Voir le projet
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal pour le projet sélectionné */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-gray-100 dark:bg-gray-900 rounded-3xl max-w-6xl w-full border border-gray-300 dark:border-gray-800 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Images Column */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-200 dark:scrollbar-track-gray-900">
                {projectsList[selectedProject].images.map((imageKey, index) => (
                  <img
                    key={index}
                    src={images[imageKey]}
                    alt={`${projectsList[selectedProject].title} - ${index + 1}`}
                    className="w-full h-auto object-cover rounded-2xl border border-gray-300 dark:border-gray-800"
                  />
                ))}
              </div>

              {/* Details Column */}
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-4xl font-black tracking-tight mb-4 text-gray-900 dark:text-white">
                    {projectsList[selectedProject].title}
                  </h2>
                  
                  {/* Meta info */}
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-orange-600 dark:text-orange-500" />
                      <span><span className="font-semibold">Client:</span> {projectsList[selectedProject].client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-orange-600 dark:text-orange-500" />
                      <span>{projectsList[selectedProject].date}</span>
                    </div>
                  </div>
                </div>

                {/* Link */}
                {projectsList[selectedProject].link && (
                  <a
                    href={projectsList[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                  >
                    Visiter le site
                    <ExternalLink size={18} />
                  </a>
                )}

                {/* Description */}
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {projectsList[selectedProject].description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectsList[selectedProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:border-orange-500/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
