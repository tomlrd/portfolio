import { useTranslation } from "react-i18next";
import { content, type Language } from "../i18n";

export function useContent() {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage ?? "en") as Language;
  return content[language] ?? content.en;
}
