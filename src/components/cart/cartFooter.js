import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import { Text } from "../text";
import { useApplicationContext } from "../cartProvider/cartProvider";
import { Button } from "../input";

const CartFooter = () => {
  const { customerOrder, handleChangeCart } = useApplicationContext();
  const checkedOptionDelete = () => {
    const clear = customerOrder.filter(item => item.checked === false);
    handleChangeCart(clear);
  };
  const allclear = () => {
    handleChangeCart([]);
  };

  const deliveryPrice = () => {
    const readyToOptions = (customerOrder || []).sort((a, b) => {
      return a.itemid - b.itemid;
    });

    const ABC = readyToOptions.filter(({ itemid }, index) => {
      return readyToOptions.findIndex(i => i.itemid === itemid) === index;
    });

    return ABC.length * 2500;
  };
  const totalPriceResult = a => {
    const Price = (customerOrder || []).map(element => {
      return parseInt(element.price * element.quantityValue);
    });

    const result = Price.reduce((acc, cur, i) => {
      return acc + cur;
    }, 0);

    if (a) {
      return String(result).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return result;
    }
  };

  const rerere = () => {
    const a = deliveryPrice() + totalPriceResult();
    return String(a).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <Container
        display="df"
        wsize="full"
        hsize="table"
        allCenter
        style={{
          background: "#EFEFEF",
          marginTop: "20px",
          border: "4px solid #ccc"
        }}
      >
        {(customerOrder || []).length !== 0 ? (
          <>
            <Text bold size="big" style={{ padding: "15px" }}>
              상품가격 {totalPriceResult(1)}원
            </Text>
            <Text bold size="big" style={{ padding: "15px" }}>
              배송비 {deliveryPrice()}원
            </Text>
            <Text bold size="big" style={{ padding: "15px" }}>
              총 주문금액 {rerere()}원
            </Text>
          </>
        ) : (
          <Link to="/">
            <Text bold size="huge">
              지금 쇼핑하러 가기
            </Text>
          </Link>
        )}
      </Container>
      {(customerOrder || []).length !== 0 ? (
        <>
          <div style={{ padding: "10px" }}>
            <Button onClick={allclear} checkButton>
              전체삭제
            </Button>
            <Button onClick={checkedOptionDelete} checkButton>
              선택상품 삭제
            </Button>
          </div>
          <Container allCenter display="df" wsize="full">
            <Button subButton>상품주문</Button>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(CartFooter);
