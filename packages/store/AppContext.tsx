import React, { useContext, useEffect, useState } from "react";
import { auth, SettingsType } from "firebasepackage";
import { onAuthStateChanged } from "firebase/auth";
import i18next from "i18next";

type LanguageOptions = "de" | "en" | "ro" | "es";

interface AppContextType {
  currentUser: any;
  settings: SettingsType;
  language: string;
  languagePool: string[];
  change_language: (lang: LanguageOptions) => void;
  themeMode: boolean;
  set_theme_mode: (switchOn: boolean) => void;
}

const AppContext = React.createContext<AppContextType>(null!);

export function useAppContext() {
  return useContext(AppContext);
}

export function ContextProvider({
  window,
  children,
}: {
  window: any;
  children: React.ReactNode;
}) {
  let [currentUser, setCurrentUser] = useState<any>(null);
  const [settings, setSettings] = useState<any>();
  const [language, setLanguage] = useState("en");
  const { localStorage } = window;
  const languagePool = ["de", "en", "ro", "es"];
  const [themeMode, setThemeMode] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        let user_email = user && user.email ? user.email : "-";
        setCurrentUser(user);
        localStorage.setItem("user_email", user_email);
      },
      (error) => {
        // alert("error onAuthStateChanged: " + error);
      },
      () => {}
    );

    return () => {
      unsubscribe();
    };
  }, [localStorage]);

  useEffect(() => {
    const user_selected = localStorage.getItem("language");
    if (typeof user_selected === "string") setLanguage(user_selected);

    const theme_mode = localStorage.getItem("theme_mode");
    if (typeof theme_mode === "string" && theme_mode === "dark") {
      setThemeMode(true);
    }
  }, [localStorage]);

  const change_language = async (lang: LanguageOptions) => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const set_theme_mode = (switchOn: boolean) => {
    const code = switchOn ? "dark" : "light";
    setThemeMode(switchOn);
    localStorage.setItem("theme_mode", code);
  };

  let value = {
    currentUser,
    settings,
    language,
    languagePool,
    change_language,
    themeMode,
    set_theme_mode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
