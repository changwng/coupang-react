import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container";
import { Button, Input, Li, Logo } from "../input";
import { Link } from "react-router-dom";
import Cart from "./cart";
import CartegoryPopup from './category'

const Header = () => {
  const [categoryState, setCategoryState] = useState(false);
  const categoryBoxDown = () => {
    setCategoryState(true);
  };
  const categoryBoxHidden = () => {
    setCategoryState(false);
  };

  return (
    <Container
      wsize="header"
      hsize="header"
      display="df"
      style={{ alignItems: "center" }}
    >
      <Container
         onMouseLeave={categoryBoxHidden} onMouseEnter={categoryBoxDown}
        wsize="button"
        hsize="header"
        display="df"
        style={{
          position:"relative",
          background: "#4285F4",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "27px",
            height: "18px",
            background: `url('../img/menu.png')`
          }}
        ></div>
        <span style={{ fontSize: "11px", color: "#fff", marginTop: "5px" }} >
          카테고리
        </span>
        {categoryState && <CartegoryPopup/>}
      </Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <Link to="/">
            <Logo></Logo>
          </Link>
          <div
            style={{
              marginLeft: "30px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <form>
              <Input></Input>
              <Button topButton>검색</Button>
            </form>
          </div>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              padding: "0",
              margin: "20px 0 0 43px"
            }}
          >
            <Li>식품</Li>
            <Li>가전</Li>
            <Li>미용</Li>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", marginLeft: "43px" }}>
        <div style={{ marginRight: "20px" }}>
          <span
            style={{
              display: "block",
              width: "29px",
              height: "31px",
              background: `url('../img/icon.png')`,
              margin: "2px 17px 10px 17px",
              backgroundPosition: "-112px -36px"
            }}
          ></span>
          <p>마이유팡</p>
        </div>
        <Link to={"/cartpage"} style={{ textDecoration: "none" }}>
          <Cart />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
