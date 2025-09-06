import { create } from "zustand";

const useScanStore = create((set) => ({
  scanHistory: [], // stores results of all scans
  addScan: (tool, input, result) =>
    set((state) => ({
      scanHistory: [
        ...state.scanHistory,
        { id: Date.now(), tool, input, result },
      ],
    })),
}));

export default useScanStore;
