import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  user: string;
  setUser: (user: string) => void;
  //
  themeMode: string;
  setThemeMode: (mode: string) => void;
  toggleThemeMode: () => void;
  //
  language: string;
  setLanguage: (abv: string) => void;
  //
  score: number;
  addToScore: (amount: number) => void;
}

// TODO: on first load -> changeLanguage to match the persisted value

export const useStore = create<Store>()(
  persist(
    (set) => ({
      user: "",
      setUser: (user) => set(() => ({ user })),
      //
      themeMode: "light",
      setThemeMode: (mode: string) => set(() => ({ themeMode: mode })),
      toggleThemeMode: () =>
        set((state) => ({
          themeMode: state.themeMode === "light" ? "dark" : "light",
        })),
      //
      language: "en",
      setLanguage: (language: string) => {
        // zustand persists the data by using localStorage. Now only need to load <lang>.
        // localStorage.setItem("lang", language);
        set(() => ({ language }));
      },
      //
      score: 0,
      addToScore: (amount) => set((state) => ({ score: state.score + amount })),
    }),
    { name: "store" }
  )
);
