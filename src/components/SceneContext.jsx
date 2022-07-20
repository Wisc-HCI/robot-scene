import React from 'react';
import {createContext, useContext} from 'react';
import { useDefaultSceneStore } from './defaultStore';
import { useStore } from 'zustand'

export const SceneContext = createContext();

export const useSceneStore = (selector, equalityFn) => {
    const store = useContext(SceneContext);
    return useStore(store, selector, equalityFn)
}

export const SceneProvider = ({store, children, debug=false}) => {
    if (debug) {
        console.log('SceneProvider regenerated')
    }
    return (
        <SceneContext.Provider value={store ? store : useDefaultSceneStore}>
            {children}
        </SceneContext.Provider>
    )
}
