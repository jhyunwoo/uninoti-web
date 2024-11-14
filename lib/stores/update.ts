import { create } from "zustand";

interface UpdateState {
  state: string;
}

interface UpdateAction {
  setUpdate: (state: string) => void;
}

export const useUpdate = create<UpdateState & UpdateAction>((set) => ({
  state: "",
  setUpdate: (state: string) => set(() => ({ state: state })),
}));
