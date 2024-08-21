import React from "react";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-orange-500 text-white text-center py-1">
      <div className="flex items-baseline justify-center ">
        <p className="flex items-center">
          {t("footer1")}
          <Heart color="red" size={15} className="mx-1 fill-red-600 " />
          {t("footer2")}
        </p>
      </div>
    </footer>
  );
}
