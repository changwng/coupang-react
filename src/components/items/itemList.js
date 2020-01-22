import React, { useState, useEffect } from "react";
import Container from "../container";
import { Img, Li, Button } from "../input";
import { Text } from "../text";

const ItemList = ({ selectOption }) => {

  const [optionCounter, setoptionCounter] = useState(1);
  const handleChengeICounter = () => {
    setoptionCounter(optionCounter + 1);
  };
  const handleChengeDCounter = () => {
    setoptionCounter(optionCounter - 1);
  };

  return (
        <ul
          style={{ border: "1px solid #eee", height: "100px", padding: "16px" }}
        >
          {selectOption.map(({ value }, idx) => (
            <Li
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
                  {optionCounter}
                </span>
                <Container display="df" style={{ flexDirection: "column" }}>
                  <button
                    onClick={handleChengeICounter}
                    style={{
                      width: "12px",
                      height: "8px",
                      background: "url('../img/imageasset.png')",
                      backgroundPosition: "-386px -187px",
                      border: "none"
                    }}
                  ></button>
                  <button
                    onClick={handleChengeDCounter}
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
        </ul>
  );
};

export default ItemList;
