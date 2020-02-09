import styled, { css } from "styled-components";

const WIDTH_SIZES = {
  header: "1088px",
  full: "100%",
  slide: "300px",
  indi: "96px",
  button: "120px",
  img: "200px",
  bigImg: "440px",
  smallImg: "75px"
};
const HEIGHT_SIZES = {
  header: "120px",
  full: "100%",
  slide: "450px",
  indi: "10px",
  img: "200px",
  item: "300px",
  bigImg: "440px",
  smallImg: "75px"
};

export const Input = styled.input`
  width: 445px;
  height: 35px;
  border: 2px solid #4285f4;
  vertical-align: top;
`;

export const Button = styled.button`
  cursor: pointer;
  ${({ topButton }) =>
    topButton &&
    css`
      width: 75px;
      height: 39px;
      margin-left: 16px;
      position: "relative";
    `}
  ${({ subButton }) =>
    subButton &&
    css`
      width: 150px;
      height: 39px;
      margin: 0 10px 10px 10px;
    `}
  background: #4285f4;
  border: none;
  color: #fff;
  vertical-align: top;
  ${({ checkButton }) =>
    checkButton &&
    css`
      color: black;
      margin: 10px;
      border: 1px solid #ddd;
      background: transparent;
      padding: 8px;
    `}
  ${({ xBox }) =>
    xBox &&
    css`
      opacity: 0.3;
      width: 14px;
      height: 14px;
      border: none;
      margin: 1px 0 0 20px;
      background: url("../img/imageasset.png");
      background-position: ${({ backPosition }) => backPosition};
	  vertical-align:middle;
    `}
  ${({ quantityBtn }) =>
    quantityBtn &&
    css`
      width: 12px;
      height: 8px;
      background: url("../img/imageasset.png");
      background-position: ${({ backPosition }) => backPosition};
      border: none;
    `}
`;

export const Li = styled.li`
  font-size: 14px;
  margin-right: 10px;
  ${({ option }) =>
    option &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
    `}
`;

export const Logo = styled.h1`
  margin-left: 40px;
  width: 135px;
  height: 43px;
  background: url("../img/LOGO.png") no-repeat;
  background-position-x: -48px;
  background-size: cover;
`;

export const Img = styled.div`
	width: ${({ wsize }) => WIDTH_SIZES[wsize] || WIDTH_SIZES.full};
	height: ${({ hsize }) => HEIGHT_SIZES[hsize]};
  	background:url("../img/${({ background }) => background || "#000"}") no-repeat;
  	background-size: contain;
`;
