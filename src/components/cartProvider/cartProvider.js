import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext(); //createContext 선언

export const ApplicationContextProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState([]);
  const [prev, setPrev] = useState([])
  const [popupdiState, setdiPopup] = useState(0);

  const {customerOrder} = prev

  const handleUpdateCart = async element => {
    const response = await fetch(`http://localhost:8000/customer/19428`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customerOrder:[...customerOrder, ...element]
      })
    });
    if(response.ok){
      fetchOptionList()
    }
  };

  const fetchOptionList = () => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:8000/customer/19428");
      if (response.ok) {
        setPrev(await response.json());
      }
    };
    fetchItems();
  }

  const deleteCart = async id => {
    const response = await fetch(`http://localhost:8000/customer/19428/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
    }
  };

  const value = {
    popupdiState,
    setdiPopup,
    cartValue,
    setCartValue,
    handleUpdateCart,
    fetchOptionList,
    customerOrder,
    deleteCart
  };

  useEffect(() => {
    fetchOptionList()
  }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useApplicationContext = () => {
  return useContext(Context);
};
