import styled from "styled-components";

const SlideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background: ${({ color }) => color};
  left: ${({ left }) => left * 100}%;
`;

export default SlideContainer;
