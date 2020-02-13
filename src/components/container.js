import styled, { css } from "styled-components";

const WIDTH_SIZES = {
  header: "1024px",
  full: "100%",
  slide: "300px",
  indi: "96px",
  button: "120px",
  img: "200px"
};
const HEIGHT_SIZES = {
  header: "120px",
  table: "124px",
  full: "100%",
  slide: "450px",
  indi: "10px",
  img: "200px",
  item: "300px"
};
const DISPLAY = {
  df: "flex",
  dib: "inline-block",
  db: "block",
  dn: "none",
  dif: "inline-flex"
};

const Container = styled.div`
      width: ${({ wsize }) => WIDTH_SIZES[wsize]};
      height: ${({ hsize }) => HEIGHT_SIZES[hsize]};
      display:${({ display }) => DISPLAY[display] || DISPLAY.dib};
  ${({ indiContainer }) =>
    indiContainer &&
    css`
      bottom: -200px;
      position: relative;
      align-items: center;
    `}
  ${({ middleContainer }) =>
    middleContainer &&
    css`
      position: absolute;
      justify-content: space-between;
      align-items: center;
    `}
  ${({ topContainer }) =>
    topContainer &&
    css`
      position: relative;
      overflow: hidden;
      align-items: center;
    `}  
  ${({ slideCon }) =>
    slideCon &&
    css`
      transition: ${({ transition }) => transition}s;
      position: absolute;
      z-index: -1;
      left: ${({ left }) => -left * 100}%;
    `}
    ${({ item }) =>
      item &&
      css`
        &:hover {
          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
        }
      `}
	${({ allCenter }) =>
    allCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export default Container;
