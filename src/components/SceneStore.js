import create from "zustand";
import produce from 'immer';
import { SceneSlice } from "./SceneSlice";

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);


const useSceneStore = create(immer(SceneSlice));

export default useSceneStore;