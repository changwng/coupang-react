import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container";
import { Li } from "../input";

const Ul = styled.ul`
  border: 1px solid #eee;
  height: 100px;
  padding: 16px;
  overflow-y: auto;
`;

const OptionList = ({
  selectOption,
  optionCounter,
  handleChengeICounter,
  handleChengeDCounter,
  quantity
}) => {
  return (
    <Ul selectOption>
      {selectOption.map(({ value, id, quantityValue }, idx) => (
        <Li
          id={idx}
          key={idx}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
            padding: "10px 0"
          }}
        >
          {value}
          <Container
            display="df"
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <span style={{ width: "20px", heigth: "20px" }}>
              {quantityValue}
            </span>
            <Container display="df" style={{ flexDirection: "column" }}>
              <button
                onClick={() => {
                  handleChengeICounter(id);
                }}
                style={{
                  width: "12px",
                  height: "8px",
                  background: "url('../img/imageasset.png')",
                  backgroundPosition: "-386px -187px",
                  border: "none"
                }}
              ></button>
              <button
                onClick={() => {
                  handleChengeDCounter(id);
                }}
                style={{
                  width: "12px",
                  height: "8px",
                  background: "url('../img/imageasset.png')",
                  backgroundPosition: "-386px -193px",
                  border: "none"
                }}
              ></button>
            </Container>
          </Container>
        </Li>
      ))}
    </Ul>
  );
};

export default OptionList;
