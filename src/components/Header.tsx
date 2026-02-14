import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Darkmode from "./Darkmode";
import { useTranslation } from "react-i18next";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<"fr" | "en">();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

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

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <header className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white sticky top-0 z-50 border-b border-orange-500/20 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleNavigateHome}
          className="text-xl font-bold flex items-center gap-2 hover:text-orange-500 transition"
        >
          <span>🔥</span>
          <span>PORTFOLIO</span>
        </button>

        {/* Navigation Center */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/projects" className="hover:text-orange-500 transition">
            Work
          </Link>
          <Link to="/profile" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </nav>

        {/* Controls Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="hover:text-orange-500 transition font-medium text-sm"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
          <Darkmode />
        </div>
      </div>
    </header>
  );
}
