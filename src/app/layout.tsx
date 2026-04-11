import type { Metadata } from "next";
import { 
  Inter,
  Open_Sans,
  Raleway,
  Poppins 
} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { IntlProvider } from "@/components/providers/IntlProvider";

export const dynamic = "force-dynamic";

// Configurar todas las fuentes
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter'
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  display: "swap",
  variable: '--font-open-sans'
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap", 
  variable: '--font-raleway'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "iPortfolio - Professional Portfolio",
  description: "Modern portfolio based on iPortfolio design",
};

async function getInitialMessages() {
  const messages = await import('../translations/en.json');
  return messages.default;
}

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const initialMessages = await getInitialMessages();

  return (
    <html lang="en" className={`
      ${inter.variable}
      ${openSans.variable}
      ${raleway.variable}
      ${poppins.variable}
    `}>
      <body className="bg-gray-100">
        <IntlProvider locale="en" messages={initialMessages}>
          <LanguageProvider initialLocale="en">
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 p-4 md:p-8 relative">
                {children}
              </main>
            </div>
          </LanguageProvider>
        </IntlProvider>
      </body>
    </html>
  );
}