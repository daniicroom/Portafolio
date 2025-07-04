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

export default function Certifications() {
  useEffect(() => {
    import("aos").then((AOS) =>
      AOS.init({ duration: 800, easing: "ease-in-out", once: true })
    );
  }, []);

  const { certifications } = RESUME_DATA;

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Certifications
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Some of the certifications I have achieved along my professional path.
          </p>
        </div>

        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name + index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  {cert.year}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
