"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import { getResumeData } from "@/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function About() {
  const t = useTranslations();
  const { locale } = useLanguage();
  const RESUME_DATA = getResumeData(locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            {t('sections.about.title')}
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {RESUME_DATA.summary.full}
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {RESUME_DATA.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-500 text-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl text-blue-600 mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}+</h3>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Section */}
        <div data-aos="fade-up" className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">{t('sections.about.technicalSkills')}</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESUME_DATA.skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                className="bg-white rounded-lg border-2 border-blue-200 p-6 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-300">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full border border-blue-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}