import React, { useState, useEffect } from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import Item from "./item";

const SortItems = ({ onItems }) => {
  const [item, setItems] = useState([]);
  const [sort, setsort] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:8000/item");
      if (response.ok) {
        setItems(await response.json());
      }
    };
    fetchItems();
     
  }, []);

  const handleSorted = () => {
    const address = decodeURI(document.location.hash);
    const ooo = address.replace("#", "");
    const sortedCategory = item.filter(element => {
      return element.category === ooo;
    });

    return (
      sortedCategory.map(
        ({ image, underPrice, price, itemName, reviewCounter, id }, idx) => (
          <Link to={`/itemDetail/${id}`} key={idx}>
            <Item
              image={image}
              underPrice={underPrice}
              price={price}
              itemName={itemName}
              id={id}
              reviewCounter={reviewCounter}
            ></Item>
          </Link>
        )
      )
    )
  };

  const title = () => {
    const address = decodeURI(document.location.hash);
    const ooo = address.replace("#", "");

    return (
    <h2 style={{textAlign:"left", padding:"10px", fontSize:"25px", fontWeight:"bold"}}>{ooo}</h2>
    )
  }
  
  return (
    <>
    <Container wsize="header">{title()}</Container>
    <Container
      wsize="header"
      display="df"
      style={{
        justifyContent: "flex-start",
        flexFlow: "row wrap",
        borderTop: "1px solid #D5D5D5"
      }}
    >
      {handleSorted()}
    </Container>
    </>
  );
};

export default SortItems;
