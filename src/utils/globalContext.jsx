import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [shades, setShades] = useState([]);
  return (
    <GlobalContext.Provider value={{ shades, setShades }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const GetGlobalContexts = () => useContext(GlobalContext);
