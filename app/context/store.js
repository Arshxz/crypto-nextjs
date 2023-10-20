"use client"
import { createContext, useContext, useState } from "react";
export const Store = createContext();

export const AnimationProvider = ({ children }) => {
    const [state, setState] = useState("jbjhbj");

    return (
        <Store.Provider value={{ state, setState }}>
            {children}
        </Store.Provider>
    );
}

export const Animation = () => useContext(Store)