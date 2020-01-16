import styled, { css } from "styled-components";

const SlideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  border: 1px solid;
  ${({ topContainer }) =>
    topContainer &&
    css`
      overflow: hidden;
      display: flex;
      align-items: center;
    `}
  transition:.5s;
  left: -${({ left }) => left * 100}%;
  top: 0;
  ${({ slideCon }) =>
    slideCon &&
    css`
      z-index: -1;
    `}
`;

export default SlideContainer;
