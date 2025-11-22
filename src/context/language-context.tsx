"use client";

import { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: TranslationKey, replacements?: Record<string, string>) => {
    const keys = key.split('.');
    let result: any = translations[language];

    for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
            result = result[k];
        } else {
            // Fallback to English if key not found
            result = translations.en;
            for (const k_en of keys) {
                if (result && typeof result === 'object' && k_en in result) {
                    result = result[k_en];
                } else {
                    return key; // Return the key itself if not found even in English
                }
            }
            break; // Exit after fallback
        }
    }
    
    if (typeof result === 'string' && replacements) {
        return Object.entries(replacements).reduce((acc, [placeholder, value]) => {
            return acc.replace(`{${placeholder}}`, value);
        }, result);
    }

    return typeof result === 'string' ? result : key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
