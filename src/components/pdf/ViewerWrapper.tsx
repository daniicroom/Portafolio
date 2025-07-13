"use client";

import React from "react";
import { CVDocument } from "../cv-document";
import { pdf } from "@react-pdf/renderer";

export const viewPDFInNewTab = async () => {
  try {

    const blob = await pdf(<CVDocument />).toBlob();
    const url = URL.createObjectURL(blob);

    // Abrir en una nueva pestaña
    window.open(url, "_blank");

    // Opcional: liberar memoria después de cierto tiempo
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  } catch (error) {
    console.error("Error al generar el PDF para ver:", error);
    alert("No se pudo mostrar el PDF.");
  }
};

/* show in overlay
export default function ViewerWrapper() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-11/12 h-[90vh] shadow-lg rounded">
      <Viewer width="100%" height="100%">
        <CVDocument />
      </Viewer>
     </div>
    </div>
  );
}*/