import React, { useEffect, useState } from "react";
import Container from "../container";
import { Logo, Button } from "../input";
import { Text } from "../text";
import { Link } from "react-router-dom";
import { useApplicationContext } from "../cartProvider/cartProvider";

const CartPage = () => {
  const [Arr, setArr] = useState([]);
  const { customerOrder, handleChangeCart } = useApplicationContext();

  const deleteCartList = e => {
    const target =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    const clearOptionList = customerOrder.filter(function(element) {
      return element.id !== parseInt(target);
    });
    handleChangeCart(clearOptionList);
  };

  const handleChecked = e => {
    const checkedBoxId = e.target.parentNode.parentNode.id;
    const modify = customerOrder.map(element => {
      const {
        checked,
        id,
        price,
        itemName,
        itemid,
        value,
        quantityValue
      } = element;
      if (element.id === parseInt(checkedBoxId)) {
        const repairObject = {
          checked: !checked,
          id,
          itemid,
          price,
          itemName,
          value,
          quantityValue
        };
        return repairObject;
      } else {
        return element;
      }
    });

    handleChangeCart(modify);
  };

  const checkedOptionDelete = () => {
    const clear = customerOrder.filter(item => item.checked === false);
    handleChangeCart(clear);
  };
  const allclear = () => {
    handleChangeCart([]);
  };

  const handleSortCart = () => {
    //정렬
    const readyToOptions = (customerOrder || []).sort((a, b) => {
      return a.itemid - b.itemid;
    });
    handleChangeCart(readyToOptions);
  };

  useEffect(() => {
    if (customerOrder) {
      handleSortCart();
    }
  }, []);

  const deliveryAccount = idx => {
    const readyToOptions = (customerOrder || []).sort((a, b) => {//리스트를 정렬
      return a.itemid - b.itemid;
    });

    const ABC = readyToOptions.filter(({ itemid }, index) => { //정렬된 리스트에서 중복값 추출
      return readyToOptions.findIndex(i => i.itemid === itemid) === index;
    });
    let normal = [];
    const newAbc = () => { //정렬된 리스트에서 중복값의 첫 인덱스번호 추출
      ABC.forEach(element => {
        const aa = readyToOptions.findIndex(i => i.itemid === element.itemid);
        normal.push(aa); //추출된 인덱스번호 배열에 저장
      });
    };
    newAbc();
    const firstOption = normal.indexOf(idx); //현재 그려지고 있는 리스트가 배열에 존재하는지 검사

    if (firstOption !== -1) { // 존재한다면 배송비 그림

    //해당 인덱스가 몇번 중복되었는지 파악
    const thisIndex = readyToOptions[idx]

    const result = readyToOptions.filter(element => {
      return element.itemid === thisIndex.itemid
    })

      return (
        <td rowSpan={result.length}
          style={{ border: "1px solid #DDD", textAlign: "center" }}
        >
          2500원
        </td>
      );
    }
  };

  const rendering = () => {
    if ((customerOrder || []).length !== 0) {
      return (customerOrder || []).map((item, idx) => {
        const Price = item.price;
        const quantity = item.quantityValue;
        const newPrice = Price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const realPrice = parseInt(Price) * parseInt(quantity);
        const resultPrice = String(realPrice);
        const totalPrice = resultPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return (
          <tr id={item.id} key={idx} style={{ borderBottom: "1px solid #DDD" }}>
            <td
              style={{
                width: "20px",
                height: "20px",
                position: "relative",
                padding: "0 30px"
              }}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={handleChecked}
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              />
            </td>
            <td style={{ borderRight: "1px solid #DDD", padding: "14px 0" }}>
              <div>
                <div style={{ height: "30px", paddingBottom: "10px" }}>
                  <Text
                    bold
                    size="large"
                    style={{
                      height: "30px",
                      lineHeight: "30px",
                      display: "inline-block",
                      minWidth: "720px",
                      maxWidth: "720px",
                      paddingLeft: "30px",
                      paddingBottom: "5px",
                      borderBottom: "1px solid #DDD"
                    }}
                  >
                    {item.itemName}
                  </Text>
                </div>
                <div
                  style={{
                    height: "30px",
                    lineHeight: "30px",
                    display: "inline-block",
                    minWidth: "600px",
                    maxWidth: "600px",
                    paddingLeft: "30px"
                  }}
                >
                  <Text
                    color="underPrice"
                    style={{
                      display: "inline-block",
                      minWidth: "370px",
                      maxWidth: "370px"
                    }}
                  >
                    {item.value}
                  </Text>
                  <span>
                    <span
                      style={{
                        padding: "0 20px",
                        color: "#ccc",
                        display: "inline-block",
                        minWidth: "60px",
                        maxWidth: "60px"
                      }}
                    >
                      {newPrice}
                    </span>
                    <select
                      defaultValue={`${item.quantityValue}`}
                      style={{
                        border: "1px solid #eee",
                        width: "50px",
                        color: "#000",
                        marginBottom: "15px",
                        padding: "5px",
                        marginRight: "35px"
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option>10+</option>
                    </select>
                  </span>
                  <span>
                    <button onClick={deleteCartList}>X</button>
                  </span>
                </div>
              </div>
            </td>
            <td style={{ border: "1px solid #DDD", textAlign: "center" }}>
              {totalPrice}원
            </td>
            {deliveryAccount(idx)}
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td
            colSpan="4"
            style={{
              textAlign: "center",
              height: "300px",
              lineHeight: "300px"
            }}
          >
            장바구니가 비어있습니다.
          </td>
        </tr>
      );
    }
  };

  return (
    <Container wsize="header">
      <Link to="/">
        <Logo />
      </Link>
      <h2
        style={{
          display: "inline-block",
          fontSize: "25px",
          fontWeight: "bold",
          margin: "30px 40px"
        }}
      >
        장바구니
      </h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "65px",
          background: "#EFEFEF",
          marginBottom: "16px",
          alignItems: "center"
        }}
      >
        <span
          style={{ fontSize: "14px", fontWeight: "bold", padding: "0 50px" }}
        >
          일반구매({(customerOrder || []).length})
        </span>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th
              colSpan="2"
              style={{
                borderTop: "1px solid #D8D8D8",
                borderBottom: "1px solid #D8D8D8",
                background: "#EFEFEF",
                height: "45px",
                lineHeight: "45px",
                padding: "0"
              }}
            >
              <span>상품정보</span>
            </th>
            <th
              style={{
                borderTop: "1px solid #D8D8D8",
                borderBottom: "1px solid #D8D8D8",
                background: "#EFEFEF",
                width: "100px",
                height: "45px",
                lineHeight: "45px",
                padding: "0"
              }}
            >
              <span>상품금액</span>
            </th>
            <th
              style={{
                borderTop: "1px solid #D8D8D8",
                borderBottom: "1px solid #D8D8D8",
                background: "#EFEFEF",
                width: "100px",
                height: "45px",
                lineHeight: "45px",
                padding: "0"
              }}
            >
              <span>배송비</span>
            </th>
          </tr>
        </thead>
        <tbody>{rendering()}</tbody>
      </table>
      <div style={{ width: "100%", height: "124px", background: "#EFEFEF" }}>
        <div>
          <button onClick={allclear}>전체삭제</button>
          <button onClick={checkedOptionDelete}>선택상품 삭제</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Button onClick={handleSortCart}>상품주문</Button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
