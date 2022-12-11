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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        let user_email = user && user.email ? user.email : "-";
        if (currentUser !== user) {
          setCurrentUser(user);
        }

        if (localStorage.getItem("user_email") !== user_email) {
          localStorage.setItem("user_email", user_email);
        }
      },
      (error) => {
        // alert("error onAuthStateChanged: " + error);
      },
      () => {}
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, localStorage]);

  useEffect(() => {
    const user_selected = localStorage.getItem("language");
    console.log("Loading saved language: ", user_selected);
    if (typeof user_selected === "string" && user_selected !== "en") {
      i18next.changeLanguage(user_selected);
      setLanguage(user_selected);
    }
  }, [localStorage]);

  const change_language = async (lang: LanguageOptions) => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  let value = {
    currentUser,
    settings,
    language,
    languagePool,
    change_language,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
