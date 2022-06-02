import { createContext, useContext, useState } from "react";

export const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationContextProvider = ({children}) => {
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [getNextPage, setGetNextPage] = useState(0);

  const initalContext = {
    offset,
    setOffset,
    total,
    setTotal,
    setGetNextPage,
    getNextPage,
  };

  return(
    <NavigationContext.Provider value={initalContext}>
      {children}
    </NavigationContext.Provider>)
};

