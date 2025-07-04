"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { NAV_LINKS } from "@/data/navigation-links";
import { RESUME_DATA } from "../../data/resume-data";
import { FiHome, FiUser, FiGrid, FiMail } from "react-icons/fi";
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

  const renderNavItems = (wrapperClass = "") =>
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
          } ${wrapperClass}`}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {IconComponent && <IconComponent className="w-5 h-5 mr-3" />}
          <span>{item.label}</span>
        </Link>
      );
    });

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <header id="header" className="header dark-background flex flex-col">
          <div data-aos="fade-down">
            <Avatar className="profile">
              <AvatarImage
                src={RESUME_DATA.avatarUrl}
                alt={`${RESUME_DATA.name}'s avatar`}
                className="rounded-full border-4 border-white/30 mx-auto"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>

          <div
            className="flex flex-col h-full p-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Social Icons */}
            <div className="pb-6">
              <div
                className="flex justify-center space-x-4 mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {RESUME_DATA.contact.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
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

            {/* Command Menu and Nav Links */}
            <nav className="flex-1 space-y-4">
              <ul className="space-y-2">{renderNavItems()}</ul>
            </nav>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <div className="block md:hidden">
        <Drawer>
          <DrawerTrigger className="fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md">
            <FiGrid className="w-6 h-6" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col px-4 py-2 space-y-2">
              {renderNavItems("py-2 px-3")}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
