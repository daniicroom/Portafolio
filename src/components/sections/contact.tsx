"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { RESUME_DATA } from "../../data/resume-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Aquí puedes hacer fetch/axios a una API de contacto
    console.log("Form data submitted:", formData);
    setIsLoading(false);
    alert("Message sent (fake)!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-up">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FiMail className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">{RESUME_DATA.contact?.email ?? "email@example.com"}</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FiMapPin className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600">{RESUME_DATA.location ?? "Unknown Location"}</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl text-primary mb-4">
              <FiPhone className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">{RESUME_DATA.contact?.tel ?? ""}</p>
          </div>
        </div>

        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300
              bg-[var(--primary-color)] hover:bg-[#37b3ed]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed`}
              >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
