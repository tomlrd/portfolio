import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EmailIcon from "../assets/gmail-icon.svg";
import DiscordIcon from "../assets/discord.svg";
import LinkedInIcon from "../assets/linkedin-icon-2.svg";
import UpworkIcon from "../assets/upwork-1.svg";
import MaltIcon from "../assets/Malt_logo_pink-ai.svg";
import tsb from "./images/tsb.png";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="text-gray-900 dark:text-gray-100 dark:div-dark p-6 md:-mx-80">
      <div className="flex">
        <h2 className="text-xl font-semibold my-6 text-white bg-[#d0662d] rounded-lg py-2 px-4 text-center inline-block mx-auto">
          Contact
        </h2>
      </div>
      <p className="text-grey-100 text-center mb-12">{t("contactsubtitle")}</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/thomas-laroudie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className="w-20 h-20" />
        </a>

        <div className="relative flex flex-col items-center cursor-pointer">
          {copied === "Email" && (
            <span className="absolute -top-6 text-sm text-green-400">
              {t("copy")}
            </span>
          )}
          <img
            src={EmailIcon}
            alt="Gmail"
            className="w-20 h-20"
            onClick={() => handleCopy("thomas.laroudie@gmail.com", "Email")}
          />
        </div>

        <div className="relative flex flex-col items-center cursor-pointer">
          {copied === "Discord" && (
            <span className="absolute -top-6 text-sm text-green-400">
              {t("copy")}
            </span>
          )}
          <img
            src={DiscordIcon}
            alt="Discord"
            className="w-20 h-20"
            onClick={() => handleCopy("tomlrd_76839", "Discord")}
          />
        </div>

        <a
          href="https://www.upwork.com/freelancers/~015b4b14e826bef8c5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img src={UpworkIcon} alt="Upwork" className="w-20 h-20" />
        </a>

        <a
          href="https://www.malt.fr/profile/thomaslaroudie1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img src={MaltIcon} alt="Malt" className="w-20 h-20" />
        </a>

        <a
          href="https://www.sandbox.game/en/users/stylow/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img src={tsb} alt="The Sandbox" className="w-20 h-20" />
        </a>
      </div>
      <div className="flex">
        <a
          href="mailto:thomas.laroudie@gmail.com"
          className="text-xl font-semibold my-20 text-white bg-[#d0662d] rounded-lg py-2 px-4 text-center inline-block mx-auto"
        >
          <h2>{t("contactme")}</h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;
