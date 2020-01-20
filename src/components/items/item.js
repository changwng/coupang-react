import React from "react";
import Container from "../container";
import { Text, Ctext } from "../text";

const Item = ({ image, underPrice, price, itemName, id }) => {
  return (
    <Container
      item
      wsize="img"
      hsize="item"
      style={{
        margin: "100px 0 0 0",
        padding: "15px",
        transition: ".2s",
        cursor: "pointer"
      }}
    >
      <Container
        wsize="img"
        hsize="img"
        style={{
          background: `url(../img/${image}) no-repeat`,
          backgroundSize: "contain"
        }}
      ></Container>
      <Text size="huge" bold style={{ margin: "10px 0 5px 0" }}>
        {itemName}
      </Text>
      <Ctext size="mini" color="underPrice" style={{ margin: "0" }}>
        {underPrice} 원
      </Ctext>
      <Text size="medium" color="realPrice" bold style={{ margin: "0" }}>
        {price} 원
      </Text>
      <Text size="tiny" color="review" style={{ margin: "5px 0 0" }}>
        상품리뷰 (23)
      </Text>
    </Container>
  );
};

export default Item;
