"use client";

import { useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { RESUME_DATA } from "../../data/resume-data";

export default function Portfolio() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    };
    initAOS();
  }, []);

  const { projects } = RESUME_DATA;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            My Portfolio
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
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 relative">
                <Image
                  src={
                    typeof project.logo === "string"
                      ? project.logo
                      : project.logo.src
                  }
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.link?.href && (
                  <a
                    href={project.link.href}
                    className="text-primary hover:text-primary-dark flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.label || "View Project"}{" "}
                    <FiExternalLink className="ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
