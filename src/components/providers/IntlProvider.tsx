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
      } catch (error) {
        console.error(`Failed to load messages for locale: ${newLocale}`, error);
      }
    };

    window.addEventListener("localeChange", handleLocaleChange);
    return () => window.removeEventListener("localeChange", handleLocaleChange);
  }, []);

  if (!mounted) {
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

