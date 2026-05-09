"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useEffect, useState } from "react";

interface IntlProviderProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export function IntlProvider({ children, locale: initialLocale, messages: initialMessages }: IntlProviderProps) {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleLocaleChange = async (event: Event) => {
      const customEvent = event as CustomEvent;
      const newLocale = customEvent.detail as string;
      
      try {
        const newMessages = await import(`../../translations/${newLocale}.json`);
        setMessages(newMessages.default);
        setLocale(newLocale);
        // Update HTML lang attribute
        document.documentElement.lang = newLocale;
      } catch (error) {
        console.error(`Failed to load messages for locale: ${newLocale}`, error);
      }
    };

    // Check localStorage on mount to sync with saved preference
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && (savedLocale === "en" || savedLocale === "es")) {
      // Trigger the handler to load the correct messages
      handleLocaleChange(new CustomEvent("localeChange", { detail: savedLocale }));
    }

    window.addEventListener("localeChange", handleLocaleChange);
    return () => window.removeEventListener("localeChange", handleLocaleChange);
  }, []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Bogota"
    >
      {children}
    </NextIntlClientProvider>
  );
}

