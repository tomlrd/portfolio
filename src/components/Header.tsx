import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Darkmode from "./Darkmode";
import { useTranslation } from "react-i18next";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Initialiser la langue depuis le localStorage ou se baser sur la langue du navigateur
  const [language, setLanguage] = useState<"fr" | "en">();

  // Appliquer la langue sélectionnée lors du premier rendu
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // Initialiser le thème depuis le localStorage ou définir "dark" par défaut
  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    const initialLanguage = browserLanguage === "fr" ? "fr" : "en";
    setLanguage(initialLanguage);
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  // Fonction pour changer de langue et l'enregistrer dans le localStorage
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // Fonction pour naviguer vers la page d'accueil
  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <header className="w-full bg-orange-500 z-10">
      <div className="md:mx-80 xs:mx-0">
        <div className="flex justify-center">
          {/* Dark Mode Toggle */}
          <Darkmode />

          {/* Language Button */}
          <button
            onClick={toggleLanguage}
            className="
            border-solid border-2 
            m-2 px-4 py-2
            text-white 
            font-semibold rounded-md 
            shadow-lg 
            transition duration-100 ease-in-out 
            transform 
            hover:scale-105
            active:scale-95
            focus:outline-none         
            focus:ring-0
            "
          >
            {language === "en" ? "EN" : "FR"}
          </button>

          {/* Home Button (visible si l'utilisateur n'est pas sur /main) */}
          {location.pathname !== "/" && (
            <button
              onClick={handleNavigateHome}
              className="
              border-solid border-2 
              m-2 px-4 py-2
              text-white 
              font-semibold rounded-md 
              shadow-lg 
              transition duration-100 ease-in-out 
              transform 
              hover:scale-105
              active:scale-95
              focus:outline-none         
              focus:ring-0
              "
            >
              {t("back")}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
