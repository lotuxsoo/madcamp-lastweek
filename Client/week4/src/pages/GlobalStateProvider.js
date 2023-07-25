// GlobalStateProvider.js
import React, { createContext, useContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
