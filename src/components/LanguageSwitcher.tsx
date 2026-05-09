"use client";

import { useState, useEffect } from "react";
import { useLanguage, type Locale } from "./providers/LanguageProvider";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const LANGUAGES: Record<Locale, { flag: string; name: string }> = {
  en: { flag: "🇺🇸", name: "English" },
  es: { flag: "🇪🇸", name: "Español" },
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLanguage = LANGUAGES[locale];
  const otherLanguages = Object.entries(LANGUAGES).filter(
    ([key]) => (key as Locale) !== locale
  );

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className="flex items-center gap-1 h-9 px-2"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <ChevronDown className="w-3 h-3" />
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 h-9 px-2"
        title={`Current language: ${currentLanguage.name}`}
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <ChevronDown className="w-3 h-3" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {otherLanguages.map(([key, language]) => (
            <button
              key={key}
              onClick={() => {
                setLocale(key as Locale);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left transition-colors text-sm"
              title={language.name}
            >
              <span className="text-base">{language.flag}</span>
              <span className="text-gray-700">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
