import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  //global color state
  const [color, setColor] = useState("#4A90E2")
  //global high to low state
  const [h2l, setH2l] = useState(false);
  
  return (
    <GlobalContext.Provider value={{color, setColor, h2l, setH2l }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

//exporting the context from here
export const GetGlobalContexts = () => useContext(GlobalContext);
