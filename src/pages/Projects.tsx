import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Project from "../components/Project";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const mainDivRef = useRef<HTMLDivElement>(null);

  // Récupération de la liste des projets depuis les traductions
  const projectsList = t("projects.projectsList", { returnObjects: true }) as {
    title: string;
    description: string;
    images: string[];
    client: string;
    date: string;
    link: string;
    tags: string[];
  }[];

  // Gestion du clic sur une image
  const handleImageClick = (projectName: string) => {
    setSelectedProject(projectName);
  };

  // Gestion du clic en dehors de la div principale
  const handleClickOutside = (event: MouseEvent) => {
    if (
      mainDivRef.current &&
      !mainDivRef.current.contains(event.target as Node)
    ) {
      setSelectedProject(null); // Fermer le projet ouvert
    }
  };

  useEffect(() => {
    // Ajouter l'événement lors du montage
    document.addEventListener("click", handleClickOutside);
    console.log(projectsList[0].images[0]);

    // Nettoyer l'événement lors du démontage
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Trouver les données du projet sélectionné
  const selectedProjectData = projectsList.find(
    (project) => project.title === selectedProject
  );

  return (
    <div
      ref={mainDivRef}
      className="shadow-lg rounded-lg p-6 card-light dark:card-dark md:mx-80"
    >
      <h2 className="text-xl font-semibold mb-4 text-[#d0662d] text-center">
        {t("projects.title")}
      </h2>
      <h2 className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
        {t("projects.subtitle")}
      </h2>
      <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 w-full scrollbar-custom scrollbar-visible">
        {projectsList.map((project) => (
          <div
            key={project.title}
            className="flex-none snap-center w-90 h-60 my-6 mx-6 cursor-pointer "
            data-type={project.title}
            onClick={() => handleImageClick(project.title)}
          >
            <img
              src={project.images[0]} // Utiliser la première image pour la miniature
              className="w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-[#d0662d] focus:border-[#d0662d]  active:border-[#b35421] transition duration-300 ease-in-out"
              alt={project.title}
            />
          </div>
        ))}
      </div>

      {/* Affichez dynamiquement le composant Project avec les données appropriées */}
      {selectedProjectData && (
        <Project
          title={selectedProjectData.title}
          description={selectedProjectData.description}
          images={selectedProjectData.images}
          client={selectedProjectData.client}
          date={selectedProjectData.date}
          link={selectedProjectData.link}
          tags={selectedProjectData.tags}
        />
      )}
    </div>
  );
};

export default Projects;
