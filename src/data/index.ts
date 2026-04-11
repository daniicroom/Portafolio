import { RESUME_DATA_EN } from "./resume-data-en";
import { RESUME_DATA_ES } from "./resume-data-es";

export type Locale = "en" | "es";

export function getResumeData(locale: Locale = "en") {
  return locale === "es" ? RESUME_DATA_ES : RESUME_DATA_EN;
}

export const RESUME_DATA = RESUME_DATA_EN; // Default export for backward compatibility
