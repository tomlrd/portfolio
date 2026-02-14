import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Check } from "lucide-react";
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
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/thomas-laroudie", color: "from-blue-500 to-blue-600" },
    { name: "Email", icon: EmailIcon, copyText: "thomas.laroudie@gmail.com", color: "from-red-500 to-red-600" },
    { name: "Discord", icon: DiscordIcon, copyText: "thomas_lrd", color: "from-indigo-500 to-indigo-600" },
    { name: "Upwork", icon: UpworkIcon, url: "https://www.upwork.com/freelancers/~015b4b14e826bef8c5", color: "from-green-500 to-green-600" },
    { name: "Malt", icon: MaltIcon, url: "https://www.malt.fr/profile/thomaslaroudie1", color: "from-pink-500 to-pink-600" },
    { name: "The Sandbox", icon: tsb, url: "https://www.sandbox.game/en/users/stylow/", color: "from-cyan-500 to-cyan-600" },
  ];

  return (
    <main className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
        
        {/* Hero Title */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300">Contact</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">{t("contactsubtitle")}</p>
          
          <div className="flex items-center justify-center gap-2 text-base">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-600 dark:text-green-400 font-semibold">{t("hero.availability")}</span>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const isClickable = social.copyText;
            const Component = social.url ? 'a' : 'div';
            
            return (
              <Component
                key={index}
                {...(social.url ? { href: social.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={isClickable ? () => handleCopy(social.copyText!, social.name) : undefined}
                className="group relative rounded-[2rem] p-8 border-2 border-orange-500/40 hover:border-orange-500 transition-all duration-500 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden cursor-pointer hover:scale-110 hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] flex flex-col items-center justify-center min-h-[180px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-4 group-hover:scale-110 transition-transform duration-500">
                  <img src={social.icon} alt={social.name} className="w-16 h-16" />
                </div>
                
                {/* Name */}
                <span className="relative text-sm font-bold text-gray-600 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {social.name}
                </span>

                {/* Copy indicator */}
                {copied === social.name && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-green-500 rounded-full shadow-lg">
                    <Check size={16} />
                    <span className="text-sm font-bold text-white">{t("copy")}</span>
                  </div>
                )}
              </Component>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="group relative rounded-[2.5rem] p-16 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-700 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden text-center hover:shadow-[0_25px_70px_-15px_rgba(249,115,22,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-4xl shadow-2xl shadow-orange-500/50 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
              💬
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                {t("contact.ctaTitle")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t("contact.ctaSubtitle")}
              </p>
            </div>

            <a
              href="mailto:thomas.laroudie@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 px-10 rounded-full text-base uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/50"
            >
              <Mail size={20} />
              {t("contactme")}
            </a>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Contact;
