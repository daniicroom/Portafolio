"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FiChevronDown } from "react-icons/fi";
import { getResumeData } from "@/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const t = useTranslations();
  const { locale } = useLanguage();
  const RESUME_DATA = getResumeData(locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    };

    initAOS();
  }, []);

  const { avatarUrl, name, title, specialty } = RESUME_DATA.personal;
  const { contact, summary } = RESUME_DATA;
  const socialLinks = contact?.social ?? [];
  const titleParts = title.split("|").map((part) => part.trim());
  const primaryTitle = titleParts[0] || title;
  const secondaryTitle = titleParts[1];

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 md:pt-0 md:pb-8 bg-[url('/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      role="banner"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
        <div className="mb-5 md:mb-8">
          <Image
            src={avatarUrl}
            alt={`${name} Profile Picture`}
            width={150}
            height={150}
            className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover border-4 border-white/30 mx-auto"
            priority
            loading="eager"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
          {name}
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-3">
          {primaryTitle}
        </h2>
        
        {secondaryTitle && (
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-5 font-semibold leading-relaxed">
            {secondaryTitle}
          </p>
        )}
        
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          {RESUME_DATA.summary.short}
        </p>

        {socialLinks.length > 0 && (
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-white hover:text-primary transition-colors"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon && React.createElement(social.icon, { className: "w-6 h-6" })}
              </a>
            ))}
          </div>
        )}

        <a
          href="#about"
          className="inline-flex items-center text-white hover:text-primary transition-colors text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="mr-2">{t('sections.hero.scrollDown')}</span>
          <FiChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
