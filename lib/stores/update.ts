import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UpdateState {
  state: string;
}

interface UpdateAction {
  setUpdate: (state: string) => void;
}

export const useUpdate = create(
  devtools<UpdateState & UpdateAction>((set) => ({
    state: "",
    setUpdate: (state: string) => set(() => ({ state: state })),
  })),
);
