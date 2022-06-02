import { createContext, useContext, useState } from "react";

export const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationContextProvider = ({children}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const initalContext = {
    offset,
    setOffset,
    currentPage,
    setCurrentPage,
    total,
    setTotal
  };

  return(
    <NavigationContext.Provider value={initalContext}>
      {children}
    </NavigationContext.Provider>)
};

