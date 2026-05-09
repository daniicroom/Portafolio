"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { getResumeData } from "@/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Portfolio() {
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

  if (!mounted) return null;

  const { projects } = RESUME_DATA;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            {t('sections.portfolio.title')}
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('sections.portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title + index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={
                    typeof project.logo === "string"
                      ? project.logo
                      : project.logo.src
                  }
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                  {project.role && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ml-2">
                      {project.role}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                {project.impact && project.impact.length > 0 && (
                  <div className="mb-4 pb-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">Impact</p>
                    <ul className="space-y-1">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Link */}
                {project.link?.href && (
                  <a
                    href={project.link.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.label || "View Project"}
                    <FiExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
