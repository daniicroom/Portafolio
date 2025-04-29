"use client";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import AOS from 'aos';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FiMail className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">contact@example.com</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FiMapPin className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600">New York, USA</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FiPhone className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
        </div>

        <form className="max-w-2xl mx-auto" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}