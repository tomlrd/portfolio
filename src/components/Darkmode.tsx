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
      className="border-solid border-2 
        m-2 px-4 py-2
         text-white 
        font-semibold rounded-md 
        shadow-lg 
        transition duration-100 ease-in-out 
        transform 
        hover: hover:scale-105
        active: active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white-300 focus:ring-opacity-50"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Moon color="white" size={30} />
      ) : (
        <Sun color="black" size={30} />
      )}
    </button>
  );
}
