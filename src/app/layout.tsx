import type { Metadata } from "next";
import { 
  Inter,
  Open_Sans,
  Raleway,
  Poppins 
} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";

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

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`
      ${inter.variable}
      ${openSans.variable}
      ${raleway.variable}
      ${poppins.variable}
    `}>
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 md:p-8 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}