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
    <div className="shadow-lg rounded-lg p-6 card-light dark:card-dark md:-mx-80">
      <h2 className="text-xl text-center font-semibold mb-4 text-[#d0662d]">
        Contact
      </h2>
      <p className="text-grey-100 text-center mb-12">{t("contactsubtitle")}</p>
      <div className="flex flex-col mt-4">
        <a
          className="flex items-center mb-4 "
          href="https://www.linkedin.com/in/thomas-laroudie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="Logo" className="w-10 h-10 " />
          <p className="pl-2 hover:underline hover:text-[#d0662d]">
            https://www.linkedin.com/in/thomas-laroudie
          </p>
        </a>

        <div
          className="flex items-center mb-4 cursor-pointer "
          onClick={() => handleCopy("thomas.laroudie@gmail.com", "Email")}
        >
          <img src={EmailIcon} alt="Logo" className="w-10 h-10 " />
          <p className="pl-2 hover:underline hover:text-[#d0662d]">
            thomas.laroudie@gmail.com
          </p>
          {copied === "Email" && (
            <span className="pl-2 text-gray-600 no-underline">{t("copy")}</span>
          )}
        </div>

        <div
          className="flex items-center mb-4 cursor-pointer "
          onClick={() => handleCopy("tomlrd_76839", "Discord")}
        >
          <img src={DiscordIcon} alt="Logo" className="w-10 h-10 " />
          <p className="pl-2 hover:underline hover:text-[#d0662d]">
            tomlrd_76839
          </p>
          {copied === "Discord" && (
            <span className="pl-2 text-sm text-gray-600 no-underline">
              {t("copy")}
            </span>
          )}
        </div>

        <a
          className="flex items-center mb-4 "
          href="https://www.upwork.com/freelancers/~015b4b14e826bef8c5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={UpworkIcon} alt="Logo" className="w-10 h-10 " />
          <p className="pl-2 hover:underline hover:text-[#d0662d]">
            https://www.upwork.com/freelancers/~015b4b14e826bef8c5
          </p>
        </a>

        <a
          className="flex items-center mb-4"
          href="https://www.malt.fr/profile/thomaslaroudie1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MaltIcon} alt="Logo" className="w-10 h-10 " />
          <p className="pl-2 hover:underline hover:text-[#d0662d]">
            https://www.malt.fr/profile/thomaslaroudie1
          </p>
        </a>

        <a
          className="flex items-center mb-4"
          href="https://www.sandbox.game/en/users/stylow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tsb} alt="Logo" className="w-10 h-10 " />
          <p className="pl-2 hover:underline hover:text-[#d0662d]">
            https://www.sandbox.game/en/users/stylow/
          </p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
