import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Container from "../../container";
import Selector from "./selector";
import OptionList from "./optionList";
import { Button } from "../../input";
import { Text } from "../../text";
import { useApplicationContext } from "../../cartProvider/cartProvider";

const Popup = styled.div`
  position: absolute;
  width: 254px;
  height: 115px;
  background: url("../img/imageasset.png");
  background-position: ${({ backPosition }) => backPosition};
  top: -120px;
  left: -90px;
  display: ${({ display }) => (display === 0 ? "none" : "flex")};
  transition: 0.5s;
  opacity: ${({ opacity }) => (opacity === 0 ? "0" : "1")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OptionController = ({ optionValue, id: Itemid, itemName, price }) => {
  const {
    setCartValue,
    cartValue,
    popupdiState,
    setdiPopup,
    handleUpdateCart,
    fetchOptionList,
    customerOrder
  } = useApplicationContext();

  const [selectOption, setOption] = useState([]);
  const [popupState, setPopup] = useState(0);

  const [cartState, setCartState] = useState(0);
  const disalbledControll = useRef();
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
    saveOptions(selectOption);
  };

  const disableControler = () => {
    if (popupdiState === 1) {
      disalbledControll.current.setAttribute("disabled", true);
    } else {
      disalbledControll.current.removeAttribute("disabled");
    }
  };

  const handleCartValue = () => (selectOption[0] ? setCartState(1) : setCartState(0));

  useEffect(() => {
    disableControler();
  }, [popupdiState]);

  const saveOptions = value => {
    const newCartArr = []
     value.forEach( element => {
      const id = element.itemid;
      const valued = element.value;
      let ExistenceStatus = customerOrder.findIndex(i => i.itemid === id && i.value === valued);
       if (ExistenceStatus === -1) {
        newCartArr.push(element)
        console.log("장바구니 추가 실행");
      } else {
        setCartState(3);
      }
    });
    handleUpdateCart(newCartArr)
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

  const rendering = cartState => {
    switch (cartState) {
      case 0: {
        return (
          <Text size="tiny" message style={{ marginTop: "-10px" }}>
            추가할 상품이 존재하지 않습니다.
          </Text>
        );
      }
      case 1: {
        return (
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Text size="tiny" message>
              상품이 장바구니에 추가되었습니다.
            </Text>
            <Button subButton>장바구니 바로가기</Button>
          </div>
        );
      }
      case 3: {
        return (
          <Text size="tiny" message style={{ marginTop: "-10px" }}>
            이미 장바구니에 담긴 상품입니다.
          </Text>
        );
      }
    }
  };

  return (
    <Container>
      <Selector
        itemid={Itemid}
        handleChengeICounter={handleChengeICounter}
        optionValue={optionValue}
        setOption={setOption}
        selectOption={selectOption}
        itemName={itemName}
        price={price}
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
        <div
          style={{
            position: "relative"
          }}
        >
          <Popup
            opacity={popupState}
            display={popupdiState}
            backPosition={"-217px 0"}
          >
            {rendering(cartState)}
          </Popup>
          <Button ref={disalbledControll} topButton onClick={handleAddCart}>
            장바구니
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default OptionController;
