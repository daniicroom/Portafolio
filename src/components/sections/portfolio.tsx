"use client";

import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import AOS from 'aos';

export default function Portfolio() {
  const projects = [
    {
      title: "Web Design Project",
      category: "Web Design",
      image: "/img/portfolio/portfolio-1.jpg",
      link: "#"
    },
    {
      title: "App Development",
      category: "App Development",
      image: "/img/portfolio/portfolio-2.jpg",
      link: "#"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/img/portfolio/portfolio-3.jpg",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            My Portfolio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.category}</p>
                <a 
                  href={project.link} 
                  className="text-primary hover:text-primary-dark flex items-center"
                >
                  View Project <FiExternalLink className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}