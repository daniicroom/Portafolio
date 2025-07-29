"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RESUME_DATA } from "../../data/resume-data";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            About Me
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {RESUME_DATA.about}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {RESUME_DATA.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gray-50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl text-primary mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}+</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div data-aos="fade-up" className="grid gap-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Who I Am</h3>
          <p className="text-gray-600 mb-6">{RESUME_DATA.summary}</p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => import("../pdf/ViewerWrapper").then((m) => m.viewPDFInNewTab())}
              className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg transition-colors hover:bg-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
            >
              See CV
            </button>
            <button
              onClick={() => import("../pdf/download-pdf").then((m) => m.generatePDF())}
              className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg transition-colors hover:bg-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
            >
              Download CV
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Technical Skills</h3>
          
          <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {RESUME_DATA.skills.map((skill) => (
                    <div key={`${skill.name}`} className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full transition-all duration-700 ease-in-out"
                          style={{
                            width: `${skill.percent}%`,
                            background: "linear-gradient(90deg, var(--primary-color), var(--secondary-color))"
                          }}
                        ></div>
                      </div>
                      
                      {skill.keywords && skill.keywords.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {skill.keywords.map((keyword) => (
                            <span 
                              key={keyword} 
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}