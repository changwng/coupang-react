import React, { useEffect, useState } from "react";
import Container from "../container";
import { Logo, Button } from "../input";
import { Text } from "../text";
import { Link } from "react-router-dom";
import { useApplicationContext } from "../cartProvider/cartProvider";

const CartPage = () => {
  const [state, setState] = useState([]);
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

  const handleChangeQuantityValue = e => {
    const changeId =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

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
      if (element.id === parseInt(changeId)) {
        const repairObject = {
          checked,
          id,
          itemid,
          price,
          itemName,
          value,
          quantityValue: e.target.value
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
  let value = 0;
  const deliveryAccount = idx => {
    const readyToOptions = (customerOrder || []).sort((a, b) => {
      //리스트를 정렬
      return a.itemid - b.itemid;
    });

    const ABC = readyToOptions.filter(({ itemid }, index) => {
      //정렬된 리스트에서 중복이 있는값 추출
      return readyToOptions.findIndex(i => i.itemid === itemid) === index;
    });
    let normal = [];
    const newAbc = () => {
      //정렬된 리스트에서 중복값의 첫 인덱스번호 추출
      ABC.forEach(element => {
        const aa = readyToOptions.findIndex(i => i.itemid === element.itemid);
        normal.push(aa); //추출된 인덱스번호 배열에 저장
      });
    };
    newAbc();
    const firstOption = normal.indexOf(idx); //현재 그려지고 있는 리스트가 배열에 존재하는지 검사

    if (firstOption !== -1) {
      // 존재한다면 배송비 그림
      //해당 인덱스가 몇번 중복되었는지 파악
      const thisIndex = readyToOptions[idx];
      console.log(value);
      const result = readyToOptions.filter(element => {
        return element.itemid === thisIndex.itemid;
      });

      return (
        <td
          rowSpan={result.length}
          style={{
            border: "1px solid #DDD",
            textAlign: "center",
            verticalAlign: "middle"
          }}
        >
          2,500원
        </td>
      );
    }
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
    const a = deliveryPrice() + totalPriceResult()
    return String(a).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const rendering = () => {
    if ((customerOrder || []).length !== 0) {
      return (customerOrder || []).map((item, idx) => {
        const Price = item.price;
        const quantity = item.quantityValue;
        const realPrice = parseInt(Price) * parseInt(quantity);

        return (
          <tr id={item.id} key={idx} style={{ borderBottom: "1px solid #DDD" }}>
            <td
              style={{
                width: "20px",
                height: "20px",
                verticalAlign: "middle",
                padding: "30px"
              }}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={handleChecked}
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
                      {String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                    <select
                      defaultValue={`${item.quantityValue}`}
                      onChange={handleChangeQuantityValue}
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
            <td
              style={{
                border: "1px solid #DDD",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {String(realPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
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
      <Container
        display="df"
        wsize="full"
        style={{
          height: "124px",
          background: "#EFEFEF",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text bold size="big" style={{ padding: "15px" }}>
          상품가격 {totalPriceResult(1)}원
        </Text>
        <Text bold size="big" style={{ padding: "15px" }}>
          배송비 {deliveryPrice()}원
        </Text>
        <Text bold size="big" style={{ padding: "15px" }}>
          총 주문금액 {rerere()}원
        </Text>
      </Container>
      <div style={{ padding: "10px" }}>
        <Button onClick={allclear} checkButton>
          전체삭제
        </Button>
        <Button onClick={checkedOptionDelete} checkButton>
          선택상품 삭제
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Button subButton>상품주문</Button>
      </div>
    </Container>
  );
};

export default CartPage;
