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

  const { avatarUrl, name, specialty, contact } = RESUME_DATA;
  const socialLinks = contact?.social ?? [];

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[url('/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-6 text-center" data-aos="fade-up">
        <div className="mb-8">
          <Image
            src={avatarUrl}
            alt={`${name} Profile Picture`}
            width={150}
            height={150}
            className="rounded-full border-4 border-white/30 mx-auto"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {t('sections.hero.iAm')} <span className="text-primary">{specialty}</span>
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
          className="inline-flex items-center text-white hover:text-primary transition-colors"
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
