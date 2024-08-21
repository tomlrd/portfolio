import React from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import Gltf from "../components/Gltf";

const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:mx-32 xl:mx-80 md:mx-80  text-center">
      <div>
        <Gltf />
        <div className="text-lg text-gray-900 dark:text-[--foreground-rgb] text-center my-6">
          <Trans
            i18nKey="welcome"
            components={{
              coloredText: <span className="text-[#d0662d]" />,
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-8">
          <Link
            to="/profile"
            className="shadow-lg rounded-lg p-6 card-light dark:card-dark cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">
              {t("profile")}
            </h2>
            <p className="text-grey-100">{t("profilDescription")}</p>
          </Link>
          <Link
            to="/projects"
            className="shadow-lg rounded-lg p-6 card-light dark:card-dark cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">
              {t("projects.title")}
            </h2>
            <p className="text-grey-100">{t("projectsDescription")}</p>
          </Link>
          <Link
            to="/electron"
            className="shadow-lg rounded-lg p-6 card-light dark:card-dark cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">
              Electron.js
            </h2>
            <p className="text-grey-100">{t("electronDescription")}</p>
          </Link>
          <Link
            to="/contact"
            className="shadow-lg rounded-lg p-6 card-light dark:card-dark cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">
              Contact
            </h2>
            <p className="text-grey-100">{t("contactDescription")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
