import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ indiContainer, a }) =>
    indiContainer &&
    a &&
    css`
      bottom: -120px;
      position: relative;
      width: 96px;
      height: 10px;
      display: flex;
      align-items: center;
    `}
  ${({ middleContainer, a }) =>
    middleContainer &&
    a &&
    css`
      position: absolute;
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  ${({ topContainer, a }) =>
    topContainer &&
    a &&
    css`
      height: 300px;
      position: absolute;
      width: 100%;
      height: 300px;
      overflow: hidden;
      display: flex;
      align-items: center;
    `}  
  ${({ slideCon, left }) =>
    slideCon &&
    css`
      transition: ${({ transition }) => transition}s;
      position: absolute;
      width: 100%;
      height: 300px;
      z-index: -1;
      left: ${({ left }) => left * 100}%;
    `}
`;

export default Container;
