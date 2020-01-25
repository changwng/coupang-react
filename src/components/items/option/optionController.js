import React, { useState } from "react";
import Container from "../../container";
import Selector from "./selector";
import OptionList from "./optionList";
import { Button } from "../../input";

const OptionController = ({ optionValue }) => {
  const [selectOption, setOption] = useState([]);

  const handleAddCart = () => {
    console.log(selectOption);
  };

  const handleChengeICounter = id => {
    setOption(
      selectOption.map(optionValue =>
        optionValue.id === id
          ? { ...optionValue, quantityValue: optionValue.quantityValue + 1 }
          : optionValue
      )
    );
  };
  const handleChengeDCounter = id => {
    setOption(
      selectOption.map(optionValue => {
        if (optionValue.id === id && optionValue.quantityValue > 1) {
          return {
            ...optionValue,
            quantityValue: optionValue.quantityValue - 1
          };
        } else {
          return optionValue;
        }
      })
    );
  };

  const deletOption = e => {
    const newOptionList = selectOption.filter(checked => {
      return checked.id !== e;
    });
    setOption(newOptionList);
  };

  return (
    <Container>
      <Selector
        handleChengeICounter={handleChengeICounter}
        optionValue={optionValue}
        setOption={setOption}
        selectOption={selectOption}
      />
      <OptionList
        deletOption={deletOption}
        selectOption={selectOption}
        handleChengeICounter={handleChengeICounter}
        handleChengeDCounter={handleChengeDCounter}
      />
      <Container
        display="df"
        wsize="full"
        style={{ justifyContent: "center", marginTop: "16px" }}
      >
        <Button style={{ margin: "0" }}>구매</Button>
        <Button>장바구니</Button>
      </Container>
    </Container>
  );
};

export default React.memo(OptionController);
