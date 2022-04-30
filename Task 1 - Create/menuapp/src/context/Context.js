import React, { useState } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFood, setSelectedFood] = useState([]);
  const [quantity, setQuantity] = useState([]);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        selectedFood,
        setSelectedFood,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
