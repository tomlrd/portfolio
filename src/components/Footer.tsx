import React from "react";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 border-t border-orange-500/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center text-sm">
          <p className="flex items-center gap-1">
            {t("footer1")}
            <Heart color="red" size={14} className="fill-red-600" />
            {t("footer2")}
          </p>
        </div>
      </div>
    </footer>
  );
}
