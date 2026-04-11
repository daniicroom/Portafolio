"use client";

import { pdf } from "@react-pdf/renderer";
import { type Locale } from "@/data";

// Lazy import del documento PDF solo en el cliente
const loadPDF = async () => {
  try {
    // Get locale from localStorage or default to "en"
    const savedLocale = localStorage.getItem("locale") as Locale || "en";

    const { CVDocument } = await import("../cv-document");
    const blob = await pdf(<CVDocument locale={savedLocale} />).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `resume-${savedLocale}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error al generar el PDF:", error);
    alert("No se pudo generar el PDF. Inténtalo de nuevo.");
  }
};

export const generatePDF = loadPDF;
