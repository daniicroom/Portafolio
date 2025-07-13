"use client";

import { pdf } from "@react-pdf/renderer";

// Lazy import del documento PDF solo en el cliente
const loadPDF = async () => {
  try {

    const { CVDocument } = await import("../cv-document");
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
