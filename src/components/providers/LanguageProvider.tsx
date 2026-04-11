"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Locale = "en" | "es";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale = "en" }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize from localStorage on client side
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("locale");
    if (saved && (saved === "en" || saved === "es")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Dispatch event with correct detail format
    window.dispatchEvent(new CustomEvent("localeChange", { detail: newLocale }));
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return a default value instead of throwing during SSR
    return { locale: "en" as Locale, setLocale: () => {} };
  }
  return context;
}
