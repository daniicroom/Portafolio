"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NAV_LINKS } from "@/data/navigation-links";
import { RESUME_DATA } from "../../data/resume-data";
import { FiHome, FiUser, FiGrid, FiMail, FiMenu, FiX } from "react-icons/fi";
import { PiStudent, PiCertificate } from "react-icons/pi";
import { MdWork } from "react-icons/md";

const ICON_MAP: Record<string, React.ElementType> = {
  Home: FiHome,
  About: FiUser,
  Experience: MdWork,
  Education: PiStudent,
  Certification: PiCertificate,
  Portfolio: FiGrid,
  Contact: FiMail,
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    import("aos").then((AOS) =>
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      })
    );
  }, []);

  const renderNavItems = () =>
    NAV_LINKS.map((item) => {
      const IconComponent = ICON_MAP[item.label];
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center p-3 rounded-lg transition-colors ${
            pathname === item.href
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
          <span>{item.label}</span>
        </Link>
      );
    });

  return (
    <>
      {/* Overlay para móvil */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-full w-64 lg:w-72 bg-[#040b14] text-white z-30">
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-col items-center py-6">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage
                src={RESUME_DATA.avatarUrl}
                alt={`${RESUME_DATA.name}'s avatar`}
                className="rounded-full border-4 border-white/30"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
            
            <div className="flex justify-center space-x-4 mt-4">
              {RESUME_DATA.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon &&
                    React.createElement(social.icon, {
                      className: "w-5 h-5",
                    })}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {renderNavItems()}
          </nav>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#040b14] text-white p-4 z-50 flex items-center justify-between">
        <h1 className="text-lg font-semibold">{RESUME_DATA.name}</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-700"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#040b14] text-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <nav className="flex-1 space-y-2">
            {renderNavItems()}
          </nav>
        </div>
      </aside>

      {/* Main content offset */}
      <div className={`${isMobileMenuOpen ? 'md:ml-0' : 'md:ml-64 lg:ml-72'}`} />
    </>
  );
}
