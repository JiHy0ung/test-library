import { create } from "zustand";

const loginStore = create((set) => ({
  authenticate: false,
  login: () => set({ authenticate: true }),
  logout: () => set({ authenticate: false }),
}));

export default loginStore;
