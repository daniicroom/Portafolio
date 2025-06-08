"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "../../data/resume-data";

export default function Education() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    };
    initAOS();
  }, []);

  const { education } = RESUME_DATA;

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Education
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
            Here's an overview of my educational background
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school + index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.school}</h3>
              <p className="text-lg font-medium text-gray-700">{edu.degree}</p>
              <p className="text-gray-500 mb-4">
                {edu.start} - {edu.end}
              </p>
              {/* Si tienes una descripción adicional, la puedes agregar aquí */}
              {/* <p className="text-gray-600">{edu.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
