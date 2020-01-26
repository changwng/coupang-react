import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../container";
import Selector from "./selector";
import OptionList from "./optionList";
import { Button } from "../../input";

const Popup = styled.div`
  position: absolute;
  width: 254px;
  height: 115px;
  background: url();
  background: url("../img/imageasset.png");
  background-position: ${({ backPosition }) => backPosition};
  top: -120px;
  left: -90px;
  display: ${({ display }) => (display === 0 ? "none" : "block")};
  transition: 0.5s;
  opacity: ${({ opacity }) => (opacity === 0 ? "0" : "1")};
`;

const OptionController = ({ optionValue }) => {
  const [selectOption, setOption] = useState([]);
  const [popupState, setPopup] = useState(0);
  const [popupdiState, setdiPopup] = useState(0);

  const [state, setState] = useState(false);

  const handleAddCart = () => {
    handleCartValue();
    setdiPopup(1);
    setTimeout(() => {
      setPopup(1);
    }, 10);
    setTimeout(() => {
      setPopup(0);
    }, 2500);
    setTimeout(() => {
      setdiPopup(0);
    }, 3000);
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

  const handleCartValue = () => {
      { selectOption[0]
      ? setState(true)
      : setState(false)}
    }

  return (
    <Container>
      <Selector
        setState={setState}
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
        <Button topButton style={{ margin: "0" }}>
          구매
        </Button>
      
        <Button
          topButton
          onClick={handleAddCart}
          style={{ position: "relative" }}
        >
          <Popup
            opacity={popupState}
            display={popupdiState}
            backPosition={"-217px 0"}
          >
            {state ? (
              <>
                <p style={{ color: "#000", padding: "18px" }}>
                  상품이 장바구니에 추가되었습니다.
                </p>
                <Button subButton>장바구니 바로가기</Button>>
              </>
            ) : (
              <p style={{ color: "#000", padding: "18px" }}>
                추가할 상품이 존재하지 않습니다.
              </p>
            )}
          </Popup>
          장바구니
        </Button>
      </Container>
    </Container>
  );
};

export default React.memo(OptionController);
