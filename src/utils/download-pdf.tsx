"use client";

import { pdf, Font } from "@react-pdf/renderer";

// Registro de fuentes
const registerPDFFonts = () => {
  Font.register({
    family: "Open Sans",
    fonts: [
      {
        src: "/fonts/OpenSans-Regular.ttf",
        fontWeight: 400,
      },
      {
        src: "/fonts/OpenSans-Bold.ttf",
        fontWeight: 700,
      },
    ],
  });
};

// Lazy import del documento PDF solo en el cliente
const loadPDF = async () => {
  try {
    // 🔹 Registra fuentes ANTES de renderizar
    registerPDFFonts();

    const { CVDocument } = await import("../components/cv-document");
    const blob = await pdf(<CVDocument />).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
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
