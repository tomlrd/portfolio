import React from "react";
import { useTranslation } from "react-i18next";

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

  return (
    <div className="text-gray-900 dark:text-gray-100 dark:div-dark p-6 md:mx-80">
      <div className="flex">
        <h2 className="text-xl font-semibold my-6 text-white bg-[#d0662d] rounded-lg py-2 px-4 text-center inline-block mx-auto">
          Electron.js
        </h2>
      </div>
      <p className="text-grey-100 mb-6 text-center">
        {t("electronDescription")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {/* Colonne de gauche - Avantages d'Electron.js */}
        <div className="space-y-4">
          {electronBenefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-[#d7a173]">
                {benefit.title}
              </h3>
              <p className="text-grey-100">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Colonne de droite - Expérience personnelle */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#d7a173]">
            {electronExperience.title}
          </h3>
          {electronExperience.description
            .split("\n")
            .map((paragraph, index) => (
              <p key={index} className="text-grey-100 mb-2">
                {paragraph}
              </p>
            ))}
          <div className="flex justify-start">
            <a
              className="text-[#d0662d] underline mx-1"
              href="https://www.electronjs.org/docs/latest/tutorial/security#checklist-security-recommendations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security
            </a>
            <a
              className="text-[#d0662d] underline mx-1"
              href="https://electron-vite.org/guide/source-code-protection#solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              V8 Bytecode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electron;
