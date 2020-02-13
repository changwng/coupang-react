import styled from "styled-components";

const SlideContainer = styled.div`
  position: absolute;
  width: 100%;
  height:100%;
  background: url('../img/${({ color }) => color}') no-repeat;
  background-size:cover;
  left: ${({ left }) => left * 100}%;

  @media (max-width:700px) {
    display:none;
  }
`;

export default SlideContainer;
