import React from "react";
import styled from "styled-components";
import Container from "../../container";
import { Li } from "../../input";
import QuantityController from "./quantityController";

const Ul = styled.ul`
  border: 1px solid #eee;
  height: 100px;
  padding: 16px;
  overflow-y: auto;
`;

const OptionList = ({
  deletOption,
  selectOption,
  handleChengeICounter,
  handleChengeDCounter
}) => {
  return (
    <Ul selectOption>
      {selectOption.map(({ value, id, quantityValue }, idx) => (
        <Li id={idx} key={idx} option>
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
            <QuantityController
              deletOption={deletOption}
              id={id}
              onChengeICounter={handleChengeICounter}
              onChengeDCounter={handleChengeDCounter}
            />
          </Container>
        </Li>
      ))}
    </Ul>
  );
};

export default React.memo(OptionList);
