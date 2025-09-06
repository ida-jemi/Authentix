import { create } from "zustand";

export const useHistoryStore = create((set) => ({
  history: [],

  addHistory: (item) =>
    set((state) => ({
      history: [
        ...state.history,
        { id: Date.now(), ...item } // unique id
      ],
    })),

  clearHistory: () => set({ history: [] }),
}));
