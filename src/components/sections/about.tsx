"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RESUME_DATA } from "../../data/resume-data";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {RESUME_DATA.about}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {RESUME_DATA.stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl text-primary mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}+</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            {RESUME_DATA.skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              {RESUME_DATA.summary}
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
