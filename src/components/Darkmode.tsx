import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("theme") === "dark";
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle("dark", darkModePreference);
    document.body.classList.toggle("dark", darkModePreference); // Appliquer au body
  }, []);

  const toggleDarkMode = () => {
    const darkModeEnabled = !isDarkMode;
    setIsDarkMode(darkModeEnabled);
    document.documentElement.classList.toggle("dark", darkModeEnabled);
    document.body.classList.toggle("dark", darkModeEnabled); // Appliquer au body
    localStorage.setItem("theme", darkModeEnabled ? "dark" : "light");
  };

  return (
    <button
      className="border-solid border-2 
        m-2 px-4 py-2
      text-white 
        font-semibold rounded-md 
        shadow-lg 
        transition duration-100 ease-in-out 
        transform 
        hover:scale-105
        active:scale-95
        focus:outline-none         
        focus:ring-0"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Moon color="white" size={20} />
      ) : (
        <Sun color="white" size={20} />
      )}
    </button>
  );
}
