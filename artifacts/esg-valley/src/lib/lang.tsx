import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "VI" | "EN" | "ZH" | "JP";

interface LangInfo {
  code: Lang;
  label: string;
  nativeName: string;
}

export const LANGUAGES: LangInfo[] = [
  { code: "VI", label: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "EN", label: "English", nativeName: "English" },
  { code: "ZH", label: "Chinese", nativeName: "中文" },
  { code: "JP", label: "Japanese", nativeName: "日本語" },
];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: "VI", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("VI");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
