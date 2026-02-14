import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("theme") === "dark";
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle("dark", darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    const darkModeEnabled = !isDarkMode;
    setIsDarkMode(darkModeEnabled);
    document.documentElement.classList.toggle("dark", darkModeEnabled);
    localStorage.setItem("theme", darkModeEnabled ? "dark" : "light");
  };

  return (
    <button
      className="p-2 hover:text-orange-500 transition duration-200"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Moon color="currentColor" size={20} />
      ) : (
        <Sun color="currentColor" size={20} />
      )}
    </button>
  );
}
