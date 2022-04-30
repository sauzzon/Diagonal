import React, { useState, useEffect } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFood, setSelectedFood] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) setIsLoggedIn(true);

    const selFood = localStorage.getItem("selectedFood");
    if (selFood) setSelectedFood(JSON.parse(selFood));

    const qty = localStorage.getItem("quantity");
    if (qty) setQuantity(JSON.parse(qty));
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
