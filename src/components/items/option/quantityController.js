import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../input";
import Container from "../../container";

const QuantityController = ({
  onChengeICounter,
  onChengeDCounter,
  id,
  deletOption
}) => {
  return (
    <Container
      display="df"
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Container display="df" style={{ flexDirection: "column" }}>
        <Button
          quantityBtn
          onClick={() => {
            onChengeICounter(id);
          }}
          backPosition={"-386px -187px"}
        ></Button>
        <Button
          quantityBtn
          onClick={() => {
            onChengeDCounter(id);
          }}
          backPosition={"-386px -193px"}
        ></Button>
      </Container>
      <Button
        backPosition={"-346px -327px"}
        xBox
        onClick={() => deletOption(id)}
      ></Button>
    </Container>
  );
};

export default QuantityController;
