import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext(); //createContext 선언

export const ApplicationContextProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState([]);

  const value = {
    cartValue,
    setCartValue
  };

  useEffect(() => {
    console.log(cartValue);
  }, [cartValue]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useApplicationContext = () => {
  return useContext(Context);
};
