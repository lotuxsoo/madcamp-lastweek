import React, { createContext, useContext, useState } from "react";

// Context 객체 생성
export const GlobalStateContext = createContext();

//
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
