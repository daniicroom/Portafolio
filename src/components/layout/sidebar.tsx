"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "../../data/resume-data";
import { FiHome, FiUser, FiGrid, FiMail } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS animation
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      });
    }
  }, []);

  const navItems = [
    { href: '/', icon: FiHome, label: 'Home' },
    { href: '#about', icon: FiUser, label: 'About' },
    { href: '#portfolio', icon: FiGrid, label: 'Portfolio' },
    { href: '#contact', icon: FiMail, label: 'Contact' }
  ];

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <Avatar className="profile">
        <AvatarImage
          src={RESUME_DATA.avatarUrl}
          alt={`${RESUME_DATA.name}'s avatar`}
          className="img-fluid rounded-circle"
          loading="lazy"
        />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
      <a className="logo d-flex align-items-center justify-content-center" href="/">
        <h1 className="sitename text-white">
          {RESUME_DATA.name}
        </h1>
      </a>
      
      <div className="flex flex-col h-full p-4">
        <div className="pb-6">
          <div className="flex justify-center space-x-4 mt-4">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon
                  ? React.createElement(social.icon, { className: "w-5 h-5" })
                  : null}
              </a>
            ))}
          </div>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}
