import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  user: string;
  score: number;
  setUser: (user: string) => void;
  addToScore: (amount: number) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      user: "",
      score: 0,
      setUser: (user) => set(() => ({ user })),
      addToScore: (amount) => set((state) => ({ score: state.score + amount })),
    }),
    { name: "store" }
  )
);
