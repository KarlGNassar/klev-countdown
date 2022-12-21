import create from "zustand";
import { CursorStore } from "../interface/CursorStore";

export const useCursorStore = create<CursorStore>((set) => ({
  cursorType: false,
  setCursorType: (type) => {
    set((_) => ({
      cursorType: type,
    }));
  },
}));
