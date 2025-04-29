"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FiChevronDown, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init();
    }
  }, []);

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-[url('/img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
        <div className="mb-8">
          <Image 
            src="/img/profile-img.jpg" 
            alt="Profile" 
            width={150} 
            height={150} 
            className="rounded-full border-4 border-white/30 mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Alex Smith
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          I'm a <span className="text-primary">Professional Designer</span> from New York
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-white hover:text-primary transition-colors">
            <FiTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <FiGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <FiLinkedin className="w-6 h-6" />
          </a>
        </div>

        <a 
          href="#about" 
          className="inline-flex items-center text-white hover:text-primary transition-colors"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="mr-2">Scroll Down</span>
          <FiChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}