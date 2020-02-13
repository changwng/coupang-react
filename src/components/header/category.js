import React from 'react'
import styled from 'styled-components'

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
            <Li><Icon/>패션의류/잡화</Li>
            <Li><Icon bgPosition="-29px -115px"/>뷰티</Li>
            <Li><Icon bgPosition="-29px -156px"/>출산/유아동</Li>
            <Li><Icon bgPosition="-29px -199px"/>식품</Li>
            <Li><Icon bgPosition="-29px -241px"/>주방용품</Li>
            <Li><Icon bgPosition="-29px -282px"/>생활용품</Li>
            <Li><Icon bgPosition="-29px -326px"/>홈인테리어</Li>
            <Li><Icon bgPosition="-29px -368px"/>가전디지털</Li>
            <Li><Icon bgPosition="-29px -702px"/>완구/취미</Li>
        </Popup>
    )
}

export default CartegoryPopup