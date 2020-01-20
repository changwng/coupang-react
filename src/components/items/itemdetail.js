import React, { useState, useEffect } from "react";
import Items from "./items";
import Item from "./item";

const ItemDetail = ({ match }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `http://localhost:8000/item/${match.params.id}`
      );
      if (response.ok) {
        setItem(await response.json());
      }
    };
    fetchItems();
  }, []);

  return (
    <Item
    image={item.image}
    underPrice={item.underPrice}
    price={item.price}
    itemName={item.itemName}
    id={item.id}
  ></Item>
  );
};

export default ItemDetail;
