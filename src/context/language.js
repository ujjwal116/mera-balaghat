
import { createContext, useContext } from 'react';

const LanguageContext = createContext({
  language: 'hi',
  setLanguage: () => {}
})
export const LanguageProvider = LanguageContext.Provider;

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}