import React, { useState } from "react";
import styled from "styled-components";
import { useApplicationContext } from "../cartProvider/cartProvider";

const Span = styled.span`
  display: block;
  width: 40px;
  height: 35px;
  background: url("../img/icon.png");
  margin-right: 20px;
  background-position: -112px 0px;
  text-align: right;
  letter-spacing: 9px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  margin:0 15px 8px 15px;
`;

const Cart = () => {
  const { customerOrder } = useApplicationContext();

  return (
    <div>
      <Span>{(customerOrder || []).length}</Span>
      <p>장바구니</p>
    </div>
  );
};

export default Cart;
