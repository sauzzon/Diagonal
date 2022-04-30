import React, { useState } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFood, setSelectedFood] = useState([]);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        selectedFood,
        setSelectedFood,
      }}
    >
      {children}
    </Context.Provider>
  );
};
