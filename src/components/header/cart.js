import React from "react";
import styled from "styled-components";
import { useApplicationContext } from "../cartProvider/cartProvider";

const Span = styled.span`
  display: block;
  margin-right: 20px;
  background-position: -112px 0px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  margin:0 15px 8px 22.5px;
`;

const Icon = styled.div`
  display: block;
  width: 40px;
  height: 35px;
  background: url("../img/icon.png");
  margin-right: 20px;
  background-position: -112px 0px;
  text-align: right;
  font-weight: bold;
  line-height: 19px;
  margin:0 15px 8px 15px;
`

const Cart = () => {
  const { customerOrder } = useApplicationContext();

  return (
    <Icon>
      <Span>{(customerOrder || []).length}</Span>
      <p style={{width:"64px", marginTop:"22px", marginLeft:"-13px"}}>장바구니</p>
    </Icon>
  );
};

export default Cart;
