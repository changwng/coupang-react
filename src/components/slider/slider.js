import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../container";
import Slide from "./slide";
import { SLIDE } from "../../slideConstants";
import { useApplicationContext } from "../cartProvider/cartProvider";
const Li = styled.li`
  display: flex;
  flex-direction: space-between;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border: ${({ id, state }) =>
    parseInt(id) === state ? "2px solid #4285f4" : "1px solid #ddd"};
`;

const SlideComponent = () => {
  const [slideMove, setSlideMove] = useState(0);
  const [intervalState, setintervalState] = useState(false);
  const { fetchslideList, slideList } = useApplicationContext();

  useEffect(() => {
    fetchslideList();
    const interval = setInterval(() => {
      setSlideMove(slideMove => slideMove + 1);
    }, 2000);

    if (intervalState) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [intervalState]);
  if (slideMove === SLIDE.length) {
    setSlideMove(0);
  }

  const handleMouseOver = e => {
    setintervalState(true);
    setSlideMove(parseInt(e.target.id));
  };

  const handleMouseLeave = e => {
    setintervalState(false);
    setSlideMove(parseInt(e.target.id));
  };

  return (
    <Container topContainer wsize="full" hsize="slide" display="df">
      <ul
        onMouseLeave={handleMouseLeave}
        style={{
          width: "180px",
          background: "#fff",
          position: "absolute",
          right: "250px",
          boxShadow:"0 5px 10px rgba(0,0,0,0.3)"
        }}
      >
        {slideList.map(({ content }, idx) => (
          <Li key={idx} id={idx} state={slideMove} onMouseEnter={handleMouseOver}>
            <div style={{fontSize:"13px", width:"50%", margin:"5px"}}>{content}</div>
          </Li>
        ))}
      </ul>
      <Container
        left={slideMove}
        slideCon
        transition="0.5"
        wsize="full"
        hsize="slide"
      >
        {slideList.map(({ slideImg }, idx) => {
          return (
            <Slide
              key={idx}
              color={slideImg}
              left={idx}
              style={{ backgroundPositionX: "50%" }}
            ></Slide>
          );
        })}
      </Container>
    </Container>
  );
};

export default SlideComponent;
