"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { RESUME_DATA } from "../../data/resume-data";

export default function Experience() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    };
    initAOS();
  }, []);

  const { work } = RESUME_DATA;

  return (
    <section id="work-experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Work Experience
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
            Here's a summary of my work experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {work.map((job, index) => (
            <motion.div
              key={job.company + index}
              className="bg-white rounded-lg shadow-lg p-6"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <a
                    href={job.link}
                    className="text-primary hover:text-primary-dark text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company}
                  </a>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-gray-500">{job.start} - {job.end}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.badges.map((badge, index) => (
                  <span
                    key={badge + index}
                    className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>

              {job.link && (
                <a
                  href={job.link}
                  className="text-primary hover:text-primary-dark flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <FiExternalLink className="ml-2" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
