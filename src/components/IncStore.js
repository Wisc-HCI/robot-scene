import create from "zustand";
import produce from "immer";

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

const store = (set) => ({
  forest: { bears: { count: 0 } },
  inc: () =>
    set((state) => {
      state.forest.bears.count += 1;
    })
});

const useIncStore = create(immer(store));

export default useIncStore;