import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext(); //createContext 선언

export const ApplicationContextProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState([]);
  const [testState, setTestState] = useState(0);
  const [popupdiState, setdiPopup] = useState(0);
  const value = {
    popupdiState,
    setdiPopup,
    setTestState,
    testState,
    cartValue,
    setCartValue
  };

  useEffect(() => {}, [testState]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useApplicationContext = () => {
  return useContext(Context);
};