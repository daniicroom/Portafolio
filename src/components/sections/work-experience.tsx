"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FiExternalLink } from "react-icons/fi";
import { getResumeData } from "@/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Experience() {
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

  const { work } = RESUME_DATA;

  return (
    <section id="work-experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            {t('sections.workExperience.title')}
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
            {t('sections.workExperience.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {work.map((job, index) => (
            <motion.article
              key={job.company + index}
              className="border-l-4 border-blue-500 bg-white rounded-lg shadow-lg p-8"
              whileHover={{ x: 5 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={50}
                    height={50}
                    className="rounded-lg mr-4 shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                    <a
                      href={job.link}
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 font-semibold">{job.start} - {job.end}</p>
                  {!!job.badges?.length && (
                    <div className="flex flex-wrap justify-end gap-2 mt-2">
                      {job.badges.map((badge, i) => (
                        <span
                          key={`${badge}-${i}`}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {Array.isArray((job as any).technologies) && (job as any).technologies.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(job as any).technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-lg border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {job.achievements && job.achievements.length > 0 && (
                <div className="mb-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider border-t pt-4">Key Impact & Ownership</h4>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-b-0">
                        <span className="text-blue-600 font-bold text-lg flex-shrink-0 mt-0.5">→</span>
                        <span className="text-gray-800 leading-relaxed font-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CV Actions */}
        <div id="resume" data-aos="fade-up" className="mt-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-12 border-2 border-blue-200">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">{t('sections.resume.title')}</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('sections.resume.description')}
          </p>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <span className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm font-semibold text-blue-600 border border-blue-200">📄 {t('sections.resume.format')}</span>
            <span className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm font-semibold text-blue-600 border border-blue-200">📋 {t('sections.resume.pages')}</span>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            <button
              onClick={() => import("../pdf/ViewerWrapper").then((m) => m.viewPDFInNewTab())}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-lg"
            >
              👁️ {t('sections.about.seeCv')}
            </button>
            <button
              onClick={() => import("../pdf/download-pdf").then((m) => m.generatePDF())}
              className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all text-lg"
            >
              ⬇️ {t('sections.about.downloadCv')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
