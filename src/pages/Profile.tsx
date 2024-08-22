import React from "react";
import { useTranslation } from "react-i18next";
import html from "../assets/html-1.svg";
import css from "../assets/css-3.svg";
import js from "../assets/logo-javascript.svg";
import next from "../assets/next-js.svg";
import nodejs from "../assets/nodejs-1.svg";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwind-css-2.svg";
import ts from "../assets/typescript.svg";
import electronjs from "../assets/electron.svg";
import webpack from "../assets/webpack-icon.svg";
import vitejs from "../assets/vitejs.svg";
import photo from "./images/photo.jpg";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const Hskills: { title: string; description: string }[] = t(
    "hardskills.skills",
    { returnObjects: true }
  ) as { title: string; description: string }[];

  const Sskills: string[] = t("softskills.skills", {
    returnObjects: true,
  }) as string[];

  return (
    <div className=" md:mx-80 shadow-lg rounded-lg p-6 card-light dark:card-dark text-left grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Profile Section with Image embedded in the text */}
      <div>
        <p className="text-xl font-semibold mb-4 text-[#d0662d]">
          {t("profile")}
        </p>
        <div className="mb-6">
          <img
            src={photo}
            alt="Profile"
            className="w-32 h-32 rounded-lg  object-cover float-left mr-4 mb-2"
          />
          {t("profileContent")
            .split("\n")
            .map((paragraph, index) => (
              <p key={index} className="text-grey-100 mb-2">
                {paragraph}
              </p>
            ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">
          {t("softskills.title")}
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          {Sskills.map((skill: string, index: number) => (
            <li key={index} className="text-grey-100">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Hard Skills Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">
          {t("hardskills.title")}
        </h2>
        <div className="flex justify-items-start justify-start my-5 flex-wrap">
          <img src={html} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={css} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={js} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={ts} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={tailwind} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={react} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={next} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={nodejs} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={electronjs} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={webpack} alt="Logo" className="w-10 h-10 mx-1" />
          <img src={vitejs} alt="Logo" className="w-10 h-10 mx-1" />
        </div>
        <div className="space-y-4">
          {Hskills.map(
            (skill: { title: string; description: string }, index: number) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                  {skill.title}
                </h3>
                <p className="text-grey-100">{skill.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
