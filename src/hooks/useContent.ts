import { useTranslation } from "react-i18next";
import { content, resolveLanguage } from "../i18n";

export function useContent() {
  const { i18n } = useTranslation();
  return content[resolveLanguage(i18n.resolvedLanguage)];
}
