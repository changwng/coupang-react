import React from "react";
import styled, { css } from "styled-components";
import Container from "../../container";

const Button = styled.button`
  ${({ xBox }) =>
    xBox &&
    css`
      width: 14px;
      height: 14px;
      border: none;
      margin:1px 0 0 20px;
      background: url("../img/imageasset.png");
      background-position: ${({ backPosition }) => backPosition};
    `}
  ${({ quantityBtn }) =>
    quantityBtn &&
    css`
      width: 12px;
      height: 8px;
      background: url("../img/imageasset.png");
      background-position: ${({ backPosition }) => backPosition};
      border: none;
    `}
`;

const QuantityController = ({
  onChengeICounter,
  onChengeDCounter,
  id,
  deletOption
}) => {
  return (
    <Container display="df" style={{ flexDirection: "row", alignItems:"center" }}>
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
      >
      </Button>
    </Container>
  );
};

export default React.memo(QuantityController);
