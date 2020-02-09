import React, { useEffect, useState } from "react";
import Container from "../container";
import { Logo, Button } from "../input";
import { Text } from "../text";
import { Link } from "react-router-dom";
import { useApplicationContext } from "../cartProvider/cartProvider";
import CheckBox from "./checkbox";
import CartFooter from "./cartFooter";
import TableSelect from "./tableSelector";
import DeleteButton from "./deleteButton";

const CartPage = () => {
  const [state, setState] = useState([]);
  const { customerOrder, handleChangeCart } = useApplicationContext();

  const handleSortCart = () => {
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
    const readyToOptions = (customerOrder || []).sort((a, b) => {
      return a.itemid - b.itemid;
    });

    const ABC = readyToOptions.filter(({ itemid }, index) => {
      return readyToOptions.findIndex(i => i.itemid === itemid) === index;
    });
    let normal = [];
    ABC.forEach(element => {
      const aa = readyToOptions.findIndex(i => i.itemid === element.itemid);
      normal.push(aa);
    });
    const firstOption = normal.indexOf(idx);

    if (firstOption !== -1) {
      const thisIndex = readyToOptions[idx];
      const result = readyToOptions.filter(element => {
        return element.itemid === thisIndex.itemid;
      });

      return (
        <td
          rowSpan={result.length}
          style={{
            borderLeft: "1px solid #DDD",
            textAlign: "center",
            verticalAlign: "middle"
          }}
        >
          2,500원
        </td>
      );
    }
  };

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
              <CheckBox checked={item.checked} />
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
                    <TableSelect item={item} />
                  </span>
                  <DeleteButton/>
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
      <CartFooter />
    </Container>
  );
};

export default React.memo(CartPage);
