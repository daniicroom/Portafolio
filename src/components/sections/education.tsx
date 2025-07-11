"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "../../data/resume-data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Education() {
  const { education } = RESUME_DATA;

  useEffect(() => {
    import("aos").then((AOS) =>
      AOS.init({ duration: 800, easing: "ease-in-out", once: true })
    );
  }, []);

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
            Here is an overview of my educational background
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school + index}
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>{edu.school}</CardTitle>
                  <CardDescription>{edu.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  {edu.start} - {edu.end}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
