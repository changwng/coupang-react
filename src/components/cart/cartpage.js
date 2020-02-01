import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../container";
import { Logo } from "../input";
import { Text } from "../text";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:8000/customer/19428");
      if (response.ok) {
        setCartList(await response.json());
      }
    };
    fetchItems();
  }, []);

  const { customerOrder } = cartList;

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
          일반구매(2)
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          background: "#EFEFEF",
          marginBottom: "16px",
          borderTop: "1px solid #D8D8D8",
          borderBottom: "1px solid #D8D8D8",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "0 300px"
          }}
        >
          상품정보
        </span>
        <span
          style={{
            display: "inline-block",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "0 100px"
          }}
        >
          상품금액
        </span>
        <span
          style={{
            display: "inline-block",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "0 40px"
          }}
        >
          배송비
        </span>
      </div>
      <ul style={{ width: "100%", height: "300px" }}>
        {(customerOrder || []).map((item, idx) => (
          <li key={idx} style={{margin:"20px 0"}}>
            <Text style={{minWidth:"100px", textAlign:"center"}}>{idx+1}</Text>
            <Text style={{minWidth:"480px",maxWidth:"480px", textAlign:"center"}}>{item.itemName}</Text>
            <Text style={{minWidth:"130px", textAlign:"center"}}>{item.value}</Text>
            <Text style={{paddingLeft:"25px", minWidth:"150px", textAlign:"center"}}>{item.price}원</Text>
            <Text style={{paddingLeft:"55px", minWidth:"120px", textAlign:"center"}}>2500원</Text>
          </li>
        ))}
      </ul>
      <div
        style={{ width: "100%", height: "124px", background: "#EFEFEF" }}
      ></div>
    </Container>
  );
};

export default CartPage;
