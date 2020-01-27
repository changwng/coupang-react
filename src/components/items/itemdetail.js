import React, { useState, useEffect } from "react";
import Container from "../container";
import { Img } from "../input";
import { Text } from "../text";
import OptionController from './option/optionController'

const ItemDetail = ({
  match: {
    params: { id }
  }
}) => {
  const [item, setItem] = useState([]);

  const { image, itemName, price, reviewCounter, option } = item;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:8000/item/${id}`);
      if (response.ok) {
        setItem(await response.json());
      }
    };
    fetchItems();
  }, [id]);


  return (
    <Container dispaly="df" style={{ flexDirection: "row" }}>
      <Container
        display="dif"
        style={{ flexDirection: "row", verticalAlign: "top" }}
      >
        <Container>
          <Img wsize="smallImg" hsize="smallImg" background={image}></Img>
        </Container>
        <Img wsize="bigImg" hsize="bigImg" background={image}></Img>
      </Container>
      <Container
        display="dif"
        hsize="full"
        style={{
          flexDirection: "column",
          padding: "10px 30px",
          margin: "5px 30px",
          width: "380px"
        }}
      >
        <Text size="huge" bold>
          {itemName}
        </Text>
        <Text
          size="large"
          color="review"
          style={{ borderBottom: "1px solid #D5D5D5", padding: "15px 0" }}
        >
          상품리뷰 ({reviewCounter})
        </Text>
        <Text
          size="huge"
          color="realPrice"
          bold
          style={{
            borderBottom: "1px solid #D5D5D5",
            padding: "15px 0",
            marginBottom: "15px"
          }}
        >
          {price}
        </Text>
        <Text size="large" color="review" style={{ marginBottom: "15px" }}>
          무료배송 오늘내 도착
        </Text>
          <OptionController optionValue={option} id={id}/>
      </Container>
    </Container>
  );
};

export default ItemDetail;
