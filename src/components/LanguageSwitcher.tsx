"use client";

import { useLanguage, type Locale } from "./providers/LanguageProvider";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={locale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("en")}
        className="w-12"
        title="English"
      >
        🇺🇸
      </Button>
      <Button
        variant={locale === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("es")}
        className="w-12"
        title="Español"
      >
        🇪🇸
      </Button>
    </div>
  );
}
