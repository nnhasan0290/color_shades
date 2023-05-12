import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [color, setColor] = useState("#FFFFFF")
  const [h2l, setH2l] = useState(false);
  
  return (
    <GlobalContext.Provider value={{color, setColor, h2l, setH2l }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const GetGlobalContexts = () => useContext(GlobalContext);
