import React, { useState, useEffect } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFood, setSelectedFood] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) setIsLoggedIn(true);
  }, []);

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
