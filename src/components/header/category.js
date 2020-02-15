import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Popup = styled.ul`
  width: 250px;
  border: 1px solid #ddd;
  position: absolute;
  background: #fff;
  top: 120px;
  margin-left:65px;
  z-index:9;
`;

const Li = styled.li`
display:flex;
margin:16px;
`

const Icon = styled.span`
margin-right:14px;
display:block;
width:20px;
height:20px;
background:url('../img/category_Icon.png');
background-position:${({bgPosition})=>bgPosition|| "-29px -31px"};
`

const CartegoryPopup = () => {

    return (
        <Popup>
            <Li><Icon/><Link to="/category#패션의류/잡화">패션의류/잡화</Link></Li>
            <Li><Icon bgPosition="-29px -115px"/><Link to="/category#뷰티">뷰티</Link></Li>
            <Li><Icon bgPosition="-29px -156px"/><Link to="/category#출산/유아동">출산/유아동</Link></Li>
            <Li><Icon bgPosition="-29px -199px"/><Link to="/category#식품">식품</Link></Li>
            <Li><Icon bgPosition="-29px -241px"/><Link to="/category#주방용품">주방용품</Link></Li>
            <Li><Icon bgPosition="-29px -282px"/><Link to="/category#생활용품">생활용품</Link></Li>
            <Li><Icon bgPosition="-29px -326px"/><Link to="/category#홈인테리어">홈인테리어</Link></Li>
            <Li><Icon bgPosition="-29px -368px"/><Link to="/category#가전디지털">가전디지털</Link></Li>
            <Li><Icon bgPosition="-29px -702px"/><Link to="/category#완구/취미">완구/취미</Link></Li>
        </Popup>
    )
}

export default CartegoryPopup