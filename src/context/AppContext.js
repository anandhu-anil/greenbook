import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState('no value');

    const value = {
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};